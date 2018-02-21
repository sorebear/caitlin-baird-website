import React from 'react';

export default ({ children, style }) => (
   <h2 style={{...styles.titleStyle, ...style}}>
      // { children }
   </h2>
);

const styles = {
   titleStyle: {
      padding: '5rem 0',
      margin: 0,
      textTransform: 'uppercase',
      // color: 'rgb(179, 61, 120)'
   }
}