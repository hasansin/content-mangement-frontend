import { FiEdit2, FiTrash2 } from "react-icons/fi";
import NoResults from "./no-results";
const defaultAvatar = "https://cdn-icons-png.flaticon.com/512/847/847969.png";

const ContactList = ({ contacts, onEdit, onDelete }) => {
	return (
		<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
			{contacts.length === 0 && (
				<NoResults text={"No contacts found. Please add some contacts."} />
			)}
			{contacts.map((contact) => (
				<div
					key={contact.id}
					className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
				>
					<div className="flex items-center gap-4 mb-4">
						<img
							loading="lazy"
							src={contact.photo || defaultAvatar}
							alt={contact.photo ? contact.name : "Default avatar"}
							className="w-14 h-14 rounded-full object-cover border-2 border-sky-300 dark:border-teal-400"
						/>

						<div>
							<h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
								{contact.name}
							</h3>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								{contact.email}
							</p>
						</div>
					</div>

					<div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
						<p>
							<span className="font-medium">Phone:</span> {contact.phone}
						</p>
					</div>

					<div className="flex justify-end gap-3 mt-6">
						<button
							aria-label={`Edit contact ${contact.name}`}
							onClick={() => onEdit(contact)}
							className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm text-white bg-gradient-to-r from-sky-500 to-teal-500 hover:scale-105 transform transition shadow focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
							title="Edit"
						>
							<FiEdit2 className="text-sm" />
							<span>Edit</span>
						</button>
						<button
							aria-label={`Delete contact ${contact.name}`}
							onClick={() => {
								onDelete(contact.id);
							}}
							className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm text-white bg-gradient-to-r from-red-500 to-rose-400 hover:scale-105 transform transition shadow focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
							title="Delete"
						>
							<FiTrash2 className="text-sm" />
							<span>Delete</span>
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default ContactList;
