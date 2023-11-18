import { Button, Navbar } from 'react-bootstrap';

const LogoutNavElement = (props) => {
    return (
        <Navbar.Text>
            <Button onClick={props.handleLogout} variant="danger">Logout</Button>
        </Navbar.Text>
    )
}

export default LogoutNavElement;