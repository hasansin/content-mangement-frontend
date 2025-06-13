// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children }) => {
	const token = JSON.parse(sessionStorage.getItem("user"))?.access_token;

	// if (!token) {
	// 	return <Navigate to="/login" replace />;
	// }

	try {
		const decoded = jwtDecode(token);
		const now = Date.now() / 1000;
		console.log("Token Exp:", decoded.exp, "Now:", Date.now() / 1000);

		if (decoded.exp && decoded.exp < now) {
			// Token expired
			sessionStorage.removeItem("user");

			return <Navigate to="/login" replace />;
		}

		return children;
	} catch (error) {
		// Invalid token
		sessionStorage.removeItem("user");
		return <Navigate to="/login" replace />;
	}
};

export default ProtectedRoute;
