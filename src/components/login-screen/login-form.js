import { useState } from 'react';
import axios from 'axios';
import { Grid, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

import classes from './login-form.module.css';

import CustomTextField from '../ui/Textfield';
import CustomButton from '../ui/Button';

import { isInputEmail } from '../../utils/inputevent';
import { loginvalidation } from '../../validation/login-form';
import { getLoggedIn } from '../../store/actions';

function LoginForm() {
	const { push } = useHistory();
	const dispatch = useDispatch();
	const [loggedInData, setLoggedInData] = useState({
		email: '',
		password: '',
		errors: {},
		errorMessage: '',
	});
	const removeError = (name) => {
		const { errors } = loggedInData;
		delete errors[name];
		setLoggedInData((prev) => ({
			...prev,
			errors: errors,
		}));
	};
	const handleLoggedInData = (name, value) => {
		removeError(name);
		setLoggedInData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const submitLoginHandler = async () => {
		const postData = {
			email: loggedInData.email,
			password: loggedInData.password,
		};
		const { isError, errors } = loginvalidation(postData);

		if (isError) {
			setLoggedInData((prev) => ({
				...prev,
				errors: errors,
			}));
		} else {
			try {
				const response = await axios.post('/login', postData);

				if (response.status === 200) {
					dispatch(getLoggedIn(response.data));
					push('/devices');
				}
			} catch (error) {
				setLoggedInData((prev) => ({
					...prev,
					errorMessage: error.response.data,
				}));
			}
		}
	};

	return (
		<Grid container justifyContent='center' className={classes.container}>
			<Grid
				item
				xl={3}
				sm={6}
				xs={12}
				container
				spacing={2}
				className={classes.innerContainer}>
				<Grid item xs={12}>
					<Typography variant='h4' className={classes.loginText}>
						Login
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<CustomTextField
						value={loggedInData.email}
						label='Email Address'
						required={true}
						errorText={loggedInData.errors.email}
						title='Enter The Valid Email'
						adorMent={<EmailIcon />}
						onChange={(e) => handleLoggedInData('email', e.target.value)}
						onKeyPress={isInputEmail}
					/>
				</Grid>
				<Grid item xs={12}>
					<CustomTextField
						value={loggedInData.password}
						label='Password'
						required={true}
						errorText={loggedInData.errors.password}
						onChange={(e) => handleLoggedInData('password', e.target.value)}
						title='Enter Password'
						type='password'
						adorMent={<LockIcon />}
					/>
				</Grid>
				<Grid item xs={12} container>
					<strong className={classes.errorText}>
						{loggedInData.errorMessage}
					</strong>
				</Grid>
				<Grid item xs={12} container justifyContent='center'>
					<Grid item xs={4}>
						<CustomButton
							title='Login'
							onClick={submitLoginHandler}
							fullWidth={true}
							className={classes.loginButton}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default LoginForm;
