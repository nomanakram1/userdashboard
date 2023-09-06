import { Button } from '@mui/material';
export const OutlinedButton = ({ title }) => {
	return (
		<Button
			sx={{
				padding: '8px 15px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: '27px',
				color: '#616161',
				fontSize: '14px',
				fontWeight: '500',
				border: '1px solid #C5C5C5',

				'&:hover': {
					backgroundColor: '#222', // Change to your desired color
					color: 'white',
					border: 'none', // Change to your desired text color
				},
				'&:focus': {
					backgroundColor: '#222', // Change to your desired color
					color: 'white',
					border: 'none', // Remove the focus outline if you don't want it
				},
			}}
			variant="outlined"
		>
			{title}
		</Button>
	);
};
