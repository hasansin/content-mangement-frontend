import { useState, useEffect } from "react";
import { FiSave, FiX, FiUpload, FiImage } from "react-icons/fi";

const ContactForm = ({ initialData = {}, onSave, onCancel }) => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		photo: "",
	});
	const [photoPreview, setPhotoPreview] = useState("");

	useEffect(() => {
		if (initialData) {
			setForm(initialData);
			setPhotoPreview(initialData.photo || "");
		}
	}, [initialData]);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handlePhotoChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setPhotoPreview(reader.result);
				setForm({ ...form, photo: reader.result });
			};
			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSave(form);
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-6 p-6">
			{/* Name */}
			<div>
				<label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
					Name
				</label>
				<input
					name="name"
					value={form.name}
					onChange={handleChange}
					required
					className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-md focus:ring-2 focus:ring-sky-400"
				/>
			</div>

			{/* Email */}
			<div>
				<label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
					Email
				</label>
				<input
					name="email"
					type="email"
					value={form.email}
					onChange={handleChange}
					required
					className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-md focus:ring-2 focus:ring-sky-400"
				/>
			</div>

			{/* Phone */}
			<div>
				<label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
					Phone
				</label>
				<input
					name="phone"
					value={form.phone}
					onChange={handleChange}
					required
					className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-md focus:ring-2 focus:ring-sky-400"
				/>
			</div>

			{/* Photo Upload Section */}
			<div>
				<label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
					Photo
				</label>

				<div className="border-2 border-dashed border-sky-400 dark:border-teal-400 rounded-lg p-6 flex flex-col items-center justify-center bg-sky-50 dark:bg-gray-800 hover:bg-sky-100 dark:hover:bg-gray-700 transition">
					{photoPreview ? (
						<img
							src={photoPreview}
							alt="Preview"
							className="w-32 h-32 object-cover rounded-full shadow mb-4"
						/>
					) : (
						<div className="flex flex-col items-center text-sky-600 dark:text-teal-300 mb-4">
							<FiUpload className="text-4xl mb-2" />
							<p className="text-sm">
								Click the button below to upload a photo
							</p>
						</div>
					)}

					<label className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-white bg-gradient-to-r from-sky-500 to-teal-500 cursor-pointer hover:scale-105 transform transition">
						<FiImage className="text-lg" />
						<span>Upload Photo</span>
						<input
							type="file"
							accept="image/*"
							onChange={handlePhotoChange}
							className="hidden"
						/>
					</label>
				</div>
			</div>

			{/* Action Buttons */}
			<div className="flex justify-end gap-4 pt-4">
				<button
					type="button"
					onClick={onCancel}
					className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-500 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105 transform transition"
				>
					<FiX /> Cancel
				</button>

				<button
					type="submit"
					className="flex items-center gap-2 px-4 py-2 rounded-md text-white bg-gradient-to-r from-sky-500 to-teal-500 hover:scale-105 transform transition"
				>
					<FiSave /> Save
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
