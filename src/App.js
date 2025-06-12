import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./index.css";
import Contacts from "./pages/Contact";

function App() {
	return (
		<div className="w-full h-screen flex flex-col bg-gradient-to-br from-sky-300 via-teal-200 to-green-300">
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
