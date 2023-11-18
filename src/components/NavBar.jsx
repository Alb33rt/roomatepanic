import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    let page = "useraut";
    let profile = "Zachary Lai";
    let loggedIn = false;
    let pageType = pageID(page)
    
    //console.log(pageType)
    return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Roommate Panic v1.0</Navbar.Brand>
        <Navbar.Toggle />
          <DisplayPages loggedIn = {loggedIn} />
          <BarRight pageType = {pageType} profile = {profile} loggedIn = {loggedIn}/>
      </Container>
    </Navbar>
  );
}

const pageID = (pageType) => {
    //console.log(pageType);
    if (pageType == "userauth"){
        return 2;
    }
    else {
        return 1;
    }
}

const BarRight = (pageData) => {
    //console.log(pageData.pageType);
    if (pageData.pageType == 1){
        return(
           <Login profile = {pageData.profile} loggedIn = {pageData.loggedIn} />
        );
    }
    else if (pageData.pageType == 2){
        return(
            <Navbar.Text>
           <a href="#login">Login</a>
          </Navbar.Text>
        )
    }
}

const Login = (profile) => {
    let name = profile.profile;
    let loggedIn = profile.loggedIn;
    if (loggedIn == false){
        return(<BarRight pageType = {2} />);
    }
    else{
        return(<Navbar.Text><Navbar.Collapse className="justify-content-end">Signed in as: <a href="#profile">{name}</a><a href="#logout">Logout</a></Navbar.Collapse></Navbar.Text>);
    }
}

const DisplayPages = (loggedIn) => {
    if (loggedIn.loggedIn == true){
        return(<Navbar.Text><a href="#dashboard">Dashboard</a>  <a href="#tasks">Tasks</a>   <a href="#groups">Group</a>  <a href="#dataanal">Stats</a></Navbar.Text>)
    }
}

export default NavBar;