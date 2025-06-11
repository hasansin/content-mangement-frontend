import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../redux/actions/auth-actions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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
				console.log("Login successful:", data);
				toast.success("🎉 Login successful!");
				navigate("/contacts");
			})
			.catch((error) => {
				console.error("Login failed:", error);
				toast.error("❌ Login failed: " + error.message);
			});
	};

	return (
		<div
			className="min-h-screen bg-cover bg-center flex items-center justify-center"
			style={{ backgroundImage: "url('/bg.jpg')" }}
		>
			<div className="bg-white p-8 rounded shadow-md w-full max-w-md">
				<h2 className="text-2xl font-bold mb-6">Login</h2>
				<form onSubmit={handleSubmit} className="space-y-4">
					<input
						type="email"
						placeholder="Email"
						className="w-full p-2 border rounded"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<input
						type="password"
						placeholder="Password"
						className="w-full p-2 border rounded"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<button
						type="submit"
						className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
					>
						Log In
					</button>
				</form>
				<p className="mt-4 text-sm text-gray-600">
					Don't have an account?{" "}
					<Link to="/register" className="text-blue-500">
						Register
					</Link>
				</p>
			</div>
		</div>
	);
}

export default Login;
