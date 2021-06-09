import React from 'react';
import { animated, useSpring } from 'react-spring';
import Typist from 'react-typist';
import { Container } from 'semantic-ui-react';


const AnimationBox = () => {

  const props = useSpring({
      to: { x: 0, y: 50, opacity: 1,},
      from: { x: 0, y: 0, opacity: 1 } ,
      loop: { reverse: true, },
      config: {duration: 3000},
      loop: {reverse: true}

    });

  return(

    <Container className="box_box">

    <animated.div className="raisedCard box" style={props}>
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
      </animated.div>
      </Container>



  )
}

export default AnimationBox;
