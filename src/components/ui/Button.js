import { Button } from '@material-ui/core';

function CustomButton({ title, onClick, fullWidth, className }) {
	return (
		<Button
			data-test='sharedButton'
			variant='contained'
			size='small'
			className={className}
			onClick={onClick}
			fullWidth={fullWidth}>
			{title}
		</Button>
	);
}

export default CustomButton;
