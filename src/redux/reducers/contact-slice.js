import { createSlice } from "@reduxjs/toolkit";
import {
	fetchContacts,
	addContact,
	editContact,
} from "../actions/contact-actions";

const initialState = {
	list: [],
	status: "idle",
	error: null,
};
const contactsSlice = createSlice({
	name: "contacts",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchContacts.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.status = "succeeded";

				if (Array.isArray(action.payload)) {
					state.list = action.payload;
				} else if (Array.isArray(action.payload?.data)) {
					// In case it's nested like { data: [...] }
					state.list = action.payload.data;
				} else {
					state.list = [];
					console.warn("Unexpected payload structure:", action.payload);
				}
			})
			.addCase(fetchContacts.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(addContact.fulfilled, (state, action) => {
				if (action.payload.contact.hasOwnProperty("id")) {
					state.list.push(action.payload.contact);
				} else {
					console.warn(
						"Invalid payload received from addContact:",
						action.payload
					);
				}
			})
			.addCase(editContact.fulfilled, (state, action) => {
				const index = state.list.findIndex((c) => c.id === action.payload.id);
				if (index !== -1) state.list[index] = action.payload;
			});
	},
});

export default contactsSlice.reducer;
