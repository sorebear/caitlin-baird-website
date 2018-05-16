import React from 'react';

export default ({ className, style, id, children }) => (
   <section className={className} id={id} style={{ ...styles.sectionStyle, ...style }}>
      <div className="container">
         { children }
      </div>
   </section>
);

const styles = {
   sectionStyle: {
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
   }
};
