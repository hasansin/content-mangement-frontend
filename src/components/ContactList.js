import { FiEdit2, FiTrash2 } from "react-icons/fi";

const ContactList = ({ contacts, onEdit, onDelete }) => {
	return (
		<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{contacts.map((contact) => (
				<div
					key={contact.id}
					className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition"
				>
					<div className="flex items-center gap-4 mb-4">
						<img
							src={contact.photo || "https://via.placeholder.com/50"}
							alt={contact.name}
							className="w-12 h-12 rounded-full object-cover"
						/>
						<div>
							<h3 className="text-lg font-semibold text-gray-800 dark:text-white">
								{contact.name}
							</h3>
						</div>
					</div>

					<div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
						<p>Email: {contact.email}</p>
						<p>Phone: {contact.phone}</p>
					</div>

					<div className="flex justify-end gap-4 mt-4">
						<button
							onClick={() => onEdit(contact)}
							className="text-sky-500 hover:text-sky-700 dark:hover:text-sky-300"
							title="Edit"
						>
							<FiEdit2 />
						</button>
						<button
							onClick={() => onDelete(contact.id)}
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
