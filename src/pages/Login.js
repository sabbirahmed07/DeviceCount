import LoginForm from '../components/login-screen/login-form';
import classes from './login.module.css';

function Login() {
	return (
		<div className={classes.body} data-test='loginFormComponent'>
			<LoginForm />
		</div>
	);
}

export default Login;
