import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
	const auth = localStorage.getItem('token') ? true : false;

	return (
		<Route
			{...rest}
			render={({ location }) =>
				auth ? (
					<Component />
				) : (
					<Redirect
						to={{
							pathname: '/',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}

export default PrivateRoute;
