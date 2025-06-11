import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/actions/auth-actions";

function Register() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [role, setRole] = useState("user");

	const handleRoleChange = (e) => {
		setRole(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const result = dispatch(
			registerUser({ name, email, password, role })
		).unwrap();
	};

	return (
		<div
			className="min-h-screen bg-cover bg-center flex items-center justify-center"
			style={{ backgroundImage: "url('/bg.jpg')" }}
		>
			<div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

			<div className="relative z-10 bg-white/90 p-8 rounded-lg shadow-lg w-full max-w-md">
				<h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
					Register
				</h2>

				<form onSubmit={handleSubmit} className="space-y-4">
					<input
						type="text"
						placeholder="Full Name"
						className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
					<input
						type="email"
						placeholder="Email"
						className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<input
						type="password"
						placeholder="Password"
						className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>

					{/* 👤 Role Selection */}
					<div>
						<label className="block text-gray-700 font-semibold mb-2">
							Select Role:
						</label>
						<div className="space-y-2">
							{["user", "admin"].map((r) => (
								<label key={r} className="flex items-center space-x-2">
									<input
										type="radio"
										name="role"
										value={r}
										checked={role === r}
										onChange={handleRoleChange}
										className="text-green-600"
										defaultChecked={r === "user"}
									/>
									<span className="capitalize text-gray-700">{r}</span>
								</label>
							))}
						</div>
					</div>

					<button
						type="submit"
						className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
					>
						Register
					</button>
				</form>
				<p className="mt-4 text-sm text-gray-600">
					Already have an account?{" "}
					<a href="/login" className="text-green-500 hover:underline">
						Login
					</a>
				</p>
			</div>
		</div>
	);
}

export default Register;
