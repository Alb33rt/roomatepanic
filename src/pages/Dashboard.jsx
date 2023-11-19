import React, { useEffect } from 'react';
import { Container, Stack } from 'react-bootstrap';
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
            <Container className="mt-3 justify-content-center">
                <Row>
                    <Col>
                        <TaskCard />
                    </Col>
                    <Col>
                        <Stack gap={3}>
                            <StatsBox />
                            <Roommates />
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;