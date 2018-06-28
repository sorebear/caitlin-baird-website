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
import Header from '../components/header';
import Footer from '../sections/footer';
import SectionWithBackground from '../components/sectionWithBackground';

import { mainBgGradient } from '../utils/variables';

import aboutMeImg from '../images/about-me.jpg';
import speakingImg from '../images/speaking.png';
import heroImg from '../images/hero-image.jpg';
import letsConnectImg from '../images/lets-connect.jpg';

const IndexPage = () => (
	<div className="site-wrapper">
		<Header />
		<HeroImage image={heroImg} />
		<section id="start-here" className="container">
			<StartHere />
		</section>
		<SectionWithBackground
			id="my-work-intro"
			style={{
				backgroundImage: `${mainBgGradient}, url(${speakingImg})`
			}}
		>
			<WorkIntro />
		</SectionWithBackground>
		<SectionWithBackground id="my-work">
			<Title className="title-on-color">My Work</Title>
			<MyWork />
		</SectionWithBackground>
		<section id="what-to-expect" className="container">
			<Title className="title-on-white">What To Expect From Me</Title>
			<WhatToExpect />
		</section>
		<SectionWithBackground
			id="about-me"
			style={{
				backgroundPosition: 'right',
				backgroundImage: `${mainBgGradient}, url(${aboutMeImg})`
			}}
		>
			<Title className="title-on-color" style={{ padding: '7.5rem 0 5rem 0' }}>About Me</Title>
			<AboutMe />
		</SectionWithBackground>
		<section id="references" className="container">
			<Title className="title-on-white">Kind Words From Trustworthy People</Title>
			<References />
		</section>
		<SectionWithBackground
			id="lets-connect"
			style={{
				backgroundImage: `${mainBgGradient}, url(${letsConnectImg})`
			}}
		>
			<Title className="title-on-color">Let's Connect</Title>
			<LetsConnect />
		</SectionWithBackground>
		<Footer />
	</div>
);

export default IndexPage;
