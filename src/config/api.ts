import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

import type { IResponse, ITokens } from '../interfaces';

export const API_URL = 'http://localhost:8080/api';

const api = axios.create({
	baseURL: API_URL
});

api.interceptors.request.use(async (config) => {
	const accessToken = localStorage.getItem('accessToken');
	const refreshToken = localStorage.getItem('refreshToken');

	if (accessToken && refreshToken) {
		const claims = jwtDecode(accessToken);

		if (claims && claims.exp && claims.exp < Date.now() / 1000) {
			try {
				const response = await axios.post(`${API_URL}/auth/refresh`, { refreshToken });
				const res = response.data as IResponse<ITokens>;

				if (res.code === 0) {
					throw new Error(res.msg);
				}

				localStorage.setItem('accessToken', res.data.access_token);
				localStorage.setItem('refreshToken', res.data.refresh_token);

				config.headers.Authorization = `Bearer ${res.data.access_token}`;
			} catch (error) {
				console.error(error);
				localStorage.removeItem('accessToken');
				localStorage.removeItem('refreshToken');
			}
		} else {
			config.headers.Authorization = `Bearer ${accessToken}`;
		}
	} else {
		localStorage.removeItem('accessToken');
		localStorage.removeItem('refreshToken');
	}

	return config;
});

api.interceptors.response.use(
	(response) => response.data,
	(error) => {
		return Promise.reject(error);
	}
);

export { api };
