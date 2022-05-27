import { FormHelperText, TextField, InputAdornment } from '@material-ui/core';
import classes from './textfield.module.css';
function CustomTextField({
	value,
	label,
	type,
	errorText,
	adorMent,
	onKeyPress,
	title,
	required,
	onChange,
}) {
	let helperText = errorText ? (
		<strong className={classes.error}>{errorText}</strong>
	) : null;

	return (
		<>
			<TextField
				fullWidth
				title={title ? title : ''}
				required={required}
				margin='none'
				variant='outlined'
				type={type === 'password' ? 'password' : 'text'}
				size='small'
				label={label}
				error={errorText ? true : false}
				value={value}
				onChange={onChange}
				placeholder={label}
				InputProps={{
					startAdornment: adorMent && (
						<InputAdornment position='start'>{adorMent}</InputAdornment>
					),
				}}
				inputProps={{
					onKeyPress: onKeyPress,
				}}
			/>
			{helperText && <FormHelperText>{helperText}</FormHelperText>}
		</>
	);
}

export default CustomTextField;
