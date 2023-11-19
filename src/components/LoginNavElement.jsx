import { Button, Navbar } from 'react-bootstrap';

const LoginNavElement = (props) => {
    return (
        <Navbar.Text>
            <Button onClick={props.handleLogin} variant="dark"><b>Login with Google</b></Button>
        </Navbar.Text>
    )
}

export default LoginNavElement;