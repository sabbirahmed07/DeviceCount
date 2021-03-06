import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const composeEnhancers =
	(process.env.NODE_ENV === 'development'
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: null) || compose;

export const middlewares = [thunk];

const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
