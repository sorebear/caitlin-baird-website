import React, { Component } from 'react';
import smoothscroll from 'smoothscroll';

import Link from 'gatsby-link';
import Logo from './logo';

class Header extends Component {
	constructor(props) {
		super(props);
		this.updateHeader = this.updateHeader.bind(this);
		this.state = {
			scrollState: 'unscrolled'
		};
	}

	componentDidMount() {
		document.addEventListener('scroll', this.updateHeader);
	}

	updateHeader() {
		this.setState({
			scrollState: window.pageYOffset !== 0 ? 'scrolled' : 'unscrolled'
		});
	}

	handleSmoothScroll(anchor) {
		const scrollDestination = document.getElementById(anchor);
		console.log(scrollDestination);
		smoothscroll(scrollDestination, 600);
	}

	render() {
		return (
			<div
				className={`header bg-primary-color header--${this.state.scrollState}`}
				style={styles.headerStyle}
			>
				<div style={styles.contentContainerStyle}>
					<div 
						onClick={() => this.handleSmoothScroll('home')}
						style={{ cursor: 'pointer' }}
					>
						<Logo />
					</div>
					<ul className="header__nav" style={styles.navStyle}>
						<li onClick={() => this.handleSmoothScroll('my-work')} style={styles.listItemStyle}>
							<h5 className="link-on-color" style={styles.navTextStyle}>My Work</h5>
						</li>
						<li onClick={() => this.handleSmoothScroll('about-me')} style={styles.listItemStyle}>
							<h5 className="link-on-color" style={styles.navTextStyle}>About Me</h5>
						</li>
						<li onClick={() => this.handleSmoothScroll('lets-connect')} style={styles.listItemStyle}>
							<h5 className="link-on-color" style={styles.navTextStyle}>Let's Connect</h5>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Header;

const styles = {
	headerStyle: {
		background: 'transparent',
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		zIndex: '50'
	},
	contentContainerStyle: {
		padding: '1.45rem 50px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	logoWrapperStyle: {
		display: 'flex'
	},
	navStyle: {
		listStyle: 'none',
		display: 'flex',
		marginRight: '10px',
		textDecoration: 'none',
		margin: 0,
		textDecoration: 'none',
		backgroundImage: 'none',
		textShadow: 'none',
		cursor: 'pointer'
	},
	listItemStyle: {
		marginBottom: 0
	},
	navLinkStyle: {},
	navTextStyle: {
		marginLeft: '20px'
	}
};
