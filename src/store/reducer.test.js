import { types } from './actionTypes';
import reducer, { initialState } from './reducers';

describe('Login Reducer', () => {
	it('Should return default state', () => {
		const newState = reducer(undefined, {});
		expect(newState).toEqual(initialState);
	});

	it('should return a token after login', () => {
		let token = 'Random';
		let updatedState = {
			...initialState,
			token: token,
			auth: true,
		};
		const newState = reducer(undefined, {
			type: types.GET_LOGGED_IN,
			payload: token,
		});
		expect(newState).toEqual(updatedState);
	});

	it('should return the state of logout', () => {
		const newState = reducer(undefined, {
			type: types.GET_LOGGED_OUT,
		});
		expect(newState).toEqual(initialState);
	});
});
