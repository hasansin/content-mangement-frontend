import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/actions/auth-actions";
import { FiBook } from "react-icons/fi";

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
			<div className="relative z-10 bg-white/90 p-8 rounded-2xl shadow-lg w-full max-w-md">
				<h2 className="text-3xl font-bold text-center text-teal-500 mb-6">
					Registration
				</h2>

				<form onSubmit={handleSubmit} className="space-y-4">
					<input
						type="text"
						placeholder="Full Name"
						className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
					<input
						type="email"
						placeholder="Email"
						className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<input
						type="password"
						placeholder="Password"
						className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>

					{/*  Role Selection */}
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
										className="text-teal-600"
										defaultChecked={r === "user"}
									/>
									<span className="capitalize text-gray-700">{r}</span>
								</label>
							))}
						</div>
					</div>

					<button
						type="submit"
						className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-sky-500 to-teal-500 text-white px-4 py-2 rounded shadow hover:scale-105 transform transition"
					>
						<FiBook className="text-lg" />
						Register
					</button>
				</form>
				<p className="mt-4 text-sm text-gray-600">
					Already have an account?{" "}
					<a href="/login" className="text-teal-500">
						Login
					</a>
				</p>
			</div>
		</div>
	);
}

export default Register;
