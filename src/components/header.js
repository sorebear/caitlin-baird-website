import React from 'react';
import Link from 'gatsby-link';

const Header = () => (
	<div className="header" style={ styles.headerStyle } >
		<div style={ styles.contentContainerStyle } className="container">
			<h1 style={{ margin: 0 }}>
				<Link to="/" style={styles.logoStyle}>
					Caitlin Baird
				</Link>
			</h1>
			<ul className="header__nav" style={styles.navStyle}>
				<li style={styles.listItemStyle}>
                    <Link to="#start-here" style={styles.navLinkStyle}>
                        <h5 style={styles.navTextStyle}>Start Here</h5>
                    </Link>
                    </li>
                        <li style={styles.listItemStyle}>
                    <Link to="#my-work" style={styles.navLinkStyle}>
                        <h5 style={styles.navTextStyle}>My Work</h5>
                    </Link>
                    </li>
                        <li style={styles.listItemStyle}>
                    <Link to="#about-me" style={styles.navLinkStyle}>
                        <h5 style={styles.navTextStyle}>About Me</h5>
                    </Link>
                    </li>
                        <li style={styles.listItemStyle}>
                    <Link to="#references" style={styles.navLinkStyle}>
                        <h5 style={styles.navTextStyle}>References</h5>
                    </Link>
                    </li>
                        <li style={styles.listItemStyle}>
                    <Link to="#lets-connect" style={styles.navLinkStyle}>
                        <h5 style={styles.navTextStyle}>Let's Connect</h5>
                    </Link>
                </li>
			</ul>
		</div>
	</div>
);

export default Header;

const styles = {
   headerStyle: {
      background: 'transparent',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
   },
   contentContainerStyle: {
      padding: '1.45rem 1.0875rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
   },
   logoStyle: {
      color: 'white',
      textDecoration: 'none',
      textShadow: 'none',
      backgroundImage: 'none'
   },
   navStyle: {
      listStyle: 'none',
      display: 'flex',
      marginRight: '10px',
      textDecoration: 'none',
      margin: 0,
      alignItems: 'flex-end',
      color: 'white'
   },
   listItemStyle: {
      marginBottom: 0
   },
   navLinkStyle: {
      textDecoration: 'none',
      color: 'inherit',
      marginBottom: 0,
      backgroundImage: 'none',
      textShadow: 'none'
   },
   navTextStyle: {
      marginLeft: '20px'
   }
};
