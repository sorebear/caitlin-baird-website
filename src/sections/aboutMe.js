import React from 'react';

export default () => (
   <div style={styles.aboutMeStyle}>
      <h5 style={styles.titleStyle}>I Am...</h5>
      <p style={styles.textStyle}>
      a 34yo deep thinker, deep feeler &amp; huge reader. perpetually hot. married w/o kids. more witty than funny. in love with throne of glass. an only child. always burning a candle. crazy about puppies, red wine, fall leaves &amp; my husband. obsessed with words—where they came from, how they’re used, what they mean. passionate about transformation and helping people experience the life they truly seek. re-losing the same 20 pounds I’ve lost 67 times before. and, learning to make peace with all of these things. 
      </p>
      <p style={styles.textStyle}>
         Looking for a prosessional bio? Click here.
      </p>
   </div>
);

const styles = {
   aboutMeStyle: {
      width: '70%'
   },
   titleStyle: {
      color: 'white'
   },
   textStyle: {
      color: 'white'
   }
}