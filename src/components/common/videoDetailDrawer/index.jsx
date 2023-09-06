import {
	Add,
	BackArrow,
	Delete,
	Edit,
	MoveFile,
	VerticalDots,
} from '@/components/icons';
import {
	Avatar,
	AvatarGroup,
	Box,
	Button,
	FormControl,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
	Select,
	Stack,
	Typography,
} from '@mui/material';

import React from 'react';

export const VideoDetailDrawer = ({ data, onClick }) => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const [user, setUser] = React.useState('');

	const handleChange = (event) => {
		setUser(event.target.value);
	};
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '10px 20px',
				}}
			>
				<Typography sx={{ color: '#222', fontSize: '14px', fontWeight: '400' }}>
					Recent Video
				</Typography>
				<Box>
					<Button
						id="basic-button"
						aria-controls={open ? 'basic-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
						onClick={handleClick}
					>
						{VerticalDots}
					</Button>
					<Menu
						sx={{
							borderRadius: '8px',
							boxShadow: ' 0px 4px 6px 0px rgba(34, 34, 34, 0.07)',
							display: 'flex',
							padding: '16px',
							flexDirection: 'column',
							alignItems: 'flex-start',
							gap: '8px',
						}}
						id="basic-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							'aria-labelledby': 'basic-button',
						}}
					>
						<MenuItem onClick={handleClose}>
							<ListItemIcon>{MoveFile}</ListItemIcon>
							<ListItemText>Move File</ListItemText>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<ListItemIcon>{Edit}</ListItemIcon>
							<ListItemText>Edit</ListItemText>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<ListItemIcon>{Delete}</ListItemIcon>
							<ListItemText>Delete</ListItemText>
						</MenuItem>
					</Menu>
				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'start',
					alignItems: 'center',
					padding: '17px 20px',
					gap: '8px',
				}}
			>
				<Avatar
					onClick={() => onClick()}
					sx={{
						background: '#222',
						borderRadius: '50px',
						width: '51px',
						height: '51px',
					}}
				>
					{BackArrow}
				</Avatar>
				<Stack>
					<Typography
						sx={{
							color: '#222',
							fontSize: '24.261px',
							fontWeight: '500',
							lineHeight: 'normal',
						}}
					>
						{data?.title}
					</Typography>
					<Typography
						sx={{
							color: '#3E3E3E',
							fontSize: '16.174px',
							fontWeight: '400',
							lineHeight: 'normal',
						}}
					>
						Created at: {new Date(data?.createdAt).toDateString()}
					</Typography>
				</Stack>
			</Box>
			<Box sx={{ padding: '10px 20px', width: '100%' }}>
				<Box
					sx={{
						width: '100%',
						height: ' 250px',
						flexShrink: '0',
						overflow: 'hidden',
						borderRadius: '17.934px',
					}}
				>
					<Box
						component="img"
						sx={{
							height: '100%',
							width: '100%',
						}}
						alt="The house from the offer."
						src={data?.picUrl}
					/>
				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'start',
					gap: '7px',
					padding: '20px 20px',
					margin: '0px 5px',
					borderBottom: '1px solid #ECECEC',
				}}
			>
				<Stack
					spacing={0}
					flexDirection="row"
					gap={1}
					sx={{ width: 'max-content' }}
					alignItems="center"
				>
					<Typography
						sx={{ fontSize: '14px', color: '#222', fontWeight: '400' }}
					>
						Collaborators:
					</Typography>
					<AvatarGroup max={4}>
						{data.collaborators.map((item, key) => (
							<Avatar
								key={key}
								alt="Remy Sharp"
								src={item.picUrl}
								sx={{
									height: '28px',
									width: '28px',
									border: '2px solid purple',
								}}
							/>
						))}
					</AvatarGroup>
					<Button
						startIcon={Add}
						sx={{
							fontSize: '14px',
							fontWeight: '400',
							letterSpacing: '-0.28px',
						}}
					>
						add new
					</Button>
				</Stack>
				<Stack
					spacing={0}
					flexDirection="row"
					gap={1}
					sx={{
						width: 'max-content',
						alignItems: 'center',
					}}
				>
					<Typography
						sx={{ fontSize: '14px', color: '#222', fontWeight: '400' }}
					>
						TimeLine:
					</Typography>
					<Typography
						sx={{ fontSize: '16px', color: '#222', fontWeight: '400' }}
					>
						Feb 02 ,2023 - Feb 06 ,2023
					</Typography>
				</Stack>
				<Stack
					spacing={0}
					flexDirection="row"
					gap={1}
					sx={{ width: 'max-content' }}
					alignItems="center"
				>
					<Typography
						sx={{ fontSize: '14px', color: '#222', fontWeight: '400' }}
					>
						Status:
					</Typography>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							padding: '4px 12px',
							borderRadius: '58px',
							background: '#725DFF',
							color: '#fff',
							fontSize: '14px',
							border: 'none',
							letterSpacing: '-0.28px',
						}}
					>
						{data?.status}
					</Box>
				</Stack>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'start',
					gap: '0px',
					padding: '20px 20px',
				}}
			>
				<Stack
					spacing={0}
					flexDirection="column"
					gap={0}
					sx={{ width: 'max-content' }}
					alignItems="start"
				>
					<Typography
						sx={{
							fontSize: '18px',
							color: '#222',
							fontStyle: 'normal',
							fontWeight: '500',
						}}
					>
						Add Collaborators
					</Typography>

					<Typography
						sx={{ fontSize: '14px', color: '#222', fontWeight: '400' }}
					>
						Assign these tasks to some other user.
					</Typography>
				</Stack>

				<Stack
					spacing={0}
					flexDirection="column"
					gap={0}
					sx={{ width: 'max-content' }}
					alignItems="start"
				>
					<FormControl sx={{ mt: 2, minWidth: 330 }}>
						<label
							sx={{ fontSize: '14px', color: '#222', fontWeight: 'normal' }}
						>
							Select Users
						</label>
						<Select
							value={user}
							onChange={handleChange}
							sx={{}}
						>
							<MenuItem value=""></MenuItem>
							<MenuItem
								value={10}
								sx={{ display: 'flex', gap: '8px' }}
							>
								<ListItemIcon>
									<Avatar
										alt="img"
										src="avatar_1.png"
									/>
								</ListItemIcon>
								<ListItemText
									sx={{ fontSize: '12px', fontWeight: 'normal', color: '#222' }}
								>
									Guy Hawkins guy@icloud.com
								</ListItemText>
							</MenuItem>
							<MenuItem
								value={10}
								sx={{ display: 'flex', gap: '8px' }}
							>
								<ListItemIcon>
									<Avatar
										alt="img"
										src="avatar_1.png"
									/>
								</ListItemIcon>
								<ListItemText
									sx={{ fontSize: '12px', fontWeight: 'normal', color: '#222' }}
								>
									Guy Hawkins guy@icloud.com
								</ListItemText>
							</MenuItem>
							<MenuItem
								value={10}
								sx={{ display: 'flex', gap: '8px' }}
							>
								<ListItemIcon>
									<Avatar
										alt="img"
										src="avatar_1.png"
									/>
								</ListItemIcon>
								<ListItemText
									sx={{ fontSize: '12px', fontWeight: 'normal', color: '#222' }}
								>
									Guy Hawkins guy@icloud.com
								</ListItemText>
							</MenuItem>
						</Select>
					</FormControl>
				</Stack>
			</Box>
		</>
	);
};
