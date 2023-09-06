import { Avatar, Box, Divider, Grid } from '@mui/material';
import { Cross } from '../../../../public/assets/icons/cross';
import { Search } from '../../../../public/assets/icons/search';
import { User } from '../../../../public/assets/icons/user';
import { Video } from '../../../../public/assets/icons/video';

export const SearchContents = () => {
	return (
		<Box
			container
			sx={{
				backgroundColor: 'white',
				borderRadius: '10px',
				position: 'absolute',
				zIndex: '50',
			}}
		>
			<Grid
				container
				backgroundColor="white"
				color="#000000"
				sx={{
					maxWidth: '340px',
					display: 'flex',
					justifyContent: 'center',
					padding: '20px',
					borderRadius: '16px',
					alignItems: 'start',
					gap: '10px',
				}}
			>
				<Grid
					container
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						padding: '10px',
					}}
				>
					<Box sx={{ display: 'flex' }}>
						<Search />
						<span
							style={{
								fontSize: '14px',
								lineHeight: '21px',
								marginLeft: '10px',
							}}
						>
							Search for people, task, doc
						</span>
					</Box>
					<Box
						sx={{
							background: '#F9F9F9',
							borderRadius: '6px',
							padding: '5px',
						}}
					>
						Ctrl &#43; F
					</Box>
					<p
						style={{
							width: '100%',
							height: '1px',
							backgroundColor: '#F0F0F0',
							marginTop: '10px',
						}}
					></p>
				</Grid>
				<Divider />
				<Grid
					container
					sx={{
						minHeight: 'content',
						color: '#888888',
						fontWeight: '14px',
						lineHeight: '18px',
					}}
				>
					{"I'm looking for"}
				</Grid>
				<Grid
					container
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: '10px',
					}}
				>
					<Box
						container
						sx={{
							backgroundColor: '#F9F9F9',
							display: 'flex',
							justifyContent: 'space-evenly',
							alignItems: 'center',
							padding: '10px',
							gap: '5px',
							borderRadius: '31px',
						}}
					>
						<User />
						Collaborators
						<Cross />
					</Box>
					<Box
						container
						sx={{
							backgroundColor: '#F9F9F9',
							display: 'flex',
							justifyContent: 'space-evenly',
							alignItems: 'center',
							padding: '10px',
							gap: '5px',
							borderRadius: '31px',
						}}
					>
						<Video />
						Videos
						<Cross />
					</Box>
				</Grid>
				<Grid
					container
					sx={{ color: '#979797', gap: '3px' }}
				>
					Last search <span sx={{ color: '#D8D8D8' }}>3</span>
				</Grid>
				<Grid
					container
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						gap: '3px',
					}}
				>
					<Box
						container
						sx={{
							display: 'flex',
							gap: '5px',
							alignItems: 'center',
							marginBottom: '5px',
						}}
					>
						<Avatar
							alt="Remy Sharp"
							src="/static/images/avatar/1.jpg"
							style={{ width: '30px', height: '30px' }}
						/>
						<span style={{ fontWeight: '500', fontSize: '15px' }}>Name</span>
						<span style={{ fontSize: '14px', color: '#696969', gap: '3px' }}>
							random@gmail.com
						</span>
					</Box>
					<Box
						container
						sx={{
							display: 'flex',
							gap: '5px',
							alignItems: 'center',
							marginBottom: '5px',
						}}
					>
						<Avatar
							alt="Remy Sharp"
							src="/static/images/avatar/1.jpg"
							style={{ width: '30px', height: '30px', marginBottom: '5px' }}
						/>
						<span style={{ fontWeight: '500', fontSize: '15px' }}>Name</span>
						<span style={{ fontSize: '14px', color: '#696969' }}>
							random@gmail.com
						</span>
					</Box>
					<Box
						container
						sx={{
							display: 'flex',
							gap: '5px',
							alignItems: 'center',
							marginBottom: '5px',
						}}
					>
						<Avatar
							alt="Remy Sharp"
							src="/static/images/avatar/1.jpg"
							style={{ width: '30px', height: '30px' }}
						/>
						<span style={{ fontWeight: '500', fontSize: '15px' }}>Name</span>
						<span style={{ fontSize: '14px', color: '#696969', gap: '3px' }}>
							random@gmail.com
						</span>
					</Box>
				</Grid>
				<Grid
					container
					sx={{ color: '#979797', gap: '3px', paddingBottom: '7px' }}
				>
					Quick Actions
				</Grid>

				<Grid
					container
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: '10px',
					}}
				>
					<Box
						container
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							gap: '3px',
							width: '100%',
						}}
					>
						<Box
							container
							sx={{
								display: 'flex',
								gap: '5px',
							}}
						>
							<svg
								width="19"
								height="19"
								viewBox="0 0 19 19"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									opacity="0.4"
									d="M12.817 1.58334H6.18284C3.30117 1.58334 1.58325 3.30126 1.58325 6.18293V12.8092C1.58325 15.6988 3.30117 17.4167 6.18284 17.4167H12.8091C15.6908 17.4167 17.4087 15.6988 17.4087 12.8171V6.18293C17.4166 3.30126 15.6987 1.58334 12.817 1.58334Z"
									fill="#222222"
								/>
								<path
									d="M12.6666 8.90626H10.0937V6.33334C10.0937 6.00876 9.8245 5.73959 9.49992 5.73959C9.17534 5.73959 8.90617 6.00876 8.90617 6.33334V8.90626H6.33325C6.00867 8.90626 5.7395 9.17543 5.7395 9.50001C5.7395 9.82459 6.00867 10.0938 6.33325 10.0938H8.90617V12.6667C8.90617 12.9913 9.17534 13.2604 9.49992 13.2604C9.8245 13.2604 10.0937 12.9913 10.0937 12.6667V10.0938H12.6666C12.9912 10.0938 13.2603 9.82459 13.2603 9.50001C13.2603 9.17543 12.9912 8.90626 12.6666 8.90626Z"
									fill="#222222"
								/>
							</svg>
							<span>Create new video</span>
						</Box>
						<Box
							container
							sx={{
								display: 'flex',
								borderRadius: '0.375rem',
								backgroundColor: 'rgba(249, 249, 249, 0.87)',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<span
								style={{
									padding: '2px 5px',
									background: '#FAFAFA',
									borderRadius: '7px',
								}}
							>
								N
							</span>
						</Box>
					</Box>
					<Box
						container
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							gap: '3px',
							width: '100%',
						}}
					>
						<Box
							container
							sx={{
								display: 'flex',
								gap: '5px',
							}}
						>
							<svg
								width="19"
								height="19"
								viewBox="0 0 19 19"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									opacity="0.4"
									d="M12.817 1.58334H6.18284C3.30117 1.58334 1.58325 3.30126 1.58325 6.18293V12.8092C1.58325 15.6988 3.30117 17.4167 6.18284 17.4167H12.8091C15.6908 17.4167 17.4087 15.6988 17.4087 12.8171V6.18293C17.4166 3.30126 15.6987 1.58334 12.817 1.58334Z"
									fill="#222222"
								/>
								<path
									d="M12.6666 8.90626H10.0937V6.33334C10.0937 6.00876 9.8245 5.73959 9.49992 5.73959C9.17534 5.73959 8.90617 6.00876 8.90617 6.33334V8.90626H6.33325C6.00867 8.90626 5.7395 9.17543 5.7395 9.50001C5.7395 9.82459 6.00867 10.0938 6.33325 10.0938H8.90617V12.6667C8.90617 12.9913 9.17534 13.2604 9.49992 13.2604C9.8245 13.2604 10.0937 12.9913 10.0937 12.6667V10.0938H12.6666C12.9912 10.0938 13.2603 9.82459 13.2603 9.50001C13.2603 9.17543 12.9912 8.90626 12.6666 8.90626Z"
									fill="#222222"
								/>
							</svg>
							<span>Add Collaborator</span>
						</Box>
						<Box
							container
							sx={{
								display: 'flex',
								borderRadius: '0.375rem',
								backgroundColor: 'rgba(249, 249, 249, 0.87)',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<span
								style={{
									padding: '2px 5px',
									background: '#FAFAFA',
									borderRadius: '7px',
								}}
							>
								A
							</span>
						</Box>
					</Box>
					<Box
						container
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							gap: '3px',
							width: '100%',
						}}
					>
						<Box
							container
							sx={{
								display: 'flex',
								gap: '5px',
							}}
						>
							<svg
								width="19"
								height="19"
								viewBox="0 0 19 19"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									opacity="0.4"
									d="M6.18284 1.58334H12.8091C15.6987 1.58334 17.4166 3.30126 17.4166 6.18293V12.8092C17.4166 15.6908 15.6987 17.4088 12.817 17.4088H6.18284C3.30117 17.4167 1.58325 15.6988 1.58325 12.8171V6.18293C1.58325 3.30126 3.30117 1.58334 6.18284 1.58334Z"
									fill="#222222"
								/>
								<path
									d="M14.0047 10.6717C13.9413 10.5292 13.8305 10.4104 13.6801 10.3471C13.6088 10.3154 13.5297 10.2996 13.4505 10.2996H5.54175C5.21716 10.2996 4.948 10.5688 4.948 10.8933C4.948 11.2179 5.21716 11.4871 5.54175 11.4871H12.0255L10.7034 12.8092C10.4738 13.0388 10.4738 13.4188 10.7034 13.6483C10.8222 13.7671 10.9726 13.8225 11.123 13.8225C11.2734 13.8225 11.4238 13.7671 11.5426 13.6483L13.878 11.3129C13.9334 11.2575 13.973 11.1942 14.0047 11.1229C14.068 10.9725 14.068 10.8142 14.0047 10.6717Z"
									fill="#222222"
								/>
								<path
									d="M4.9955 8.32833C5.05883 8.47083 5.16966 8.58958 5.32008 8.65291C5.39133 8.68458 5.46258 8.70041 5.54175 8.70041H13.4584C13.783 8.70041 14.0522 8.43124 14.0522 8.10666C14.0522 7.78208 13.783 7.51291 13.4584 7.51291H6.97466L8.29675 6.19083C8.52633 5.96124 8.52633 5.58124 8.29675 5.35166C8.06716 5.12208 7.68716 5.12208 7.45758 5.35166L5.12216 7.68708C5.06675 7.74249 5.02716 7.80583 4.9955 7.87708C4.93216 8.02749 4.93216 8.18583 4.9955 8.32833Z"
									fill="#222222"
								/>
							</svg>

							<span
								style={{
									fontSize: '16px',
									lineHeight: '21px',
									fontWeight: 400,
								}}
							>
								Move File
							</span>
						</Box>
						<Box
							container
							sx={{
								display: 'flex',
								borderRadius: '0.375rem',
								backgroundColor: 'rgba(249, 249, 249, 0.87)',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<span
								style={{
									padding: '2px 5px',
									background: '#FAFAFA',
									borderRadius: '7px',
								}}
							>
								M
							</span>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};
