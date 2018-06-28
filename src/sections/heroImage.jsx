import React from 'react';
import Logo from '../components/logo';
import { mainBgGradient } from '../utils/variables';

export default ({ title, subtitle, image }) => {
	return (
		<div
			id="home"
			style={{...styles.heroImageStyle, backgroundImage: `${mainBgGradient}, url('${image}')` }}
		>
			<h1 style={styles.titleStyle}>
				<span className="title-on-color" style={styles.mainTitleStyle}>Caitlin Baird</span>
				<span className="subtitle-on-color" style={styles.subheaderStyle}>
					<em>
						Helping you re-connect with yourself, engage with others and craft a life worth
						living
					</em>
				</span>
			</h1>
		</div>
	);
};

const styles = {
	heroImageStyle: {
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		height: '100vh',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundAttachment: 'fixed'
	},
	titleStyle: {
		display: 'flex',
		flexDirection: 'column',
		textAlign: 'center',
      padding: '0 1rem',
	},
	mainTitleStyle: {
		fontSize: '4rem',
		textTransform: 'uppercase',
		textShadow: '0px 5px 10px rgba(0, 0, 0, .7)'
	},
	subheaderStyle: {
		padding: '0 1rem',
		fontSize: '1.45rem',
    textAlign: 'center'
	}
};
