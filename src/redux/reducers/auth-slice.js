import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./../actions/auth-actions";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
	user: user || null,
	token: user?.token || null,
	isLoading: false,
	error: null,
	isAuthenticated: !!user,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout(state) {
			state.user = null;
			state.token = null;
			state.isAuthenticated = false;
			localStorage.removeItem("user");
		},
	},
	extraReducers: (builder) => {
		builder
			// Login
			.addCase(loginUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.isAuthenticated = true;
				state.isLoading = false;
				localStorage.setItem("user", JSON.stringify(action.payload));
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.error = action.payload;
				state.isLoading = false;
			})

			// Register
			.addCase(registerUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.isAuthenticated = true;
				state.isLoading = false;
				localStorage.setItem("user", JSON.stringify(action.payload));
			})
			.addCase(registerUser.rejected, (state, action) => {
				state.error = action.payload;
				state.isLoading = false;
			});
	},
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
