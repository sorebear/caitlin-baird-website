import React from 'react';
import logoC from '../images/logo-c.svg';
import logoB from '../images/logo-b.svg';

export default () => (
   <div className="logo">
      <div className="logo__wrapper" style={styles.logoWrapperStyle}>
         <div style={styles.letterWrapperStyle}>
            <img className="logo__image logo__image--b" src={logoC} style={styles.imageStyle} />
            <h5 className="logo__text" style={{...styles.textStyle, color: 'rgb(77, 77, 77)'}}>
               Caitlin
            </h5>
         </div>
         <div style={styles.letterWrapperStyle}>
            <img className="logo__image logo__image--c" src={logoB} style={styles.imageStyle} />
            <h5 className="logo__text" style={styles.textStyle}>
               Baird
            </h5>
         </div>
         <div style={styles.verticalLineStyle} className="logo__vertical-line" />
         <div style={styles.jobTitlesContainerStyle}>
            <h3 style={styles.jobTitleStyle} className="logo__job-title logo__job-title--1">Speaker</h3>
            <h3 style={styles.jobTitleStyle} className="logo__job-title logo__job-title--2">Trainer</h3>
            <h3 style={styles.jobTitleStyle} className="logo__job-title logo__job-title--3">Consultant</h3>
         </div>
      </div>
   </div>
);

const styles = {
   logoWrapperStyle: {
      color: 'white',
      display: 'flex'
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