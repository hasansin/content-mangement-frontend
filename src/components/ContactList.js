import React from "react";
import { FiEdit2, FiTrash2, FiUser } from "react-icons/fi";

const dummyContacts = [
	{
		id: 1,
		name: "Jane Doe",
		email: "jane@example.com",
		phone: "+1 234 567 890",
		role: "Admin",
	},
	{
		id: 2,
		name: "John Smith",
		email: "john@example.com",
		phone: "+1 987 654 321",
		role: "User",
	},
];

const ContactList = () => {
	const handleEdit = (id) => {
		alert("Edit contact ID: " + id);
	};

	const handleDelete = (id) => {
		if (window.confirm("Are you sure you want to delete this contact?")) {
			alert("Deleted contact ID: " + id);
		}
	};

	return (
		<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{dummyContacts.map((contact) => (
				<div
					key={contact.id}
					className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition"
				>
					<div className="flex items-center gap-4 mb-4">
						<div className="bg-sky-100 dark:bg-gray-700 p-3 rounded-full">
							<FiUser className="text-sky-600 dark:text-sky-300 text-xl" />
						</div>
						<div>
							<h3 className="text-lg font-semibold text-gray-800 dark:text-white">
								{contact.name}
							</h3>
							<p className="text-sm text-gray-500 dark:text-gray-300">
								{contact.role}
							</p>
						</div>
					</div>

					<div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
						<p>Email: {contact.email}</p>
						<p>Phone: {contact.phone}</p>
					</div>

					<div className="flex justify-end gap-4 mt-4">
						<button
							onClick={() => handleEdit(contact.id)}
							className="text-sky-500 hover:text-sky-700 dark:hover:text-sky-300"
							title="Edit"
						>
							<FiEdit2 />
						</button>
						<button
							onClick={() => handleDelete(contact.id)}
							className="text-rose-500 hover:text-rose-700 dark:hover:text-rose-300"
							title="Delete"
						>
							<FiTrash2 />
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default ContactList;
