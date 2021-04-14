import React from 'react'
import {graphql, Link} from "gatsby"
import styled from 'styled-components'
import tw from 'tailwind.macro'
import {Parallax} from 'react-spring/renderprops-addons.cjs'
// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
// Elements
import Inner from '../elements/Inner'
import {BigTitle, Subtitle, Title} from '../elements/Titles'
// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'
import Skills from "../views/Skills";
import Chess from "../views/Chess";

import avatar from '../images/avatar.jpg'

import Chart from "react-google-charts";

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const SkillsText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:pt-10 lg:text-2xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

let today = new Date();
let birthday = new Date(2000, 5, 25, 11, 11, 0, 0);
let age = ((today - birthday) / 1000 / 60 / 60 / 24 / 365).toFixed(1);

let googleOptions = {
    'backgroundColor': 'transparent',
    'vAxis': {
        textPosition: 'none',
        gridlines: {
            color: 'transparent'
        },
        scaleType: 'log',
        textStyle: {color: '#dae4e9'},
        titleTextStyle: {color: '#dae4e9'}
    },
    'hAxis': {
        textStyle: {color: '#dae4e9'},
        titleTextStyle: {color: '#dae4e9'}
    },
    'legend': 'none'
};

export default ({data}) => {
    console.log(data);
    let langSize = {};
    let langCounts = {};
    let googleData = [["Language", "Count", {role: "style"}, {role: 'tooltip', type: 'string'}]];
    data.allInternalGithub.edges.forEach(node => {
        let lang = node.node["language"];
        let size = node.node["size"];
        if (lang !== null && lang !== undefined && size !== null && size !== undefined) {
            if (langSize.hasOwnProperty(lang)) {
                langSize[lang] += parseInt(size);
                langCounts[lang]++;
            } else {
                langSize[lang] = parseInt(size);
                langCounts[lang] = 1;
            }
        }
    });

    for (let lang in langSize)
        if (langSize.hasOwnProperty(lang))
            googleData.push([lang, parseInt(langSize[lang]), '#5bffde', 'Repositories: ' + langCounts[lang] + '; Total size: ' + langSize[lang]]);
    return (
        <>
            <Layout/>
            <Parallax pages={7}>
                <Hero offset={0}>
                    <BigTitle>
                        Hello, <br/> I'm Timo Borner.
                    </BigTitle>
                    <Subtitle>I'm a backend developer, currently employed at <a
                        href="https://www.dps.de/">DPS</a> and studying Computing in Science at
                        the <a
                            href="https://www.uni-hamburg.de/">University of Hamburg</a>.</Subtitle>
                </Hero>
                <Projects offset={1}>
                    <Title>Projects</Title>
                    <ProjectsWrapper>
                        <ProjectCard
                            title="Ray Tracing"
                            link="https://github.com/MetaColon/RayTracing"
                            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)">
                            In this project I built a ray tracing algorithm from scratch in C#.
                        </ProjectCard>
                        <ProjectCard
                            title="T compiler"
                            link="https://github.com/MetaColon/TCompiler"
                            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)">
                            I created a language (called T), with a compiler and IDE.
                        </ProjectCard>
                        <ProjectCard
                            title="Physomatik"
                            link="https://github.com/MetaColon/Physomatik"
                            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)">
                            Quite some time ago I created a physics simulation
                        </ProjectCard>
                        <ProjectCard
                            title="Others"
                            link="https://github.com/MetaColon"
                            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)">
                            You can find all my other public projects here. Note that I can't
                            publish
                            all my projects.
                        </ProjectCard>
                    </ProjectsWrapper>
                </Projects>
                <About offset={3}>
                    <Title>About</Title>
                    <AboutHero>
                        <Avatar src={avatar} alt="Timo Borner"/>
                        <AboutSub>
                            I am {age} years old and live in Hamburg. Besides studying, riding my
                            road
                            bike, playing beach volleyball, playing the guitar and watching Netflix,
                            I
                            don't really have time to do much else, so that's pretty much all there
                            is
                            to tell about me nowadays.
                        </AboutSub>
                    </AboutHero>
                    <AboutDesc>
                        If I happen to do catch a bit of free time, I like travelling by bike
                        (mainly by
                        mountainbike), meeting with friends and watching more Netflix. I love
                        figuring
                        new things out, which is why the university is the right place to be for me.
                        Here I learn new things about physics and math and learn that I already know
                        most of the stuff taught in information technology.
                    </AboutDesc>
                </About>
                <Skills offset={4}>
                    <Title>Skills</Title>
                    <Chart chartType="ColumnChart"
                           width="100%"
                           height="500px"
                           data={googleData}
                           options={googleOptions}/>
                </Skills>
                <Chess offset={5}>
                	<Title>Chess</Title>
                	<center>
                		<iframe src="https://lichess.org/embed/O2kIngFp#56?theme=maple&bg=dark" width={600} height={397} frameBorder={0} Title="A classical game"></iframe>
                	</center>
                </Chess>
                <Contact offset={6}>
                    <Inner>
                        <Title>Get in touch</Title>
                        <ContactText>
                            Say <a href="mailto:timo@teemze.de">Hi</a>.
                        </ContactText>
                    </Inner>
                    <Footer>
                        &copy; 2021 by Timo Borner.{' '}
                        Checkout <a href="https://www.lekoarts.de">LekoArts</a>.<br/>
                        <Link to="/Imprint/">Imprint</Link>
                    </Footer>
                </Contact>
            </Parallax>
        </>
    )
}


export const query = graphql`
{
  allInternalGithub {
    edges {
      node {
        language
        size
      }
    }
  }
}
`
