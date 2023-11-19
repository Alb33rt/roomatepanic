import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <>
        <Container className="justify-content-center mt-4" id="home">
            <h1>Welcome!</h1>
            <p className="fs-4">Login to get started.</p>
        </Container>
        </>
    );
};
export default Home;
