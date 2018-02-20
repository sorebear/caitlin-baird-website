import React from 'react';

export default ({ children }) => (
   <h2 style={styles.titleStyle}>
      // { children }
   </h2>
);

const styles = {
   titleStyle: {
      margin: '5rem 0',
      textTransform: 'uppercase'
   }
}