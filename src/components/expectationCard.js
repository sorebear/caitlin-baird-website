import React from 'react';

export default ({ children, icon, title, style }) => (
   <div className="what-to-expect__card" style={{...styles.cardStyle, ...style}}>
      <div style={styles.headerStyle}>
         <i className={icon} style={styles.iconStyle}></i>
         <h5>{ title }</h5>
      </div>
      { children }
   </div>
);

const styles = {
   cardStyle : {
      width: '320px',
      marginBottom: '5rem',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
      wordWrap: 'break-work',
      wordBreak: 'normal'
   },
   headerStyle: {
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      marginBottom: '1.45rem'
   },
   iconStyle: {
      fontSize: '3rem',
      // backgroundImage: 'linear-gradient(to bottom, rgb(97, 4, 95), rgb(50, 24, 95))',
      paddingBottom: '2px',
      backgroundSize: `cover`,
      WebkitBackgroundClip: 'text',
      color: 'rgb(179, 61, 120)'
   }
}