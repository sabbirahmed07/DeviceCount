import { types } from './actionTypes';
import setAuthToken from '../base';
export const getLoggedIn = (data) => {
	return (dispatch) => {
		localStorage.setItem('token', data);
		setAuthToken(data);
		dispatch({
			type: types.GET_LOGGED_IN,
			payload: data,
		});
	};
};

export const getLoggedOut = () => {
	return (dispatch) => {
		localStorage.clear();
		dispatch({
			type: types.GET_LOGGED_OUT,
		});
	};
};
