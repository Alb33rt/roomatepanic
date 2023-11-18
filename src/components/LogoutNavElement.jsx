import { Button, Navbar } from 'react-bootstrap';

const LogoutNavElement = (props) => {
    return (
        <Navbar.Text>
            <Button onClick={props.handleLogout} variant="dark">Logout as { props.displayName }</Button>
        </Navbar.Text>
    )
}

export default LogoutNavElement;