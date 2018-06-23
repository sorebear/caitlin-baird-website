import React, { Component } from 'react';
import Link from 'gatsby-link';

import HeroImage from '../sections/heroImage';
import StartHere from '../sections/startHere';
import WorkIntro from '../sections/workIntro';
import MyWork from '../sections/myWork';
import WhatToExpect from '../sections/whatToExpect';
import AboutMe from '../sections/aboutMe';
import Title from '../components/title';
import References from '../sections/references';
import LetsConnect from '../sections/letsConnect';
import Footer from '../sections/footer';
import SectionWithBackground from '../components/sectionWithBackground';

import aboutMeImg from '../images/about-me.jpg';
import speakingImg from '../images/speaking.png';
import heroImg from '../images/hero-image.jpg';
import letsConnectImg from '../images/lets-connect.jpg';

const IndexPage = () => (
   <div className="site-wrapper">
      <HeroImage image={heroImg} />
      <section id="start-here" className="container">
         <StartHere />
      </section>
      <SectionWithBackground
         id="my-work-intro"
         style={{ backgroundImage: `linear-gradient(
            to bottom, 
            rgba(25, 25, 25, .8), 
            rgba(25, 25, 25, .6)), 
            url(${speakingImg})`
         }}
      >
         <WorkIntro />
      </SectionWithBackground>
      <SectionWithBackground
         id="my-work"
         style={{ backgroundColor: 'rgb(248,88,73)'}}
      >
         <Title style={{ color: 'white' }}>My Work</Title>
         <MyWork />
      </SectionWithBackground>
      <section id="what-to-expect" className="container">
         <Title>What To Expect From Me</Title>
         <WhatToExpect />
      </section>
      <SectionWithBackground
         id="about-me"
         style={{ backgroundPosition: 'right',
            backgroundImage: `linear-gradient(
         to bottom, 
         rgba(25, 25, 25, .8), 
         rgba(25, 25, 25, .6)), 
         url(${aboutMeImg})`
         }}
      >
         <Title style={{ color: 'white' }}>About Me</Title>
         <AboutMe />
      </SectionWithBackground>
      <section id="references" className="container">
         <Title>Kind Words From Trustworthy People</Title>
         <References />
      </section>
      <SectionWithBackground
         id="lets-connect"
         style={{
            backgroundImage: `linear-gradient(
         to bottom, 
         rgba(25, 25, 25, .8), 
         rgba(25, 25, 25, .6)), 
         url(${letsConnectImg})`
         }}
      >
         <Title style={{color: 'white' }}>Let's Connect</Title>
         <LetsConnect />
      </SectionWithBackground>
      <Footer />
   </div>
);

export default IndexPage;