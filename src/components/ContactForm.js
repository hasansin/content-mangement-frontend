import { useState, useEffect } from "react";
import { FiSave, FiX } from "react-icons/fi";

const ContactForm = ({ initialData = {}, onSave, onCancel }) => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		photo: "",
	});

	useEffect(() => {
		if (initialData) {
			setForm(initialData);
		}
	}, [initialData]);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSave(form);
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			{/* Name */}
			<div>
				<label className="block text-sm font-medium mb-1 text-gray-700">
					Name
				</label>
				<input
					name="name"
					value={form.name}
					onChange={handleChange}
					required
					className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
				/>
			</div>

			{/* Email */}
			<div>
				<label className="block text-sm font-medium mb-1 text-gray-700">
					Email
				</label>
				<input
					name="email"
					type="email"
					value={form.email}
					onChange={handleChange}
					required
					className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
				/>
			</div>

			{/* Phone */}
			<div>
				<label className="block text-sm font-medium mb-1 text-gray-700">
					Phone
				</label>
				<input
					name="phone"
					value={form.phone}
					onChange={handleChange}
					required
					className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
				/>
			</div>

			{/* Photo */}
			<div>
				<label className="block text-sm font-medium mb-1 text-gray-700">
					Photo URL
				</label>
				<input
					name="photo"
					value={form.photo}
					onChange={handleChange}
					className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
				/>
			</div>

			{/* Action Buttons */}
			<div className="flex justify-end gap-4 pt-4">
				<button
					type="button"
					onClick={onCancel}
					className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
				>
					<FiX />
					Cancel
				</button>

				<button
					type="submit"
					className="flex items-center gap-2 px-4 py-2 rounded-md text-white bg-gradient-to-r from-sky-500 to-teal-500 hover:scale-105 transform transition"
				>
					<FiSave />
					Save
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
