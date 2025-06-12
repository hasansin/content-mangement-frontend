import { createAsyncThunk } from "@reduxjs/toolkit";
import contactService from "../../services/contact-sevice";

export const fetchContacts = createAsyncThunk(
	"contacts/fetchContacts",
	async (_, thunkAPI) => {
		try {
			return await contactService.fetchContacts();
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
export const addContact = createAsyncThunk(
	"contacts/addContact",
	async (contact, thunkAPI) => {
		try {
			return await contactService.addContact(contact);
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const editContact = createAsyncThunk(
	"contacts/editContact",
	async (contact, thunkAPI) => {
		try {
			return await contactService.editContact(contact);
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
export const deleteContact = createAsyncThunk(
	"contacts/deleteContact",
	async (id, thunkAPI) => {
		try {
			return await contactService.deleteContact(id);
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
