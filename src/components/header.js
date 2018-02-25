import React, { Component } from 'react';
import Link from 'gatsby-link';
import smoothScroll from 'smoothscroll';

import Logo from './logo';

class Header extends Component {
   constructor(props) {
      super(props);
      this.updateHeader = this.updateHeader.bind(this);
      this.state = {
         scrollState : 'unscrolled'
      }
   }

   componentWillMount() {
      document.addEventListener('scroll', this.updateHeader);
   }

   updateHeader() {
      console.log(window.pageYOffset);
      this.setState({
         scrollState: window.pageYOffset !== 0 ? 'scrolled' : 'unscrolled'
      });
   }

   render() {
      return (
         <div className={`header header--${this.state.scrollState}`} style={styles.headerStyle}>
            <div className="container" style={styles.contentContainerStyle}>
               <Link to="/" style={{ textDecoration: 'none' }}>
                  <Logo />
               </Link>
               <ul className="header__nav" style={styles.navStyle}>
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
                     <Link to="#lets-connect" style={styles.navLinkStyle}>
                        <h5 style={styles.navTextStyle}>Let's Connect</h5>
                     </Link>
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
      width: '100%'
   },
   contentContainerStyle: {
      padding: '1.45rem 50px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   logoWrapperStyle: {
      color: 'white',
      display: 'flex'
   },
   navStyle: {
      listStyle: 'none',
      display: 'flex',
      marginRight: '10px',
      textDecoration: 'none',
      margin: 0,
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
