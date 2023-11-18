import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    let page = "useraut";
    let profile = "Zachary Lai";
    let loggedIn = true;
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

const BarRight = (props) => {
    //console.log(pageData.pageType);
    if (props.pageType == 1){
        return(
           <Login profile = {props.profile} loggedIn = {props.loggedIn} />
        );
    }
    else if (props.pageType == 2){
        return(
            <Navbar.Text>
           <a href="#login">Login</a>
          </Navbar.Text>
        )
    }
}

const Login = (props) => {
    let name = props.profile;
    let loggedIn = props.loggedIn;
    if (loggedIn == false){
        return(<BarRight pageType = {2} />);
    }
    else{
        return(<Navbar.Text><Navbar.Collapse className="justify-content-end">Signed in as: <a href="#profile">{name}</a><button type="button" class="btn btn-dark" href="#logout">Logout</button></Navbar.Collapse></Navbar.Text>);
    }
}

const DisplayPages = (props) => {
    if (props.loggedIn == true){
        return(<div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#dashboard">Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#tasks">Tasks</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#group">Group</a>
            </li>
        <li class="nav-item">
            <a class="nav-link" href="#dataanal">Stats</a>
          </li>
        </ul>
      </div>)
    }
}

export default NavBar;