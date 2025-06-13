import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_BASE_URL}/contacts`;

const fetchContacts = async () => {
	const token = JSON.parse(sessionStorage.getItem("user")).access_token; // or get it from state/auth slice
	const response = await axios.get(API_URL, {
		headers: {
			Authorization: `Bearer ${token}`,
			"Cache-Control": "no-cache",
		},
	});
	return response.data;
};

const addContact = async (contact) => {
	const token = JSON.parse(sessionStorage.getItem("user")).access_token; // or get it from state/auth slice
	if (!token) {
		throw new Error("No token found");
	}
	const response = await axios.post(
		API_URL,
		{
			name: contact.name,
			email: contact.email,
			phone: contact.phone,
			photo: contact.photo,
		},
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);
	return response.data;
};

const editContact = async (contact) => {
	const token = JSON.parse(sessionStorage.getItem("user")).access_token; // or get it from state/auth slice
	if (!token) {
		throw new Error("No token found");
	}
	const response = await axios.patch(
		`${API_URL}/${contact.id}`,
		{
			name: contact.name,
			email: contact.email,
			phone: contact.phone,
			photo: contact.photo,
		},
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);
	return response.data;
};

const deleteContact = async (id) => {
	const token = JSON.parse(sessionStorage.getItem("user")).access_token; // or get it from state/auth slice
	if (!token) {
		throw new Error("No token found");
	}
	const response = await axios.delete(`${API_URL}/${id}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.data;
};

const contactService = {
	fetchContacts,
	addContact,
	editContact,
	deleteContact,
};

export default contactService;
