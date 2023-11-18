import { Button, Navbar } from 'react-bootstrap';

const LoginNavElement = (props) => {
    return (
        <Navbar.Text>
            <Button onClick={props.handleLogin} variant="dark">Login with Google</Button>
        </Navbar.Text>
    )
}

export default LoginNavElement;