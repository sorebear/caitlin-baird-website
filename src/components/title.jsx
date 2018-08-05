import React from 'react';

export default ({ children, style, className }) => (
   <h2 className={`${className} rem-7-5`} style={{...styles.titleStyle, ...style}}>
      // { children }
   </h2>
);

const styles = {
   titleStyle: {
      padding: '7.5rem 0 5rem 0',
      margin: 0,
      textTransform: 'uppercase',
      // color: 'rgb(179, 61, 120)'
   }
}