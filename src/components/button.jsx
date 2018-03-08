import React from 'react';

export default ({ type, value, className, children, style }) => (
   <button 
      type={type}
      value={value} 
      className={className}
      style={{...styles.buttonStyle, ...style}}>
      <h5 style={styles.textStyle} className="p-0 m-0">{ children }</h5>
   </button>
);

const styles = {
   buttonStyle: {
      padding: '16px 20px',
      width: '100%',
      maxWidth: '250px',
      color: 'white',
      border: '2px solid white',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      marginBottom: '5rem'
   },
   textStyle: {
      display: 'flex',
      flexDirection: 'column'
   }
}