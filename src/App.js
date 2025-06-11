import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./index.css";
import Contacts from "./pages/Contact";

function App() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<Routes>
				<Route path="/" element={<Navigate to="/login" />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/contacts" element={<Contacts />} />
			</Routes>
		</div>
	);
}

export default App;
