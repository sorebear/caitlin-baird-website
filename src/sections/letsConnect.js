import React from 'react';

export default () => (
	<div className="lets-connect">
		<form
			target="_blank"
			method="POST"
			style={styles.formStyle}
			className="lets-connect__form"
			//action='https://formspree.io/sorenbaird@protonmail.com'
		>
			<div className="lets-connect__input-container" style={styles.inputContainerStyle}>
				<input
					name="name"
					type="text"
					placeholder="Name*"
					className="lets-connect__input"
					style={{ ...styles.inputStyle, marginRight: '10px' }}
				/>
				<input
					name="_repolyto"
					type="email"
					placeholder="Email*"
					className="lets-connect__input"
					style={{ ...styles.inputStyle, marginLeft: '10px' }}
				/>
			</div>
         <textarea 
            name="body" 
            rows="8" 
				placeholder="Message*"
				className="lets-connect__input" 
            style={styles.inputStyle} 
         />
			<button 
				type="submit" 
				value="Send" 
				className="lets-connect__submit-button"
				style={styles.buttonStyle}>
				<h5 style={styles.sendStyle}>Send</h5>
			</button>
		</form>
	</div>
);

const styles = {
	formStyle: {
      maxWidth: '800px',
      margin: '0 auto'
	},
	inputContainerStyle: {
      display: 'flex',
	},
	inputStyle: {
		border: '2px solid white',
		color: 'white',
		outline: 'none',
		display: 'block',
		width: '100%',
		padding: '10px 15px',
		marginBottom: '2rem',
      backgroundColor: 'transparent',
      resize: 'none',
      marginBottom: '20px'
   },
   buttonStyle: {
      padding: '16px 20px',
      width: '142px',
      color: 'white',
      border: '2px solid white',
      backgroundColor: 'transparent',
      cursor: 'pointer'
   },
   sendStyle: {
      margin: 0,
      padding: 0
   }
};
