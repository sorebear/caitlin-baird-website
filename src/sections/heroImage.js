import React from 'react';

export default ({ title, subtitle, image }) => {
	return (
		<div
			id="home"
			style={{...styles.heroImageStyle, backgroundImage: `linear-gradient(rgba(25, 25, 25, .8), rgba(25, 25, 25, 0.6)) ,url('${image}')` }}
		>
			<h1 style={styles.titleStyle}>
				<span style={styles.mainTitleStyle}>Caitlin Baird</span>
				<span>Speaker, Trainer, Consultant</span>
			</h1>
			<p style={styles.subheaderStyle}>
				<em>
					Helping you re-connect with yourself, engage with others and craft a life worth
					living
				</em>
			</p>
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
      color: 'white',
      padding: '0 1rem',
	},
	mainTitleStyle: {
		fontSize: '4rem',
		textTransform: 'uppercase',
		textShadow: '0px 5px 10px rgba(0, 0, 0, .7)',
		color: 'rgb(179, 61, 128)'
	},
	subheaderStyle: {
		padding: '0 1rem',
      color: 'white',
      textAlign: 'center'
	}
};
