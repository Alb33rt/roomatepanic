import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import TaskList from '../components/DBoardTaskList';
import StatsBox from '../components/StatsBox';

const Dashboard = () => {
    useEffect(() => {
        document.title = 'My Books';
    });
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <TaskList />
                    </Col>
                    <Col>
                        <StatsBox />
                        <Roommates />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;