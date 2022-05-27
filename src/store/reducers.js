import { types } from './actionTypes';
export const initialState = {
	token: null,
	auth: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_LOGGED_IN:
			return {
				...state,
				token: action.payload,
				auth: true,
			};
		case types.GET_LOGGED_OUT:
			return {
				...state,
				token: null,
				auth: false,
			};

		default:
			return state;
	}
};

export default reducer;
