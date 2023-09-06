import { Mail } from '@/components';
import {
	FormControl,
	Input,
	InputAdornment,
	InputLabel,
	Modal as MuiModal,
} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 550,
	bgcolor: 'background.paper',
	boxShadow: 4,
	borderRadius: 4,
	p: 4,
};

export const AddNewCollaborator = ({
	open = false,
	handleClose = () => setShow(false),
}) => {
	return (
		<div>
			<MuiModal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography
						sx={{
							fontWeight: '600',
							fontSize: '22px',
							mt: 2,
						}}
						id="modal-modal-title"
						variant="h4"
						component="h2"
					>
						Invite Collaborators
					</Typography>
					<Typography
						sx={{
							fontWeight: 400,
							fontSize: '14px',
							mb: 2,
						}}
						id="modal-modal-title"
						variant="h6"
						component="h5"
					>
						Lorem ipsum dolor sit amet consectetur.
					</Typography>
					<InputLabel
						htmlFor="standard-adornment-amount"
						sx={{
							fontWeight: 500,
							fontSize: '14px',
							padding: '0',
							color: '#000',
							marginBottom: '-10px',
							'&.Mui-focused': {
								color: '#000',
							},
						}}
					>
						Name or Email
					</InputLabel>
					<FormControl
						fullWidth
						sx={{ mt: 2 }}
					>
						<Input
							disableUnderline
							placeholder="e.g John , john@gmail.com"
							sx={{
								borderRadius: 2,
								backgroundColor: '#f4f4f4',
								padding: '10px 15px',
								color: 'black',
							}}
							id="standard-adornment-amount"
							startAdornment={
								<InputAdornment position="start">{Mail}</InputAdornment>
							}
						/>
					</FormControl>

					<Typography
						sx={{
							fontWeight: 500,
							my: 4,
						}}
						id="modal-modal-description"
					>
						This site is protected by reCAPTCHA and the Google{' '}
						<Link
							href="#"
							sx={{ margin: '0px 2px' }}
						>
							{' '}
							Privacy Policy
						</Link>
						and{' '}
						<Link
							href="#"
							sx={{ margin: '0px 2px' }}
						>
							Terms of Service
						</Link>{' '}
						apply.
					</Typography>

					<Box
						sx={{
							display: 'flex',
							justifyContent: 'flex-end',
						}}
					>
						<Button
							variant="text"
							sx={{
								backgroundColor: '#5136FF',
								borderRadius: '8px',
								padding: '8px 16px',
							}}
						>
							Add
						</Button>
					</Box>
				</Box>
			</MuiModal>
		</div>
	);
};
