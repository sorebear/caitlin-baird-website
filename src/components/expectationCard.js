import React from 'react';

export default ({ children, icon, title, style }) => (
   <div style={{...styles.cardStyle, ...style}}>
      <div style={styles.headerStyle}>
         <i className={icon} style={styles.iconStyle}></i>
         <h5>{ title }</h5>
      </div>
      { children }
   </div>
);

const styles = {
   cardStyle : {
      width: '350px',
      padding: '2rem',
      marginBottom: '2rem',
      marginLeft: '1rem',
      marginRight: '1rem',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
      wordWrap: 'break-work',
      wordBreak: 'normal'
      // border: '2px solid black'
   },
   headerStyle: {
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      marginBottom: '2rem'
   },
   iconStyle: {
      fontSize: '3rem'
   }
}