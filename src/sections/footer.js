import React from 'react';

const date = new Date();

export default () => (
   <div style={styles.footerStyle}>
      <div className="container" style={{ width: '100%' }}>
         <ul style={styles.navStyle}>
            <li>
               <a style={styles.anchorStyle}>
                  <h5 style={styles.linkTextStyle}>Start Here</h5>
               </a>      
            </li>
            <li>
               <a style={styles.anchorStyle}>
                  <h5 style={styles.linkTextStyle}>About Me</h5>
               </a>      
            </li>
            <li>
               <a style={styles.anchorStyle}>
                  <h5 style={styles.linkTextStyle}>Speaking</h5>
               </a>      
            </li>
            <li>
               <a style={styles.anchorStyle}>
                  <h5 style={styles.linkTextStyle}>Coaching</h5>
               </a>      
            </li>
            <li>
               <a style={styles.anchorStyle}>
                  <h5 style={styles.linkTextStyle}>Training/Workshops</h5>
               </a>      
            </li>
            <li>
               <a style={styles.anchorStyle}>
                  <h5 style={styles.linkTextStyle}>Let's Connect</h5>
               </a>      
            </li>
         </ul>
         <ul>

         </ul>
         <p style={styles.copyrightStyle}>
            <small>
               Copyright &copy; Caitlin Baird { date.getFullYear() }
            </small>
         </p>
      </div>
   </div>
);

const styles = {
   footerStyle: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      // backgroundImage: 'linear-gradient(rgb(50, 24, 95), rgb(97, 4, 95)',
      backgroundColor: 'rgb(51, 51, 51)',
      color: 'white'
   },
   navStyle: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      listStyle: 'none',
      marginTop: '1.45rem'
   },
   linkTextStyle: {
      fontWeight: 400
   },
   copyrightStyle: {
      padding: '2.5rem 0',
      fontWeight: 400,
      color: 'grey'
   }
}