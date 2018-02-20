import React from 'react';
import Link from 'gatsby-link';
import HeroImage from '../sections/heroImage';
import StartHere from '../sections/startHere';
import MyWork from '../sections/myWork';
import AboutMe from '../sections/aboutMe';
import Title from '../components/title';
import References from '../sections/references';
import Footer from '../sections/footer';
import SectionWithBackgroundImg from '../components/sectionWithBackgroundImg';

const IndexPage = () => (
   <div className="site-wrapper">
      <HeroImage />
      <section id="start-here" className="container">
         <StartHere />
      </section>
      <section id="my-work" className="container">
         <Title>My Work</Title>
         <MyWork />
      </section>
      <SectionWithBackgroundImg
         id="about-me"
         style={{
            backgroundImage: `linear-gradient(
         to bottom, 
         rgba(25, 25, 25, .8), 
         rgba(25, 25, 25, .6)), 
         url('static/about-me.jpg')`
         }}
      >
         <Title style={{ color: 'white' }}>About Me</Title>
         <AboutMe />
      </SectionWithBackgroundImg>
      <section id="references" className="container">
         <Title>Kind Words From Trustworthy People</Title>
         <References />
      </section>
      <Footer />
   </div>
);

export default IndexPage;
