import React, { Component } from 'react';
import Modal from '../components/modal';
import Title from '../components/title';

class AboutMe extends Component {
	constructor(props) {
      super(props);
      this.toggleModal = this.toggleModal.bind(this);
		this.state = {
			showModal: false
		};
	}

	toggleModal() {
		this.setState({
			showModal: !this.state.showModal
		});
	}

	render() {
		return (
			<div className="about-me" style={styles.aboutMeStyle}>
				<Modal showModal={this.state.showModal} className="modal">
               <h5 className="modal__close" onClick={this.toggleModal} style={styles.closeModalStyle}>&times;</h5>
               <Title className="modal__title" style={{paddingTop: 0, paddingBottom: '2.5rem'}}>Professional Bio</Title>
					<p className="modal__content">
						A self-identified hopeful realist, Caitlin Baird inspires audiences to boldly
						pursue the abundant life while also acknowledging how hard this pursuit can be.
						Not one for simple answers, Caitlin addresses head-on the complexities of life.
						She teaches her audience how to become self-aware, empowers them to take
						responsibility, and inspires them to take action toward an unprecedented future.
						Caitlin shares stories of her own personal transformation with warmth and candor.
						She'll have you laughing one moment and feeling convicted the next, all
						communicated with great empathy.
					</p>

					<p className="modal__content">
						An experienced speaker, Caitlin has worked with a variety of churches, camps and
						schools over the past 7 years. She developed an original character training A
						Grace Experience which piloted in Orange County, CA Fall of 2012. She is currently
						working on her first e-book and online workshop.
					</p>

					<p className="modal__content">
						Caitlin and her husband, Soren, live on the East Bay of San Fransisco, where they
						pay way too much for too small of an apartment. She loves great books, red wine,
						dinners out with friends and the year-round smell of fall candles.
					</p>
				</Modal>
				<h5 className="about-me__title" style={styles.titleStyle}>I Am...</h5>
				<p className="about-me__content" style={styles.textStyle}>
					a 34yo deep thinker, deep feeler &amp; huge reader. perpetually hot. married w/o
					kids. more witty than funny. in love with throne of glass. an only child. always
					burning a candle. crazy about puppies, red wine, fall leaves &amp; my husband.
					obsessed with words—where they came from, how they’re used, what they mean.
					passionate about transformation and helping people experience the life they truly
					seek. re-losing the same 20 pounds I’ve lost 67 times before. and, learning to make
					peace with all of these things.
				</p>
            <p onClick={this.toggleModal} style={{...styles.textStyle, color: 'rgb(179, 61, 120)', cursor: 'pointer'}}>
               Looking for a prosessional bio? Click here.
            </p>
			</div>
		);
	}
}

export default AboutMe;

const styles = {
	aboutMeStyle: {
		width: '70%'
	},
	titleStyle: {
		color: 'white'
	},
	textStyle: {
		color: 'white'
   },
   closeModalStyle: {
      position: 'absolute',
      top: '10px',
      right: '25px',
      fontSize: '48px',
      cursor: 'pointer'
   }
};
