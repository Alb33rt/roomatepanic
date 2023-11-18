import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import LoginNavElement from './LoginNavElement';
import LogoutNavElement from './LogoutNavElement';

const NavBar = (props) => {
    const loggedIn = props.userProfile.loggedIn;
    
    //console.log(pageType)
    return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Roommate Panic</Navbar.Brand>
        { loggedIn ? <PageLinks /> : <div />}
        <NavBarRight loggedIn={loggedIn} handleLogin={props.handleLogin} handleLogout={props.handleLogout} />
      </Container>
    </Navbar>
  );
}

const NavBarRight = (props) => {
    const loggedIn = props.loggedIn;
    const handleLogin = props.handleLogin;
    const handleLogout = props.handleLogout;

    return (loggedIn ? <LogoutNavElement handleLogout={handleLogout}/> : <LoginNavElement handleLogin={handleLogin} />);
}

const PageLinks = () => {
    return (
        <Nav className="me-auto">
          <Nav.Link href="#dashboard">Dashboard</Nav.Link>
          <Nav.Link href="#tasks">Tasks</Nav.Link>
        </Nav>
    )
}

export default NavBar;