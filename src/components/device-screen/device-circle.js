import React from 'react';
import classes from './device-circle.module.css';

function DeviceCircle({ devices = [] }) {
	let radius = 200,
		angle = 0,
		container = 400,
		circle = 80,
		step = devices.length > 0 ? (2 * Math.PI) / devices.length : 0;

	return (
		<div className={classes.container} data-test='deviceCircleComponent'>
			{devices.map((item, index) => {
				var x = Math.round(
					container / 2 + radius * Math.cos(angle) - circle / 2
				);
				var y = Math.round(
					container / 2 + radius * Math.sin(angle) - circle / 2
				);
				angle += step;

				return (
					<div
						data-test='circleNumber'
						key={index}
						className={classes.item}
						style={{
							left: x,
							top: y,
						}}>
						{item.name}
					</div>
				);
			})}
		</div>
	);
}

export default React.memo(DeviceCircle, (prevProps, nextProps) => {
	return prevProps.devices.length === nextProps.devices.length;
});
