import React from 'react';
import Button from '../components/button';

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
			<Button
				type="submit" 
				value="Send" 
				className="lets-connect__submit-button"
				style={{ width: '160px' }}>
					Send
			</Button>
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
   sendStyle: {
      margin: 0,
      padding: 0
   }
};
