// src/pages/Contact.js
import React from "react";
import { FiUserPlus, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducers/auth-slice"; // Adjust if you renamed it
import ContactList from "../components/ContactList"; // Ensure you have this

const Contact = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
		navigate("/login");
	};

	const handleAddContact = () => {
		// TODO: Open add contact modal
		alert("Open Add Contact Modal");
	};

	return (
		<div className="min-h-screen bg-gradient-to-r from-sky-100 via-rose-100 to-teal-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all">
			{/* Header */}
			<header className="flex justify-between items-center px-6 py-4 bg-white/80 dark:bg-gray-900/80 shadow-md sticky top-0 z-10 backdrop-blur-sm">
				<h1 className="text-3xl font-bold text-sky-700 dark:text-sky-300">
					📇 My Contacts
				</h1>
				<div className="flex items-center gap-4">
					<button
						onClick={handleAddContact}
						className="flex items-center gap-2 bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition"
					>
						<FiUserPlus />
						Add Contact
					</button>
					<button
						onClick={handleLogout}
						className="flex items-center gap-2 bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition"
					>
						<FiLogOut />
						Logout
					</button>
				</div>
			</header>

			{/* Main content */}
			<main className="p-6">
				<ContactList />
			</main>
		</div>
	);
};

export default Contact;
