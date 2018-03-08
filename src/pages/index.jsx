import React, { Component } from 'react';
import Link from 'gatsby-link';

import logoC from '../images/logo-c.svg';
import logoB from '../images/logo-b.svg';
import heroImg from '../images/hero-image.jpg';

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
		padding: '0 1rem'
	},
	mainTitleStyle: {
		fontSize: '4rem',
		textTransform: 'uppercase',
		textShadow: '0px 5px 10px rgba(0, 0, 0, .7)',
		color: 'rgb(248,88,73)'
	},
	subheaderStyle: {
		padding: '0 1rem',
		color: 'white',
		fontSize: '2rem',
		textAlign: 'center'
	},
	logoWrapperStyle: {
		color: 'white',
		display: 'flex',
		position: 'fixed',
		top: '2rem',
		left: '2rem'
	},
	imageStyle: {
		margin: 0,
		height: '80px'
	},
	textStyle: {
		fontSize: '17px',
		margin: 0,
		textDecoration: 'none',
		backgroundImage: 'none'
	},
	letterWrapperStyle: {
		display: 'flex',
		flexDirection: 'column',
		zIndex: 10
	},
	verticalLineStyle: {
		borderRight: '1px solid white',
		height: '96px',
		marginLeft: '10px'
	},
	jobTitlesContainerStyle: {
		marginLeft: '10px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	jobTitleStyle: {
		margin: 0,
		fontWeight: '100'
	}
};

const IndexPage = () => (
	<div className="site-wrapper">
		<div
			id="home"
			style={{
				...styles.heroImageStyle,
				backgroundImage: `linear-gradient(rgba(25, 25, 25, .8), rgba(25, 25, 25, 0.6)) ,url('${heroImg}')`
			}}
		>
			<div className="logo">
				<div className="logo__wrapper" style={styles.logoWrapperStyle}>
					<div style={styles.letterWrapperStyle}>
						<img
							className="logo__image logo__image--b"
							src={logoC}
							style={styles.imageStyle}
						/>
						<h5
							className="logo__text"
							style={{ ...styles.textStyle, color: 'rgb(77, 77, 77)' }}
						>
							Caitlin
						</h5>
					</div>
					<div style={styles.letterWrapperStyle}>
						<img
							className="logo__image logo__image--c"
							src={logoB}
							style={styles.imageStyle}
						/>
						<h5 className="logo__text" style={styles.textStyle}>
							Baird
						</h5>
					</div>
					<div style={styles.verticalLineStyle} className="logo__vertical-line" />
					<div style={styles.jobTitlesContainerStyle}>
						<h3
							style={styles.jobTitleStyle}
							className="logo__job-title logo__job-title--1"
						>
							Speaker
						</h3>
						<h3
							style={styles.jobTitleStyle}
							className="logo__job-title logo__job-title--2"
						>
							Trainer
						</h3>
						<h3
							style={styles.jobTitleStyle}
							className="logo__job-title logo__job-title--3"
						>
							Consultant
						</h3>
					</div>
				</div>
			</div>
			<h1 style={styles.titleStyle}>
				<span style={styles.mainTitleStyle}>Caitlin Baird</span>
			</h1>
			<p style={styles.subheaderStyle}>
				<em>We're currently under construction. I'll be back soon!</em>
			</p>
			
		</div>
	</div>
);

export default IndexPage;
