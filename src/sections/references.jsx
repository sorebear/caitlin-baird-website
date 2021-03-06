import React, { Component } from 'react';
import abbyMcHughOdioImg from '../images/abby-mchugh-odio.png';
import jenniKeyImg from '../images/jenni-key.png';
import johnOrtbergImg from '../images/john-ortberg.png';
import mikeGoldsworthyImg from '../images/mike-goldsworthy.png';
import steveCarterImg from '../images/steve-carter.png';

class References extends Component {
	constructor(props) {
      super(props);
      this.references = ['johnOrtberg', 'steveCarter', 'mikeGoldsworthy', 'abbyMcHughOdio', 'jenniKey'];
		this.state = {
			displayedReference: this.references[0]
		};
	}

	changeDisplayedReference(author) {
		this.setState({
			displayedReference: author
		});
   }
   
   renderReferenceImages() {
      return this.references.map((reference, index) => {
         const boxShadow = reference === this.state.displayedReference ? '0 5px 10px rgba(0, 0, 0, .7)' : 'none';
         return (
            <img
               src={content[reference].image}
               onClick={() => this.changeDisplayedReference(reference)}
               style={{...styles.authorImgStyle, boxShadow: boxShadow}}
               className="references__reference-image"
               key={index}
            />
         )
      });
   }

	render() {
		return (
			<div className="references" style={styles.referencesStyle}>
				<blockquote className="references__blockquote">
					<p className="text-on-white" style={styles.quoteStyle}>
						<img
							style={styles.quoteImgStyle}
							src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxODQ0IiBoZWlnaHQ9IjE0MDkiIHZpZXdCb3g9IjAgMCAxODQ0IDE0MDkiPjxwYXRoIGQ9Ik04NzQuNDM4OTgzIDgzMi45NDkybC05OS40IDM4NGMtMTMuOCA1My4zLTQ0LjIgOTguNy05MS4yIDEzNnMtOTcuMiA1Ni0xNTAuNSA1NmgtMzg0Yy01My4zIDAtOTMuOC0xOC43LTEyMS41LTU2cy0zNC42LTgyLjctMjAuOC0xMzZsMTgyLjItNzA0YzE3LjktNjkuMyA0OC42LTEzNS41IDkxLjktMTk4LjVzOTMuOS0xMTcuNSAxNTEuOC0xNjMuNSAxMjEuOS04Mi41IDE5MS44LTEwOS41IDEzOS42LTQwLjUgMjA5LTQwLjVoNjRjMTcuMyAwIDMwLjcgNi4zIDQwLjEgMTlzMTEuOCAyNy43IDcuNCA0NWwtMzMuMSAxMjhjLTQuNSAxNy4zLTE0LjcgMzIuMy0zMC42IDQ1LTE1LjkgMTIuNy0zMi42IDE5LTQ5LjkgMTloLTY0Yy03MC43IDAtMTM3LjUgMjUtMjAwLjQgNzVzLTEwMy43IDExMC4zLTEyMiAxODFsLTguMyAzMmMtNi45IDI2LjctMy40IDQ5LjMgMTAuNCA2OHMzNC4xIDI4IDYwLjggMjhoMjI0YzUzLjMgMCA5My44IDE4LjcgMTIxLjUgNTYgMjcuNyAzNy4zIDM0LjYgODIuNyAyMC44IDEzNnptODk2IDBsLTk5LjQgMzg0Yy0xMy44IDUzLjMtNDQuMiA5OC43LTkxLjIgMTM2cy05Ny4yIDU2LTE1MC41IDU2aC0zODRjLTUzLjMgMC05My44LTE4LjctMTIxLjUtNTZzLTM0LjYtODIuNy0yMC44LTEzNmwxODIuMi03MDRjMTcuOS02OS4zIDQ4LjYtMTM1LjUgOTEuOS0xOTguNSA0My4zLTYzIDkzLjktMTE3LjUgMTUxLjgtMTYzLjVzMTIxLjktODIuNSAxOTEuOC0xMDkuNWM3MC0yNyAxMzkuNi00MC41IDIwOS00MC41aDY0YzE3LjMgMCAzMC43IDYuMyA0MC4xIDE5czExLjggMjcuNyA3LjQgNDVsLTMzLjEgMTI4Yy00LjUgMTcuMy0xNC43IDMyLjMtMzAuNiA0NS0xNS45IDEyLjctMzIuNiAxOS00OS45IDE5aC02NGMtNzAuNyAwLTEzNy41IDI1LTIwMC40IDc1LTYyLjkgNTAtMTAzLjYgMTEwLjMtMTIxLjggMTgxbC04LjMgMzJjLTYuOSAyNi43LTMuNCA0OS4zIDEwLjQgNjggMTMuOCAxOC43IDM0LjEgMjggNjAuOCAyOGgyMjRjNTMuMyAwIDkzLjggMTguNyAxMjEuNSA1NiAyNy41IDM3LjMgMzQuNCA4Mi43IDIwLjYgMTM2eiIvPjwvc3ZnPg=="
						/>
						{content[this.state.displayedReference].quotation}
					</p>
				</blockquote>
				<p style={styles.authorStyle}>{this.state.displayedReference.author}</p>
				<div style={styles.referenceAuthorContainer} className="reference-author-container">
					{this.renderReferenceImages()}
				</div>
			</div>
		);
	}
}

export default References;

const content = {
	johnOrtberg: {
      id: 0,
      image: johnOrtbergImg,
		quotation:
			`Caitlin has a wonderful gift for being able to communicate God’s word in a way that changes lives. She is biblically thoughtful, honest, warm, reflective, and deeply challenging.`,
		author:
			`— John Ortberg, Pastor of Menlo Church and author of All The Places To Go, Soul Keeping, Who Is This Man?, and many more`
	},
	steveCarter: {
      id: 1,
      image: steveCarterImg,
		quotation:
			`Caitlin is a dear friend who has taught me so much about grace. She has a way with words, is brave beyond measure and simply reminds me of the love of Christ by the way she chooses to orient her life. She will make you laugh, make you think and consistently ask you the right questions.`,
		author:
			`— Steve Carter, Teaching Pastor at Willow Creek Community Church and author of This Invitational Life`
   },
   mikeGoldsworthy: {
      id: 2,
      image: mikeGoldsworthyImg,
      quotation: `We had Caitlin preach 3 services on a Sunday morning for us and she did a fantastic job. She was comfortable, able to relate easily with a diverse congregation (ages and ethnicities) and deliver a thoughtful and nuanced message. She is a gifted communicator and I’m happy to recommend her to you`,
      author: `— Mike Goldsworthy, Senior Pastor of Parkcrest Christian Church and author of In God We Trust?: When the Kingdom of God & Politics Collide`
   },
   abbyMcHughOdio: {
      id: 3,
      image: abbyMcHughOdioImg,
      quotation: `Caitlin possesses the unique ability as a speaker to explore topics with warmth, humor, intellect and honesty. Her affect naturally disarms and engages people across all spectrums of life experience; leaving them moved to belonging, understanding and action`,
      author: `— Abby McHugh Odio, Assistant Campus Pastor at Menlo Church`
   },
   jenniKey: {
      id: 4,
      image: jenniKeyImg,
      quotation: `Caitlin is a compelling, articulate, relevant expositor of God’s Word. Her outer beauty is readily apparent and her inner beauty is on a par—and has been ‘earned’ through meeting life’s challenges as well as understanding and operating in her gifting and strengths and listening carefully to the promptings of the Holy Spirit. Highly recommended as a speaker to both genders and all generations`,
      author: `— Jenni Key,  Director of Women's Ministries and Prayer at EvFree Fullerton`
   }
};

const styles = {
	referencesStyle: {
		marginBottom: '7.5rem',
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column'
	},
	quoteImgStyle: {
		height: '20px',
		opacity: '0.8',
		display: 'inline',
		marginRight: '20px'
	},
	quoteStyle: {
		maxWidth: '800px',
		marginLeft: '20px'
	},
	authorStyle: {
		maxWidth: '700px',
		textAlign: 'center'
	},
	referenceAuthorContainer: {
		display: 'flex',
		flexFlow: 'wrap',
		justifyContent: 'center'
	},
	authorImgStyle: {
		margin: '10px',
		height: '80px',
      cursor: 'pointer',
      borderRadius: '50%'
	}
};
