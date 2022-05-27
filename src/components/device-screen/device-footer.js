import { Grid } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classes from './device-footer.module.css';

import CustomButton from '../ui/Button';
import { getLoggedOut } from '../../store/actions';

function DeviceFooter() {
	const dispatch = useDispatch();
	const { push } = useHistory();

	const submitNotify = async () => {
		const notifyData = {
			name: 'Sabbir Ahmed Sristy',
			email: 'sabbirsristy@gmail.com',
			repoUrl: 'https://github.com/sabbirahmed07/deviceCount.git',
			message:
				'I have tried to implement whatever you have asked in the task. Hopefully you will like it.',
		};
		try {
			const res = await axios.post('/notify', notifyData);
			if (res.status === 200) {
				push('/');
			}
		} catch (error) {
			console.log(error.response);
		}
	};

	return (
		<Grid className={classes.footer} container justifyContent='center'>
			<Grid item md={3} xs={6} container spacing={2}>
				<Grid item md={6} xs={6}>
					<CustomButton
						title='Notify'
						onClick={submitNotify}
						fullWidth={true}
						className={classes.notifyButton}
					/>
				</Grid>
				<Grid item md={6} xs={6}>
					<CustomButton
						title='Log out'
						onClick={() => {
							dispatch(getLoggedOut());
							push('/');
						}}
						fullWidth={true}
						className={classes.logoutButton}
					/>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default DeviceFooter;
