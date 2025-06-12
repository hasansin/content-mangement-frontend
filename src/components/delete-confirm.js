import { FiX, FiTrash2 } from "react-icons/fi";
function DeleteConfirm({ onConfirm, onCancel }) {
	return (
		<div className="text-center">
			<p className="text-lg mb-4">
				Are you sure you want to delete this contact?
			</p>
			<div className="flex justify-center gap-4">
				<button
					onClick={onCancel}
					className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 text-gray-600 bg-white hover:bg-gray-100 hover:scale-105 transform transition"
				>
					<FiX /> Cancel
				</button>
				<button
					onClick={onConfirm}
					className="bg-gradient-to-r from-red-500 to-rose-400 text-white px-4 py-2 rounded shadow hover:scale-105 transform transition"
				>
					<FiTrash2 className="inline-block mr-2" />
					Confirm
				</button>
			</div>
		</div>
	);
}
export default DeleteConfirm;
