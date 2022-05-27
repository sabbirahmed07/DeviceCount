import { useState, useEffect, useRef } from 'react';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import classes from './device.module.css';
import DeviceCircle from '../components/device-screen/device-circle';
import DeviceFooter from '../components/device-screen/device-footer';
import DeviceText from '../components/device-screen/device-text';

function Device() {
	const interval = useRef(null);
	const [devices, setDevices] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			try {
				const response = await axios.get('/devices');
				setDevices(response.data.devices);
			} catch (error) {
				console.log(error.response);
			}
		};
		loadData();

		interval.current = setInterval(loadData, 5000);
		return () => clearInterval(interval.current);
	}, []);

	return (
		<Grid
			container
			justifyContent='center'
			className={classes.body}
			data-test='deviceScreenComponent'>
			<DeviceCircle devices={devices} />
			<DeviceText devices={devices} />
			<DeviceFooter />
		</Grid>
	);
}

export default Device;
