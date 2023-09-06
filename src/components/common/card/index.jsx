import GetResponsiveStyles from '@/app/styles';
import { More } from '@/components';
import {
	Box,
	Card,
	CardContent,
	Drawer,
	Stack,
	Typography,
} from '@mui/material';
import React from 'react';
import { VideoDetailDrawer } from '..';
export const VideoCard = ({ videoData }) => {
	const responsiveStyles = GetResponsiveStyles();
	const [state, setState] = React.useState({
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}
		setState((prev) => ({ ...prev, [anchor]: open }));
	};
	const list = (anchor) => (
		<Box
			sx={{
				width: `width: ${anchor} === 'top' || ${anchor} === 'bottom' ? 'auto' : 400`,
				position: 'fixed',
				right: '0',
				zIndex: '50',
				background: 'White',
				top: '0',
				height: '100vh',
				overflowY: 'scroll',
			}}
			role="presentation"
		>
			<VideoDetailDrawer
				data={videoData}
				onClick={() => setState((prev) => ({ ...prev, [anchor]: false }))}
			/>
		</Box>
	);
	return (
		<>
			<Card
				onClick={toggleDrawer('right', true)}
				sx={{
					...responsiveStyles.cardLayout,
					'&:hover': {
						backgroundColor: '#725DFF',
						transition: 'color 0.3s',
						'& .MuiTypography-root': {
							color: 'white',
						},
						'& svg path': {
							fill: 'white',
						},
					},
				}}
			>
				<Box
					sx={{
						width: '98%',
						height: '214.462px',
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
						alt="img"
						src={videoData?.picUrl}
					/>
				</Box>

				<CardContent
					sx={{
						width: '100%',
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Stack>
						<Typography
							gutterBottom
							component="div"
							sx={{
								color: '#222',
								fontSize: '16px',
								fontStyle: 'normal',
								fontWeight: '500',
								lineHeight: 'normal',
							}}
						>
							{videoData?.title}
						</Typography>
						<Typography
							gutterBottom
							component="div"
							sx={{
								color: '#747474',
								fontSize: '12.485px',
								fontStyle: 'normal',
								fontWeight: '400',
								lineHeight: 'normal',
							}}
						>
							Created at: {new Date(videoData?.createdAt).toDateString()}
						</Typography>
					</Stack>

					{More}
				</CardContent>
			</Card>
			<Drawer
				anchor="right"
				open={state['right']}
				onClose={toggleDrawer('right', false)}
			>
				{list('right')}
			</Drawer>
		</>
	);
};
