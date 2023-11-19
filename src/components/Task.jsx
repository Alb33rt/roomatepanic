import { CollectionReference, Timestamp, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { useEffect, useState } from "react";
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container, Stack } from 'react-bootstrap';

import { Card } from "react-bootstrap";
import CompleteForm from "./CompleteForm";

const Task = (props) => {
    const [task, setTask] = useState({
        name: '',
        description: '',
        completed: false,
        deadline: new Timestamp(),
        repetition: ''
    });

    const handleComplete = () => {
        setTask({
            ...task,
            completed: !task.completed,
        });
    }

    useEffect(() => {
        setTask({
            name: props.data.name,
            description: props.data.description,
            completed: props.data.completed,
            deadline: props.data.deadline,
            repetition: props.data.repetition
        });
    }, [])

    return (
        <Card>
            <Card.Body>
<<<<<<< HEAD
                <Container>
                    <Row>
                        <Col className="col-md-1">
                            <CompleteForm />
                        </Col>
                        <Col>
                            <Row>
                                <b>{ task.name }.</b>
                            </Row>
                            <Row>
                                <p>{ task.description }</p>
                            </Row>
                        </Col>
                        <Col>
                            <span className="badge badge-danger">Danger</span>
                        </Col>
                    </Row>
                </Container>
=======
            <Container>
            <Row className="align-items-center">
            <Col className="col-md-1">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked>
            </input>
            </Col>
            <Col className="align-items-center">
            <Row className="align-items-center">
              <b>This is some text within a card body.</b>
            </Row>
            <Row className="align-items-center">
            <p className="mb-0">yummy</p>
            </Row>
            </Col>
            <Col className="col-md-2">
            <span className="badge bg-danger">100</span>
            </Col>
            </Row>
            </Container>
>>>>>>> aab0d519d67ed4cbcabc51bfbd2e3c13330bc8be
            </Card.Body>
        </Card>
    );
}



export default Task;