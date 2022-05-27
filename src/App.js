import { Route, Switch } from 'react-router-dom';
import setAuthToken from './base';
import PrivateRoute from './components/route/private-route';
import Device from './pages/Device';
import Login from './pages/Login';
import NotFound from './components/route/not-found';

if (localStorage.getItem('token')) {
	setAuthToken(localStorage.getItem('token'));
} else {
	setAuthToken(null);
}

function App() {
	return (
		<Switch>
			<Route exact path='/' component={Login} />
			<PrivateRoute exact path='/devices' component={Device} />
			<Route component={NotFound} />
		</Switch>
	);
}

export default App;
