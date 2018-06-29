import React, { Component } from 'react';
import smoothscroll from 'smoothscroll';

const date = new Date();

class Footer extends Component {

	handleSmoothScroll(anchor) {
		const scrollDestination = document.getElementById(anchor);
		console.log(scrollDestination);
		smoothscroll(scrollDestination, 600);
	}

	render() {
		return (
			<div className="footer bg-primary-color" style={styles.footerStyle}>
				<div className="container" style={{ width: '100%' }}>
					<ul className="footer__nav" style={styles.navStyle}>
						<li>
							<button 
								onClick={() => this.handleSmoothScroll('my-work')}
								className="unstyled-button" style={styles.anchorStyle}
							>
								<h5 className="link-on-color" style={styles.linkTextStyle}>My Work</h5>
							</button>
						</li>
						<li>
							<button 
								onClick={() => this.handleSmoothScroll('about-me')}
								className="unstyled-button" style={styles.anchorStyle}
							>
								<h5 className="link-on-color" style={styles.linkTextStyle}>About Me</h5>
							</button>
						</li>
						<li>
							<button 
								onClick={() => this.handleSmoothScroll('lets-connect')}
								className="unstyled-button" style={styles.anchorStyle}
							>
								<h5 className="link-on-color" style={styles.linkTextStyle}>Let's Connect</h5>
							</button>
						</li>
					</ul>
					<ul />
					<p className="text-on-color" style={styles.copyrightStyle}>
						<small>Copyright &copy; Caitlin Baird {date.getFullYear()}</small>
					</p>
				</div>
			</div>
		);
	}
} 

export default Footer;

const styles = {
	footerStyle: {
		display: 'flex',
		flexDirection: 'column',
		textAlign: 'center',
		color: 'white'
	},
	navStyle: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		listStyle: 'none',
		marginTop: '1.45rem',
		marginLeft: 0
	},
	linkTextStyle: {
		fontWeight: 400
	},
	copyrightStyle: {
		padding: '2.5rem 0',
		fontWeight: 400,
	}
};
