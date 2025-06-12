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
				state.list = action.payload;
			})
			.addCase(fetchContacts.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(addContact.fulfilled, (state, action) => {
				state.list.push(action.payload);
			})
			.addCase(editContact.fulfilled, (state, action) => {
				const index = state.list.findIndex((c) => c.id === action.payload.id);
				if (index !== -1) state.list[index] = action.payload;
			});
	},
});

export default contactsSlice.reducer;
