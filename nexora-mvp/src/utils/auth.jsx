import React, { createContext, useContext, useEffect, useState } from 'react';

const TOKEN_KEY = 'nexora_token';
const USER_KEY = 'nexora_user';

export const getAuthToken = () => {
	return localStorage.getItem(TOKEN_KEY);
};

export const setAuthToken = (token) => {
	localStorage.setItem(TOKEN_KEY, token);
};

export const clearAuthToken = () => {
	localStorage.removeItem(TOKEN_KEY);
};

export const getStoredUser = () => {
	const raw = localStorage.getItem(USER_KEY);
	return raw ? JSON.parse(raw) : null;
};

export const setStoredUser = (user) => {
	localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const clearStoredUser = () => {
	localStorage.removeItem(USER_KEY);
};

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(getAuthToken());
	const [user, setUser] = useState(getStoredUser());

	useEffect(() => {
		if (token) {
			setAuthToken(token);
		} else {
			clearAuthToken();
		}
	}, [token]);

	useEffect(() => {
		if (user) {
			setStoredUser(user);
		} else {
			clearStoredUser();
		}
	}, [user]);

	const login = async ({ email, password }) => {
		await new Promise((r) => setTimeout(r, 400));
		if (!email || !password) throw new Error('Missing credentials');
		const mockToken = 'mock-token-' + Math.random().toString(36).slice(2);
		const mockUser = { name: 'Jane Doe', email };
		setToken(mockToken);
		setUser(mockUser);
		return { token: mockToken, user: mockUser };
	};

	const logout = () => {
		setToken(null);
		setUser(null);
	};

	const value = {
		token,
		user,
		isAuthenticated: Boolean(token),
		login,
		logout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
