import { Button, Navbar } from 'react-bootstrap';

const LogoutNavElement = (props) => {
    return (
        <Navbar.Text>
            <Button onClick={props.handleLogout} variant="dark"><b>Logout as { props.displayName }</b></Button>
        </Navbar.Text>
    )
}

export default LogoutNavElement;