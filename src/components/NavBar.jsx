import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    let page = "dashboard";
    let profile = "Zachary Lai";
    let loggedIn = true;
    let pageType = pageID(profile)
    
    console.log(pageType)
    return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Roommate Panic v1.0</Navbar.Brand>
        <Navbar.Toggle />
          <BarRight pageType = {pageType} profile = {profile} loggedIn = {loggedIn}/>
      </Container>
    </Navbar>
  );
}

const pageID = (pageType) => {
    if ((pageType == "dashboard") || ("homepage") || ("taskpage")) {
        return 1;
    }
}

const BarRight = (pageData) => {
    console.log(pageData.pageType);
    if (pageData.pageType == 1){
        return(
        <Navbar.Text>
           <Login profile = {pageData.profile} loggedIn = {pageData.loggedIn} />
        </Navbar.Text>
        );
    }
}

const Login = (profile) => {
    let name = profile.profile;
    let loggedIn = profile.loggedIn;
    if (loggedIn == false) {
        return (<a href="#login"> Login </a>);
    } else {
        return (<Navbar.Collapse className="justify-content-end">Signed in as: <a href="#profile"> {name} </a><a href="#logout"> Logout </a></Navbar.Collapse>);
    }
}

export default NavBar;