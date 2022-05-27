import axios from 'axios';

const setAuthToken = (token) => {
	// axios.defaults.baseURL = 'https://localhost:44367/api';
	axios.defaults.baseURL = 'http://35.201.2.209:8000';

	if (token) {
		axios.defaults.headers.common = {
			Authorization: `Bearer ${token}`,
		};
	} else {
		delete axios.defaults.headers.common['Authorization'];
	}
};

export default setAuthToken;
