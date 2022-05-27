export const loginvalidation = (data) => {
	const { email, password } = data;

	let isError = false;
	const errors = {};

	if (!email) {
		isError = true;
		errors.email = 'Email Required';
	}

	if (!password) {
		isError = true;
		errors.password = 'Password Required';
	}

	return { isError, errors };
};
