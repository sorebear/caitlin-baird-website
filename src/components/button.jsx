import React from 'react';

export default ({ type, value, className, children, style }) => (
   <button 
      type={type}
      value={value} 
      className={`${className} rem-7-5-bottom`}
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
      marginBottom: '7.5rem'
   },
   textStyle: {
      display: 'flex',
      flexDirection: 'column'
   }
}