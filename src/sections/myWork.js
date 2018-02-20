import React from 'react';

export default () => (
	<div style={styles.servicesContainerStyle}>
		<div style={styles.serviceStyle}>
			<i className="" />
			<div>
				<h4>Speaking</h4>
				<p>
					I speak predominantly on self-awareness, inner wholeness, spiritual formation,
					relational reconciliation, and identity.
				</p>
				<p>
					I've spoken to thousands in variety of context from colleges to churches to
					conferences.
				</p>
				<p>
					I am available for key note talks, workshops, break-out sessions, college seminars,
					university orientations and corporate bookings of all kinds.
				</p>
			</div>
		</div>
      <div style={styles.serviceStyle}>
			<i className="" />
			<div>
				<h4>Training</h4>
				<p>
               My first character workshop A Grace Experience piloted in 2012 with 72 brave souls.
				</p>
				<p>
               A character workshop is an opportunity to explore our internal belief systems and recognize the obstacles in our path toward an abundant life.
				</p>
				<p>
               Not satisfied with the life you have? Trainings can often help us "get at" what's really going on beneath the surface.
				</p>
			</div>
		</div>
      <div style={styles.serviceStyle}>
			<i className="" />
			<div>
				<h4>Speaking</h4>
				<p>
					I speak predominantly on self-awareness, inner wholeness, spiritual formation,
					relational reconciliation, and identity.
				</p>
				<p>
					I've spoken to thousands in variety of context from colleges to churches to
					conferences.
				</p>
				<p>
					I am available for key note talks, workshops, break-out sessions, college seminars,
					university orientations and corporate bookings of all kinds.
				</p>
			</div>
		</div>
	</div>
);

const styles = {
	servicesContainerStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '5rem'
   },
   serviceStyle: {
      width: '30%',
      display: 'flex'
   }
};
