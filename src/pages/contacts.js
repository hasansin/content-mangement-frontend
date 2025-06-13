import { useState, useEffect } from "react";
import { FiUserPlus, FiLogOut, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/reducers/auth-slice";
import ContactList from "../components/contact-list";
import ContactForm from "../components/contact-form";
import Modal from "../components/modal";
import DeleteConfirm from "../components/delete-confirm";
import {
	fetchContacts,
	addContact,
	editContact,
	deleteContact,
} from "../redux/actions/contact-actions";
import { toast } from "react-toastify";

const Contact = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [contacts, setContacts] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [editingContact, setEditingContact] = useState(null);
	const [deletingContact, setDeletingContact] = useState(null);

	const [isEditing, setIsEditing] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [sortKey, setSortKey] = useState("name");
	const [sortOrder, setSortOrder] = useState("asc");
	const [currentPage, setCurrentPage] = useState(1);

	const contactsPerPage = 6;

	const contactStatus = useSelector((state) => state.contacts.status);
	const contactError = useSelector((state) => state.contacts.error);
	const contactList = useSelector((state) => state.contacts.list);

	const openEditModal = (contact) => {
		setEditingContact(contact);
		setIsEditing(true);
		setDeletingContact(null);
		setIsDeleting(false);
		setIsModalOpen(true);
	};

	useEffect(() => {
		if (contactStatus === "idle") {
			fetchContactsData();
		}
	}, [contactStatus, dispatch]);

	const fetchContactsData = () => {
		dispatch(fetchContacts())
			.unwrap()
			.then((data) => {
				console.log("Contacts fetched successfully:", data);
			})
			.catch((error) => {
				console.error("Failed to fetch contacts:", error);
			});
	};

	const editContactData = (contact) => {
		dispatch(editContact(contact))
			.unwrap()
			.then(() => {
				// setContacts((prev) =>
				// 	prev.map((c) => (c.id === contact.id ? contact : c))
				// );
				fetchContactsData();

				setIsModalOpen(false);
				setEditingContact(null);
				setIsEditing(false);

				toast.success("Contact updated successfully!");
			})
			.catch((error) => {
				console.error("Failed to update contact:", error);
				toast.error("Failed to update contact. Please try again.");
			});
	};

	const addContactData = (contact) => {
		dispatch(addContact(contact))
			.unwrap()
			.then(() => {
				// setContacts((prev) => [...prev, newContactFromAPI]);
				setIsModalOpen(false);
				setEditingContact(null);
				setIsEditing(false);
				fetchContactsData();
				toast.success("Contact added successfully!");
			})
			.catch((error) => {
				toast.error("Failed to add contact. Please try again.");
			});
	};

	const deleteContactData = (id) => {
		dispatch(deleteContact(id))
			.unwrap()
			.then(() => {
				// setContacts((prev) => prev.filter((c) => c.id !== id));
				setIsDeleting(false);
				setIsModalOpen(false);
				setDeletingContact(null);
				dispatch(fetchContacts());
				toast.success("Contact deleted successfully!");
			})
			.catch((error) => {
				console.error("Failed to delete contact:", error);
			});
	};

	const handleAddContact = () => {
		setIsEditing(false);
		setEditingContact(null);
		setDeletingContact(null);
		setIsDeleting(false);
		setIsModalOpen(true);
	};

	const handleLogout = () => {
		dispatch(logout());
		navigate("/login");
	};

	const handleSave = (contact) => {
		if (contact.id) {
			// Update
			editContactData(contact);
		} else {
			// Create
			addContactData(contact);
		}
		setIsModalOpen(false);
	};

	const handleDelete = (id) => {
		setIsModalOpen(true);
		setDeletingContact(id);
		setIsDeleting(true);
		setEditingContact(null);
		setIsEditing(false);
	};

	const filteredContacts = contactList
		.filter((c) =>
			`${c.name} ${c.email}`.toLowerCase().includes(searchQuery.toLowerCase())
		)
		.sort((a, b) => {
			const fieldA = a[sortKey]?.toLowerCase?.() ?? "";
			const fieldB = b[sortKey]?.toLowerCase?.() ?? "";
			return sortOrder === "asc"
				? fieldA.localeCompare(fieldB)
				: fieldB.localeCompare(fieldA);
		});

	const totalPages = Math.ceil(filteredContacts.length / contactsPerPage);
	const paginatedContacts = filteredContacts.slice(
		(currentPage - 1) * contactsPerPage,
		currentPage * contactsPerPage
	);

	return (
		<div className="w-full h-screen flex flex-col bg-gradient-to-br from-sky-300 via-teal-200 to-green-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100">
			{/* Header */}
			<header className="flex justify-between items-center px-6 py-4 bg-white/70 dark:bg-gray-900/80 shadow-md sticky top-0 z-10 backdrop-blur-md rounded-b-md">
				<h3 className="text-3xl font-extrabold text-sky-700 dark:text-teal-300 tracking-wide flex items-center gap-2">
					<FiUser className="text-sky-600 dark:text-teal-400 text-4xl" />
					My Contacts
				</h3>
				<div className="flex flex-wrap items-center gap-3">
					<button
						onClick={handleAddContact}
						className="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-teal-500 text-white px-4 py-2 rounded shadow hover:scale-105 transform transition"
					>
						<FiUserPlus className="text-lg" />
						Add Contact
					</button>
					<button
						onClick={handleLogout}
						className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-rose-400 text-white px-4 py-2 rounded shadow hover:scale-105 transform transition"
					>
						<FiLogOut className="text-lg" />
						Logout
					</button>
				</div>
			</header>

			{/* Main Content */}
			<main className="flex-grow overflow-y-auto px-6 py-4 bg-white/60 dark:bg-gray-800/80 rounded-lg shadow-inner transition-colors">
				<div className="mb-4 flex flex-col md:flex-row gap-4 justify-between items-center">
					<input
						type="text"
						placeholder="Search by name or email..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="w-full md:w-1/3 px-4 py-2 border rounded shadow dark:bg-gray-700 dark:text-white"
					/>

					<div className="flex gap-3 items-center">
						<select
							value={sortKey}
							onChange={(e) => setSortKey(e.target.value)}
							className="px-2 py-1 border rounded dark:bg-gray-700 dark:text-white"
						>
							<option value="name">Name</option>
							<option value="createdAt">Created Date</option>
						</select>
						<button
							onClick={() =>
								setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
							}
							className="px-2 py-1 bg-teal-500 text-white rounded shadow hover:scale-105 transform transition"
						>
							{sortOrder === "asc" ? "⬆ Asc" : "⬇ Desc"}
						</button>
					</div>
				</div>

				<ContactList
					contacts={paginatedContacts}
					onEdit={openEditModal}
					onDelete={handleDelete}
				/>
			</main>
			<div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
				{Array.from({ length: totalPages }, (_, i) => (
					<button
						key={i}
						onClick={() => setCurrentPage(i + 1)}
						className={`px-3 py-1 rounded shadow ${
							currentPage === i + 1
								? "bg-teal-500 text-white"
								: "bg-white text-gray-700 dark:bg-gray-700 dark:text-gray-200"
						} hover:scale-105 transition`}
					>
						{i + 1}
					</button>
				))}
			</div>

			{/* Footer */}

			<footer className="text-center text-gray-700 dark:text-gray-400 py-4 text-sm">
				<p>&copy; {new Date().getFullYear()} Contact Management App</p>
			</footer>

			{/* Modal */}
			{isModalOpen && (
				<Modal
					onClose={() => setIsModalOpen(false)}
					isOpen={isModalOpen}
					title={
						!isDeleting
							? isEditing
								? "Edit Contact"
								: "Add New Contact"
							: "Delete Contact"
					}
				>
					{!isDeleting ? (
						<ContactForm
							initialData={editingContact}
							onSave={handleSave}
							onCancel={() => setIsModalOpen(false)}
						/>
					) : (
						<DeleteConfirm
							onConfirm={() => {
								const id = deletingContact;
								if (!id) return;
								deleteContactData(id);
								setIsModalOpen(false);
							}}
							onCancel={() => setIsModalOpen(false)}
						/>
					)}
				</Modal>
			)}
		</div>
	);
};

export default Contact;
