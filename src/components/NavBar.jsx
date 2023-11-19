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
        <Navbar.Brand href="/">Roommate Panic</Navbar.Brand>
        { loggedIn ? <PageLinks /> : <div />}
        <NavBarRight userProfile={props.userProfile} handleLogin={props.handleLogin} handleLogout={props.handleLogout} />
      </Container>
    </Navbar>
  );
}

const NavBarRight = (props) => {
    const loggedIn = props.userProfile.loggedIn;
    const displayName = props.userProfile.username;
    const handleLogin = props.handleLogin;
    const handleLogout = props.handleLogout;

    return (loggedIn ? <LogoutNavElement handleLogout={handleLogout} displayName={displayName} /> : <LoginNavElement handleLogin={handleLogin} />);
}

const PageLinks = () => {
    return (
        <Nav className="me-auto">
          <Nav.Link href="/Dashboard"><b>Dashboard</b></Nav.Link>
          <Nav.Link href="/Tasks" ><b>Tasks</b></Nav.Link>
        </Nav>
    )
}

export default NavBar;