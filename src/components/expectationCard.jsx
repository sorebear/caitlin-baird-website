import React from 'react';

export default ({ children, icon, title, style }) => (
   <div className="what-to-expect__card" style={{...styles.cardStyle, ...style}}>
      <div style={styles.headerStyle}>
         <i className={`primary-color ${icon}`} style={styles.iconStyle}></i>
         <h5 className="subtitle-on-white">{ title }</h5>
      </div>
      { children }
   </div>
);

const styles = {
   cardStyle : {
      width: '320px',
      marginBottom: '7.5rem',
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
      paddingBottom: '2px',
      backgroundSize: `cover`,
      WebkitBackgroundClip: 'text',
   }
}