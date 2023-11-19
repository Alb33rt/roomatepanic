import { Button, Navbar } from 'react-bootstrap';

const LogoutNavElement = (props) => {
    return (
        <Navbar.Text>
            <Button style={{color: "white"}} href="/" onClick={props.handleLogout} variant="dark"><b>Log out as {props.displayName}</b></Button>
        </Navbar.Text>
    )
}

export default LogoutNavElement;