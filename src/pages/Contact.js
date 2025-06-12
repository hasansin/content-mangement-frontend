import { useState, useEffect } from "react";
import { FiUserPlus, FiLogOut, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducers/auth-slice";
import ContactList from "../components/ContactList";
import ContactForm from "../components/ContactForm";
import Modal from "../components/Modal";

const Contact = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [contacts, setContacts] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [editingContact, setEditingContact] = useState(null);

	const openEditModal = (contact) => {
		setEditingContact(contact);
		setIsModalOpen(true);
	};

	useEffect(() => {
		// Fetch contacts from API or localStorage if needed
	}, []);

	const getContacts = () => {
		// Call API here
	};

	const handleAddContact = () => {
		setEditingContact(false);
		setIsModalOpen(true);
	};

	const handleLogout = () => {
		dispatch(logout());
		navigate("/login");
	};

	const handleSave = (contact) => {
		if (contact.id) {
			// Update
			setContacts((prev) =>
				prev.map((c) => (c.id === contact.id ? contact : c))
			);
		} else {
			// Create
			const newContact = {
				...contact,
				id: Date.now(),
			};
			setContacts((prev) => [...prev, newContact]);
		}
		setIsModalOpen(false);
	};

	const handleDelete = (id) => {
		if (window.confirm("Are you sure you want to delete this contact?")) {
			setContacts((prev) => prev.filter((c) => c.id !== id));
		}
	};

	return (
		<div className="w-full h-screen flex flex-col bg-gradient-to-br from-sky-300 via-teal-200 to-green-300">
			{/* Header */}
			<header className="flex justify-between items-center px-6 py-4 bg-white/70 shadow-md sticky top-0 z-10 backdrop-blur-md rounded-b-md">
				<h3 className="text-3xl font-extrabold text-sky-700 tracking-wide flex items-center gap-2">
					<FiUser className="text-sky-600 text-4xl" />
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
			<main className="flex-grow overflow-y-auto px-6 py-4">
				<ContactList
					contacts={contacts}
					onEdit={openEditModal}
					onDelete={handleDelete}
				/>
			</main>

			{/* Footer */}
			<footer className="text-center text-gray-700 py-4 text-sm">
				<p>&copy; {new Date().getFullYear()} Contact Management App</p>
			</footer>

			{/* Modal */}
			{isModalOpen && (
				<Modal
					onClose={() => setIsModalOpen(false)}
					isOpen={isModalOpen}
					title={editingContact ? "Edit Contact" : "Add Contact"}
				>
					<ContactForm
						initialData={editingContact}
						onSave={handleSave}
						onCancel={() => setIsModalOpen(false)}
					/>
				</Modal>
			)}
		</div>
	);
};

export default Contact;
