import React, { useEffect } from 'react';
import { Container} from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Stack } from "react-bootstrap";

import StatSummaryCard from '../components/StatSummaryCard.jsx';
import StatTopCompletion from '../components/StatTopCompletion.jsx';
import StatRoommateComp from '../components/StatRoommateComp.jsx';

const Stats = () => {
    useEffect(() => {
        document.title = 'My Stats';
    });
    return (
        <div>
            <Container className="mt-3 justify-content-center">
                <Row>
                    <Col>
                    <StatSummaryCard />
                    </Col>
                    <Col>
                        <Stack gap={3}>
                        <StatTopCompletion />
                        <StatRoommateComp />
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Stats;