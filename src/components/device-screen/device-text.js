import React from 'react';
import classes from './device-text.module.css';
function DeviceText({ devices = [] }) {
	return (
		<div className={classes['stack-top']}>
			<div data-test='deviceTextComponent'>
				<strong className={classes.numberText}>
					{devices.length > 0 ? devices.length : 0}
				</strong>
				<br />
				<span className={classes.text}>
					DEVICES
					<br />
					ONLINE
				</span>
			</div>
		</div>
	);
}

export default React.memo(DeviceText, (prevProps, nextProps) => {
	return prevProps.devices.length === nextProps.devices.length;
});
