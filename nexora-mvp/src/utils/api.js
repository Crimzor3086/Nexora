import { getAuthToken } from './auth';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.example.com';

const buildHeaders = (headers = {}) => {
	const token = getAuthToken();
	const authHeader = token ? { Authorization: `Bearer ${token}` } : {};
	return {
		'Content-Type': 'application/json',
		...authHeader,
		...headers,
	};
};

export async function request(path, { method = 'GET', headers, body } = {}) {
	const res = await fetch(`${BASE_URL}${path}`, {
		method,
		headers: buildHeaders(headers),
		body: body ? JSON.stringify(body) : undefined,
	});
	const contentType = res.headers.get('content-type') || '';
	const isJson = contentType.includes('application/json');
	const data = isJson ? await res.json() : await res.text();
	if (!res.ok) {
		const error = new Error((data && data.message) || res.statusText);
		error.status = res.status;
		error.data = data;
		throw error;
	}
	return data;
}

export const api = {
	get: (p) => request(p, { method: 'GET' }),
	post: (p, b) => request(p, { method: 'POST', body: b }),
	put: (p, b) => request(p, { method: 'PUT', body: b }),
	patch: (p, b) => request(p, { method: 'PATCH', body: b }),
	delete: (p) => request(p, { method: 'DELETE' }),
};
