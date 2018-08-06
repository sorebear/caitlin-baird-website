import React, { Component } from 'react';
import Button from '../components/button';
import smoothscroll from 'smoothscroll';

class MyWork extends Component {
  constructor(props) {
    super(props);
    this.handleSmoothScroll = this.handleSmoothScroll.bind(this);
  }
  
  handleSmoothScroll(anchor) {
    const scrollDestination = document.getElementById(anchor);
    smoothscroll(scrollDestination, 600);
  }

  render() {
    return (
      <div className="services" style={styles.servicesContainerStyle}>
        <div className="text-on-color" style={styles.serviceStyle}>
          <div>
            <h4 className="subtitle-on-color" style={styles.serviceTitleStyle}>// Speaking</h4>
            <p>
              I speak predominantly on self-awareness, inner wholeness, spiritual formation,
              relational reconciliation, and identity.
            </p>
            <p>
              I've spoken to thousands in variety of context from colleges to churches to
              conferences.
            </p>
            <p style={{ marginBottom: '2.5rem'}}>
              I am available for key note talks, workshops, break-out sessions, college seminars,
              university orientations and corporate bookings of all kinds.
            </p>
          </div>
          <Button className="mx-auto button-on-color" onClick={() => this.handleSmoothScroll('lets-connect')}>
            <span>Let's Connect</span>
            <span>About Speaking</span>
          </Button>
        </div>
          <div className="text-on-color" style={styles.serviceStyle}>
          <div>
            <h4 className="subtitle-on-color" style={styles.serviceTitleStyle}>// Training</h4>
            <p>
              Trainings are designed to explore internal patterns and habits and to empower you and your team to thrive, both relationally and professionally. Trainings can function like a mirror, showing individuals how they engage with the world around them.  
            </p>
            <p style={{ marginBottom: '2.5rem'}}>
              I offer trainings to help you and your team in a variety of areas. Such as: confidence, creating loving relationships that work, career change, self-care, living out your purpose, managing transitions, artistry, creativity, achieving optimal health.
            </p>
          </div>
          <Button className="mx-auto button-on-color" onClick={() => this.handleSmoothScroll('lets-connect')}>
            <span>Let's Connect</span>
            <span>About Training</span>
          </Button>
        </div>
          <div className="text-on-color" style={styles.serviceStyle}>
          <div>
            <h4 className="subtitle-on-color" style={styles.serviceTitleStyle}>// Consulting</h4>
            <p>
              We often fail to see the undercurrents of cultures which we are a part. Consulting is an outside perspective to diagnose the needs of an organization and offering solutions to fix obvious and underlying problems.
            </p>
            <p>
              
            </p>
            <p style={{ marginBottom: '2.5rem'}}>
              I am available for individual or on-going consulting. 
            </p>
          </div>
          <Button className="mx-auto button-on-color" onClick={() => this.handleSmoothScroll('lets-connect')}>
            <span>Let's Connect</span>
            <span>About Consulting</span>
          </Button>
        </div>
      </div>
    );
  }
}

export default MyWork;

const styles = {
	servicesContainerStyle: {
      display: 'flex',
      justifyContent: 'space-between',
	},
	serviceTitleStyle: {
		textAlign: 'center',
		textTransform: 'uppercase',
		marginBottom: '2.5rem'
	},
   serviceStyle: {
    width: '30%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between'
   }
};
