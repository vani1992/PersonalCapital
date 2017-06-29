import axios from 'axios';

export const FETCH_INSTITUTE = "FETCH_INSTITUTE";
const url = 'http://localhost:8080/data.json';

export function fetchInstitutes() {
	const request = axios.get(url);

	return {
		type: FETCH_INSTITUTE,
		payload: request
	}
}