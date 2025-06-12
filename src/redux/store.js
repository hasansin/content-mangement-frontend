import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/auth-slice";
import contactsSlice from "./reducers/contact-slice";

const store = configureStore({
	reducer: {
		auth: authSlice,
		contacts: contactsSlice,
	},
});

export default store;
