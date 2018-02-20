import React from 'react';
import Link from 'gatsby-link';
import HeroImage from '../sections/heroImage';
import StartHere from '../sections/startHere';
import MyWork from '../sections/myWork';
import AboutMe from '../sections/aboutMe';
import Title from '../components/title';

const IndexPage = () => (
  <div className="site-wrapper">
    <HeroImage/>
    <section id="section-start-here" className="container">
      <StartHere/>
    </section>
    <section id="my-work" className="container">
      <Title>My Work</Title>
      <MyWork />
    </section>
    <section id="about-me" className="container">
      <Title>About Me</Title>
      <AboutMe />
    </section>
  </div>
)

export default IndexPage
