export const isInputEmail = (event) => {
	let ch = String.fromCharCode(event.which);

	if (!/[a-zA-Z@0-9.-_]/.test(ch)) {
		event.preventDefault();
	}
};
