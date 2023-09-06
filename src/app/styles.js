import useMediaQuery from '@mui/material/useMediaQuery';

const GetResponsiveStyles = () => {
	const isMobile = useMediaQuery('(max-width:700px)');
	const isTablet = useMediaQuery('(max-width:1100px)');

	const styles = {
		hideSearchElement: {
			display: isMobile ? 'none' : 'block',
			maxHeight: isMobile ? '0px' : 'max-content',
			maxWidth: isMobile ? '0px' : 'max-content',
		},
		applyColReverse: {
			flexGrow: 1,
			width: '100%',
			height: 'max-content',
			display: 'flex',
			flexDirection: isTablet ? 'column-reverse' : 'row',
			justifyContent: isTablet ? 'start' : 'space-between',
			alignItems: isTablet ? 'start' : 'center',
			gap: isTablet ? '20px' : '10px',
			overFlowX: isMobile ? 'scroll' : 'hidden',
		},
		mainWrapper: {
			padding: isMobile ? '20px 12px' : '20px 30px',
			height: 'max-content',
			flexGrow: 1,
			borderRadius: '32px',
			background: '#F9F9F9',
		},

		cardLayout: {
			width: '100%',
			height: '286.198px',
			flexShrink: '0',
			borderRadius: '17.934px',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			background: '#fff',
			padding: '3px 0px',
			transition: 'color 0.3s',
			boxShadow: 'none',
		},
		cardWrapper: {
			display: 'flex',
			height: 'max-content',
			width: '100%',
			justifyContent: isMobile ? 'center' : 'start',
			gap: isMobile ? '10px' : '',
		},
		appBarUser: {
			display: isMobile ? 'none' : '',
		},
		boxBody: (open) => {
			return {
				marginLeft: isMobile ? '0px' : open ? '5px' : '80px',
			};
		},
		stack: {
			width: isMobile ? '100%' : 'min-content',
		},
	};
	return styles;
};

export default GetResponsiveStyles;
