import { Button, Navbar } from 'react-bootstrap';

const LogoutNavElement = (props) => {
    return (
        <Navbar.Text>
            Signed in as <a href="#"> { props.displayName } </a>
            <Button onClick={props.handleLogout} variant="danger">Logout</Button>
        </Navbar.Text>
    )
}

export default LogoutNavElement;