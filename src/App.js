import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import "./index.css";
import Contacts from "./pages/contacts";
import ThemeToggle from "./components/theme-toggle";
import ProtectedRoute from "./components/protected-route";
function App() {
	return (
		<div className="w-full h-full  flex flex-col bg-gradient-to-br from-sky-300 via-teal-200 to-green-300">
			<header className="flex justify-end p-4 dark:bg-gray-900  dark:shadow-lg">
				<ThemeToggle />
			</header>

			<Routes>
				<Route path="/" element={<Navigate to="/login" />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />

				<Route
					path="/contacts"
					element={
						<ProtectedRoute>
							<Contacts />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
