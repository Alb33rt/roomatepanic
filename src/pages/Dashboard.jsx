import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import TaskList from '../components/DBoardTaskList';
import StatsBox from '../components/StatsBox';
import Roommates from '../components/Roommate';
import TaskCard from '../components/TaskCard';

const Dashboard = () => {
    useEffect(() => {
        document.title = 'My Books';
    });
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <TaskCard />
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