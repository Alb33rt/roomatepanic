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

const Roommates = () => {
    return(<div class="card w-100">
    <div class="card-body">
    <h1>Your Roommates</h1>
        <div class="form-check">
                <label class="form-check-label" for="flexCheckDefault">
                    Default checkbox
                </label>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            </input>
       </div>
        <div class="form-check">
        <   label class="form-check-label" for="flexCheckChecked">
                Checked checkbox
            </label>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked>
            </input>
        </div>
        <a href="#" class="btn btn-primary">Manage Roommates</a>
    </div>
    </div>
    );
}

export default Dashboard;