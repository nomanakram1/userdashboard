'use client';
import { SearchContents } from '@/components/common';
import { Box, Drawer, Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Image from 'next/image';
import { useState } from 'react';
import MicroPhoneSvg from '../../../../public/assets/svgs/microphone';
import SearchIconSvg from '../../../../public/assets/svgs/search';
import SideBarIcon from './menuIcons';

export default function AppBar({ data }) {
	const [headerSearch, setHeaderSearch] = useState(false);
	const handleSearchClick = () => setHeaderSearch(!headerSearch);
	const [state, setState] = useState({
		left: false,
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
				right: '0',
				zIndex: '50',
				background: 'White',
				top: '0',
				height: '100vh',
				margin: '0',
				padding: '0',
				// overflowY: 'scroll',
			}}
			role="presentation"
		>
			<Grid container>
				{
					<div
						className={`w-[280px] bg-[#F9F9F9] h-[100vh]`}
						style={{ transition: 'height 0.3s' }}
					>
						<div
							className="OverViewList"
							style={{ display: 'flex', justifyContent: 'space-between' }}
						>
							<SideBarIcon src="/assets/icons/category.jpg" />
							<div style={{ display: 'flex' }}>
								<SearchIconSvg />
								<MicroPhoneSvg />
							</div>
						</div>
						{/* ----------overview---------- */}
						<div>
							<p className="overview">Overview</p>
						</div>
						<div className="OverViewList">
							<SideBarIcon src="/assets/icons/activity.png" />
							<p className="listHeading">Recent Videos</p>
						</div>
						<div className="OverViewList">
							<SideBarIcon src="/assets/icons/menu.png" />
							<p className="listHeading">Projects</p>
						</div>
						<div className="OverViewList">
							<SideBarIcon src="/assets/icons/send.png" />
							<p className="listHeading">Collaborators</p>
							<div style={{ marginLeft: '30px' }}>
								<SideBarIcon src="/assets/icons/Group.jpg" />
							</div>
						</div>
						<p className="verticalLine"></p>
						{/* ----------overview---------- */}
						<div>
							<div>
								<p className="overview">General</p>
							</div>
							<div className="OverViewList">
								<SideBarIcon src="/assets/icons/wallet-2.png" />
								<p className="listHeading">Payment</p>
							</div>
							<div className="OverViewList">
								<SideBarIcon src="/assets/icons/profile.png" />
								<p className="listHeading">Message</p>
							</div>
							<div className="OverViewList">
								<SideBarIcon src="/assets/icons/document.png" />
								<p className="listHeading">News</p>
							</div>
						</div>
						<p className="verticalLine"></p>

						<div className="OverViewList">
							<SideBarIcon src="/assets/icons/notification-bing.png" />
							<p className="listHeading">Notification</p>
						</div>
						<div className="OverViewList">
							<SideBarIcon src="/assets/icons/color.png" />
							<p className="listHeading">Theme</p>
						</div>
					</div>
				}
			</Grid>
		</Box>
	);
	return (
		<>
			<div className="flex my-3 px-3 justify-between">
				<div style={{ display: 'flex' }}>
					<Grid
						onClick={() => {
							setState((prev) => ({ ...prev, ['left']: true }));
						}}
						item
						xs={1}
						sx={{
							cursor: 'pointer',
							paddingLeft: '20px',
							display: { xs: 'block', sm: 'none' },
						}}
					>
						<svg
							width="44"
							height="44"
							viewBox="0 0 54 54"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								x="0.5"
								y="0.5"
								width="53"
								height="53"
								rx="16.5"
								fill="#F2F2F2"
								fill-opacity="0.2"
								stroke="#F3F3F3"
							/>
							<path
								d="M18 23.5H36M18 30.5H36"
								stroke="black"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</Grid>
					<Grid
						item
						xs={5}
						md={4}
						lg={3}
						sx={{ order: { xs: 1, md: 1, lg: 1 } }}
					>
						<Box sx={{ display: { xs: 'block' } }}>
							<div className="flex items-center space-x-1 pl-8">
								<Image
									src="/assets/icons/user.png"
									width={41}
									height={41}
									className="rounded-full"
									alt="Hi image"
								/>
								<div>
									<span className="text-black font-semibold">Hi,</span>{' '}
									<span className="text-gray-500">
										{data?.user?.firstName || ''}
									</span>
								</div>
							</div>
						</Box>
					</Grid>
				</div>
				<Grid
					item
					xs={12}
					md={4}
					lg={3}
					sx={{
						display: { xs: 'none', sm: 'block' },
						order: { xs: 4, md: 2, lg: 2 },
						flexDirection: { xs: 'column', md: 'row' },
					}}
				>
					<Box sx={{ display: { xs: 'block' } }}>
						<div>
							{' '}
							<div
								className=" flex  rounded-full px-3 py-2 bg-[#F9F9F9]"
								onClick={handleSearchClick}
							>
								<input
									type="text"
									placeholder="Need any Assistance?"
									className="bg-[#F9F9F9] focus:outline-none"
								/>
								<Image
									src="/assets/icons/microphone.png"
									width={23}
									height={28}
									className="rounded-full"
									alt=""
								/>
							</div>
							<div>{headerSearch && <SearchContents />}</div>
						</div>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					md={4}
					lg={3}
					sx={{ order: { xs: 3, md: 3, lg: 3 } }}
				>
					<Box sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }}>
						<div className="flex items-center space-x-2 mx-8">
							<div className="text-[#474747]">Collaboraters (5):</div>

							<AvatarGroup max={5}>
								{data.users.map((i, key) => (
									<Avatar
										key={key}
										alt="Remy Sharp"
										src={i.picUrl}
									/>
								))}
							</AvatarGroup>
						</div>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					md={4}
					lg={3}
					sx={{ order: { xs: 4, md: 4, lg: 4 } }}
				>
					<div className="flex items-center">
						<Box sx={{ display: { xs: 'none', md: 'block' } }}>
							<div className="pr-3">
								<div
									// className="flex text-14 mb-1 font-semibold leading-none"

									style={{
										display: 'flex',
										fontSize: '16px',
										fontWeight: '500',
										// lineHeight: '24',
										marginBottom: '0.25rem',
										lineHeight: '1',
										justifyContent: 'end',
									}}
								>
									{data?.user?.firstName || ''} {data?.user?.lastName || ''}
								</div>
								<div
									// className="flex text-12 leading-none"
									style={{
										display: 'flex',
										fontSize: '14px',
										color: '#8D8D8D',
										fontWeight: '300',
									}}
								>
									{data?.user?.email || ''}
								</div>
							</div>
						</Box>
						<div
							style={{
								borderRadius: '16px',
								width: '52px',
								height: '52px',
								overflow: 'hidden',
							}}
						>
							<Image
								src={data?.user?.picUrl}
								alt="Profile Icon"
								width={100}
								height={100}
							/>
						</div>
					</div>
				</Grid>
			</div>
			<Grid
				container
				spacing={2}
				item
				xs={11}
				sx={{ display: { xs: 'block', sm: 'none' }, margin: '15px' }}
			>
				<div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							background: '#F9F9F9',
							padding: '0.5rem 0.75rem 0.5rem 0.75rem ',
							borderRadius: '50px',
						}}
						onClick={handleSearchClick}
					>
						<input
							type="text"
							placeholder="Need any Assistance?"
							className="bg-[#F9F9F9] focus:outline-none"
						/>
						<Image
							src="/assets/icons/microphone.png"
							width={23}
							height={28}
							className="rounded-full"
							alt=""
						/>
					</div>
					<div>{headerSearch && <SearchContents />}</div>
				</div>
			</Grid>
			<Drawer
				anchor="left"
				open={state['left']}
				onClose={toggleDrawer('left', false)}
			>
				{list('left')}
			</Drawer>
		</>
	);
}
