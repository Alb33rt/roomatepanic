import React, { useEffect } from 'react';
import { Container } from 'reactstrap';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';
import Chart from '../components/Chart';
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
            <div class="card w-100">
                <div class="card-body">
                <h1>Your Stats</h1>
                    <Chart />
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
                    <a href="#" class="btn btn-primary">View Full Stats</a>
                </div>
            </div>
            <div class="card w-100">
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
                </Col>
                </Row>
                </Container>
            </div>
    );
};
export default Dashboard;