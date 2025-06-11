import { createAsyncThunk } from "@reduxjs/toolkit";

import authService from "../../services/auth-service";

export const registerUser = createAsyncThunk(
	"auth/register",
	async (userData, thunkAPI) => {
		try {
			return await authService.register(userData);
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const loginUser = createAsyncThunk(
	"auth/login",
	async (credentials, thunkAPI) => {
		try {
			return await authService.login(credentials);
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
