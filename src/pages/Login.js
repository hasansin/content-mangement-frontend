import { Link } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../redux/actions/auth-actions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

function Login() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const result = dispatch(loginUser({ email, password })).unwrap();
		result
			.then((data) => {
				toast.success("Login successful!");
				navigate("/contacts");
			})
			.catch((error) => {
				toast.error(" Login failed: ");
			});
	};

	return (
		<div
			className="min-h-screen bg-cover bg-center flex items-center justify-center dark:bg-gray-900"
			style={{ backgroundImage: "url('/bg.jpg')" }}
		>
			<div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md w-full max-w-md transition-colors">
				<h2 className="text-2xl font-bold mb-6 text-center text-teal-500 dark:text-teal-400">
					Login
				</h2>
				<form onSubmit={handleSubmit} className="space-y-4">
					<input
						type="email"
						placeholder="Email"
						className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<input
						type="password"
						placeholder="Password"
						className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<button
						type="submit"
						className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-sky-500 to-teal-500 text-white px-4 py-2 rounded shadow hover:scale-105 transform transition"
					>
						<FiLogIn className="text-lg" />
						Log In
					</button>
				</form>
				<p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
					Don't have an account?{" "}
					<Link to="/register" className="text-teal-500 dark:text-teal-400">
						Register
					</Link>
				</p>
			</div>
		</div>
	);
}

export default Login;
