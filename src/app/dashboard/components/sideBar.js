'use client';
import { Grid } from '@mui/material';
import Image from 'next/image';
import MicroPhoneSvg from '../../../../public/assets/svgs/microphone.jsx';
import SearchIconSvg from '../../../../public/assets/svgs/search.jsx';
import MenuIconComp from './menuIcon';
import SideBarIcon from './menuIcons';
import './style/sidebar.css';

export default function Sidebar({ isOpen, setIsOpen }) {
	const handleOpenClick = () => setIsOpen(!isOpen);

	return (
		<>
			{/* <Grid
				item
				xs={1}
				sx={{
					cursor: 'pointer',
					paddingLeft: '20px',
					marginTop: '0.75rem',
					marginBottom: '0.75rem',
					display: { xs: 'block', sm: 'none' },
				}}
			>
				<div onClick={handleOpenClick}>
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
				</div>
			</Grid> */}

			<div className="flex">
				<Grid
					sx={{
						display: { xs: 'none', sm: 'block' },
					}}
				>
					<div
						style={{ position: 'fixed', height: '100vh' }}
						className="parentDiv space-y-24 "
					>
						<div>
							<Image
								style={{ margin: 'auto' }}
								src="/assets/images/profile.png"
								alt="Profile Icon"
								width={40}
								height={40}
							/>
							<Image
								className="rightArrow"
								onClick={handleOpenClick}
								src="/assets/icons/rightErrow.jpg"
								alt="Profile Icon"
								width={16}
								height={20}
							/>

							<div className="dCard">
								<p className="d">D</p>
							</div>
							<Image
								style={{ margin: 'auto' }}
								src="/assets/icons/add.jpg"
								alt="Profile Icon"
								width={40}
								height={40}
							/>
						</div>

						<div>
							<MenuIconComp
								icon="/assets/icons/discover.png"
								width={24}
								height={24}
							/>
							<MenuIconComp icon="/assets/icons/folder.png" />
							<MenuIconComp icon="/assets/icons/group.png" />
							<MenuIconComp icon="/assets/icons/wallet.png" />
							<MenuIconComp icon="/assets/icons/notification.png" />
							<MenuIconComp icon="/assets/icons/setting.png" />
						</div>
						<div>
							<MenuIconComp icon="/assets/icons/logout.png" />
						</div>
					</div>
				</Grid>

				<Grid>
					{isOpen && (
						<div
							className={`w-[280px] bg-[#F9F9F9] `}
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
								<p className="listHeading">Collaboraters</p>
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
					)}
				</Grid>
			</div>
		</>
	);
}
