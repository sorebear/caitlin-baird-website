import React from 'react';
import ExpectationCard from '../components/expectationCard';

export default () => (
   <div className="what-to-expect" style={styles.whatToExpectStyles}>
      <ExpectationCard icon="icon-basic-message-multiple" title="Communication">
         <p className="m-0">Quick and professional replies to phone calls and email messages</p>
      </ExpectationCard>
      <ExpectationCard icon="icon-basic-smartphone" title="Consultation">
         <p className="m-0">A phone consultation prior to your event so we can both better understand how I can best partner with you and serve your audience</p>
      </ExpectationCard>
      <ExpectationCard icon="icon-basic-share" title="Publicity">
         <p className="m-0">An announcement about your event on my blog and social media channels (per your permission)</p>
      </ExpectationCard>
      <ExpectationCard icon="icon-basic-lightbulb" title="Professionalism">
         <p className="m-0">A professionally prepared, compelling presentation designed to achieve the goals you desire for your audience</p>
      </ExpectationCard>
      <ExpectationCard icon="icon-basic-question" title="Follow-Up" style={{ justifySelf: 'flex-start'}}>
         <p className="m-0">A brief, post event communication to ensure I met your expectations and receive feedback</p>
      </ExpectationCard>
      <ExpectationCard className="what-to-expect__placeholder-card" style={{ visibility: 'hidden'}} />
   </div>
);

const styles = {
   whatToExpectStyles: {
      display: 'flex',
      flexFlow: 'wrap',
      justifyContent: 'space-between'
   }
}