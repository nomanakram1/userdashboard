'use client';
import { Add, ArrowDown, SearchIcon } from '@/components';
import {
	AddNewCollaborator,
	OutlinedButton,
	VideoCard,
} from '@/components/common';
import {
	Avatar,
	AvatarGroup,
	Box,
	Button,
	Grid,
	IconButton,
	InputBase,
	Paper,
	Stack,
	Typography,
} from '@mui/material';
import React from 'react';
import GetResponsiveStyles from '../styles';
import AppBar from './components/appBar';
import Sidebar from './components/sideBar';

export default function DashboardView({ data }) {
	const responsiveStyles = GetResponsiveStyles();
	const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
	const [newCollab, setNewCollab] = React.useState(false);
	return (
		<>
			<div style={{ display: 'flex' }}>
				<Sidebar
					isOpen={isSidebarOpen}
					setIsOpen={setIsSidebarOpen}
				/>
				<Box
					sx={{
						...responsiveStyles.boxBody(isSidebarOpen),
					}}
					className="bg-white w-full h-full"
				>
					<AppBar data={data} />
					<div className={`bg-[#F9F9F9] h-screen w-fill flex m-3 rounded-2xl`}>
						<Box
							container
							sx={{
								...responsiveStyles.mainWrapper,
								width: '100%',
							}}
						>
							<Grid
								container
								sx={{
									flexGrow: 1,
									display: 'flex',
									alignItems: 'start',
									flexDirection: 'row',
									gap: '20px',
									paddingBottom: '20px',
									borderBottom: '2px solid #F0F0F0',
								}}
							>
								<Grid
									item
									xl={12}
									sm={12}
									md={12}
									lg={12}
									sx={{
										width: '100%',
										height: 'max-content',
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center',
									}}
								>
									<Stack
										sx={{
											width: 'max-content',
											height: 'max-content',
										}}
									>
										<Stack
											spacing={1}
											flexDirection="row"
											gap={2}
											sx={{ width: 'max-content' }}
										>
											<Typography sx={{ fontSize: '24px', fontWeight: 'bold' }}>
												Recently Videos
											</Typography>
											{ArrowDown}
										</Stack>
										<Stack
											sx={{
												width: 'max-content',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												flexDirection: 'row',
												gap: '14px',
											}}
											spacing={1}
										>
											<Typography
												sx={{
													fontSize: '14px',
													fontWeight: 'normal',
													color: '#838383',
												}}
											>
												Recently created videos
											</Typography>
											<Box
												margin="0px"
												sx={{
													margin: '0px',
													display: 'flex',
													width: 'max-content',
													alignItems: 'center',
													padding: '6px 8px',
													background: '#25AE3B',
													color: 'white',
													fontSize: '12px',
													borderRadius: '16px',
												}}
											>
												2 Sept, 2023
											</Box>
										</Stack>
									</Stack>
									<Stack sx={responsiveStyles.hideSearchElement}>
										<Paper
											component="form"
											sx={{
												p: '2px 4px',
												display: 'flex',
												alignItems: 'center',
												width: '359px',
												height: '51px',
												background: '#fff',
												borderRadius: '36px',
												boxShadow: 'none',
											}}
										>
											<IconButton
												sx={{ p: '10px' }}
												aria-label="menu"
											>
												{SearchIcon}
											</IconButton>
											<InputBase
												sx={{ ml: 1, flex: 1 }}
												placeholder="Search Google Maps"
												inputProps={{ 'aria-label': 'search google maps' }}
											/>
										</Paper>
									</Stack>
								</Grid>
								<Grid
									item
									xl={12}
									lg={12}
									sx={responsiveStyles.applyColReverse}
								>
									<Stack
										sx={{
											...responsiveStyles.stack,
											overflow: 'auto',
											height: 'max-content',
										}}
									>
										<Stack
											spacing={0}
											flexDirection="row"
											gap={1}
											sx={{ width: 'max-content' }}
										>
											<OutlinedButton title="All" />
											<OutlinedButton title="AI Generated Video" />
											<OutlinedButton title=" Ads Videos" />
											<OutlinedButton title=" Marketing Videos" />
										</Stack>
									</Stack>

									<Stack
										spacing={0}
										flexDirection="row"
										gap={1}
										sx={{ width: 'max-content' }}
										alignItems="center"
									>
										<Typography
											sx={{
												fontSize: '12px',
												color: '#474747',
												fontWeight: '500',
											}}
										>
											Collaborators:
										</Typography>
										<AvatarGroup max={4}>
											{data?.users.map((i, key) => (
												<Avatar
													key={key}
													alt="Remy Sharp"
													src={i.picUrl}
													sx={{ height: '40px', width: '40px' }}
												/>
											))}
										</AvatarGroup>
										<Button
											startIcon={Add}
											onClick={() => setNewCollab(true)}
										>
											add new
										</Button>
									</Stack>
								</Grid>
							</Grid>

							<Grid
								container
								spacing={3}
								sx={{
									...responsiveStyles.cardWrapper,
									height: 'max-content',
									marginTop: '8px',
								}}
							>
								{data?.videos.map((i, key) => (
									<Grid
										key={key}
										item
										xlg={3}
										lg={2.4}
										md={4}
										sm={5}
										xs={10}
									>
										<Box sx={{ maxHeight: '250px', marginTop: '20px' }}>
											<VideoCard videoData={i} />
										</Box>
									</Grid>
								))}
							</Grid>
						</Box>
						<AddNewCollaborator
							open={newCollab}
							handleClose={() => setNewCollab(false)}
						/>
					</div>
				</Box>
			</div>
		</>
	);
}
