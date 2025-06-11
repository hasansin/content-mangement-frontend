import axios from "axios";

const API_URL = "http://localhost:3000/auth/";

const register = async (userData) => {
	const response = await axios.post(API_URL + "register", userData);
	return response.data;
};

const login = async (credentials) => {
	const response = await axios.post(API_URL + "login", credentials);
	return response.data;
};

const authService = {
	register,
	login,
};

export default authService;
