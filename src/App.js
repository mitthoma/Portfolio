import React, { useState } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Button, Container, Header, Grid, Menu } from 'semantic-ui-react';
import AnimationBox from './components/AnimationBox';
import Trail from './components/NameTrail';
import Typist from 'react-typist';
import ExpSection from './components/ExpSection';
import Layout from './components/Layout';
import WorkItem from './components/WorkItem';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from './components/About';
import ContactForm from './components/ContactForm';
import FadeInSection from './components/FadeInSection';






function App() {

    const [open, set] = useState(true);

    return (
        <div className="App">

          <Layout />
          <FadeInSection>

          <Grid container={true}>
              <Grid.Row className="newGridRow" columns={2}>
                <Grid.Column computer={8} mobile={16} >
                  <h1 className="mobileHeader">MITCHELL</h1>
                  <h1 className="mobileHeader">THOMAS</h1>
                  <h3 className="mobileHeaderh3">coder and founder.</h3>
                </Grid.Column>
                <Grid.Column  width={8}>
                <Typist>
                  <h3 className="boxText"></h3>
                  <br />

                  <h2 className="boxText">
                    Solidity & Blockchain
                  </h2>
                  <h2 className="boxText">
                    REACT & JS
                  </h2>
                  <h2 className="boxText">
                    Python & ML
                  </h2>
                  <h2 className="boxText">
                    Java
                  </h2>
                  <h2 className="boxText">
                    HTML & CSS
                  </h2>
                </Typist>

                </Grid.Column>
              </Grid.Row>

            <Grid.Row className="typeRow">
              <Grid.Column width={16}>
                <Typist avgTypingDelay={18} stdTypingDelay={50}>
                  <Typist.Delay ms={3000} />
                  <h1 className="type_sentence">

                  Howdy.
                  <br />
                  I'm a coder and entrepreneur. I've worked with Machine Learning & AI, blockchain, and full-stack development. My goal is to continue working at the intersection of these world-changing technologies and strenghten my skills. An obsession with music and a knack for design, I strive to create truly unique projects in the future.
                  <br />
                  <br />
                  <br />

                  B.S. Computer Science, Indiana University Bloomington
                  <br />
                  Specialization in Artificial Intelligence
                  <br />
                  Minor in Human Centered Computing
                  <br />
                  Co-Founder of BLACSAND


                  </h1>
                </Typist>

              </Grid.Column>
            </Grid.Row>
          </Grid>
          </FadeInSection>

          <div id="work"></div>
          <FadeInSection>
          <Grid>

            <Grid.Row  className="experience_row">
                <ExpSection />
            </Grid.Row>

            <Grid.Row >
                <Grid.Column  id="contact" className="myForm" width={16}>
                  <Container>
                    <h1 className="sectionHeader">CONTACT</h1>
                    <br />
                    <a href="mailto:mitthoma@gmail.com"><h3>mitthoma@gmail.com</h3></a>
                    <br />
                    <a href="https://www.linkedin.com/in/mitchellthecoder/"><Button className="workButton">LinkedIn</Button></a>
                    <a href="https://github.com/mitthoma"><Button className="workButton">Github</Button></a>
                    <a href="https://mitchellthecoder.medium.com/"><Button className="workButton">Medium Blog</Button></a>
                    <a href="https://open.spotify.com/artist/486YhVO1yIHlhlVy1suBlM"><Button className="workButton">Spotify Artist Profile</Button></a>



                  </Container>
                </Grid.Column>
            </Grid.Row>

          </Grid>
          </FadeInSection>

        </div>
    );
}

export default App;
