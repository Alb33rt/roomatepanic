import React, { useEffect } from 'react';
import TaskList from '../components/TaskList';
import { Container, Row } from 'react-bootstrap';
const Tasks = () => {
    useEffect(() => {
        document.title = 'My Favorites';
    });
    return (
        <div>
        <Container className="mt-3 justify-content-center">
            <Row>
                <TaskList filter="all" />
            </Row>
        </Container>
        </div>
    );
};
export default Tasks;