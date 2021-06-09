import React, { Component } from 'react';
import { Menu, Container, Icon, Image,  Sidebar, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const SmoothScroll = () => (
  <div>
    <AnchorLink href='#things'>Things</AnchorLink>
    <AnchorLink href='#stuff'>Stuff</AnchorLink>

    <section id='things'>
      <h2>Things</h2>
    </section>
    <section id='stuff'>
      <h2>Stuff</h2>
    </section>
  </div>
)




//functional component and needs props passed to wrap other components
const Layout = (props) => {


    return (
      <div>

        <Menu fixed="top" borderless size="medium" className="style_navbar">
          <Menu.Item className="textLogo" header>MT</Menu.Item>
          <Menu.Item
            name='work'
            position="right"
            className="nav_item"
          >

          <AnchorLink href='#work'><Button className="nav_item_button">WORK</Button></AnchorLink></Menu.Item>
          <Menu.Item
            name='contact'

            className="nav_item"
          >

          <AnchorLink href='#contact'><Button className="nav_item_button">CONTACT</Button></AnchorLink></Menu.Item>




        </Menu>




        <Container>

          {props.children}

        </Container>






      </div>
    )




}

export default Layout;
