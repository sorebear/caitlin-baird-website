import React from 'react';

const date = new Date();

export default () => (
	<div className="footer bg-primary-color" style={styles.footerStyle}>
		<div className="container" style={{ width: '100%' }}>
			<ul className="footer__nav" style={styles.navStyle}>
				<li>
					<a style={styles.anchorStyle}>
						<h5 className="link-on-color" style={styles.linkTextStyle}>Start Here</h5>
					</a>
				</li>
				<li>
					<a style={styles.anchorStyle}>
						<h5 className="link-on-color" style={styles.linkTextStyle}>About Me</h5>
					</a>
				</li>
				<li>
					<a style={styles.anchorStyle}>
						<h5 className="link-on-color" style={styles.linkTextStyle}>Speaking</h5>
					</a>
				</li>
				<li>
					<a style={styles.anchorStyle}>
						<h5 className="link-on-color" style={styles.linkTextStyle}>Coaching</h5>
					</a>
				</li>
				<li>
					<a style={styles.anchorStyle}>
						<h5 className="link-on-color" style={styles.linkTextStyle}>Training/Workshops</h5>
					</a>
				</li>
				<li>
					<a style={styles.anchorStyle}>
						<h5 className="link-on-color" style={styles.linkTextStyle}>Let's Connect</h5>
					</a>
				</li>
			</ul>
			<ul />
			<p className="text-on-color" style={styles.copyrightStyle}>
				<small>Copyright &copy; Caitlin Baird {date.getFullYear()}</small>
			</p>
		</div>
	</div>
);

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
		justifyContent: 'space-between',
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
