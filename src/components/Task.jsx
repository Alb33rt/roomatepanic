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
        id: '',
        name: '',
        description: '',
        completed: false,
        deadline: new Timestamp(),
        repetition: ''
    });

    const handleComplete = () => {
        const handleCompleteTask = props.handleCompleteTask;
        handleCompleteTask(task.id);
        setTask({
            ...task,
            completed: !task.completed,
        });
    }

    useEffect(() => {
        setTask({
            id: props.data.id,
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
                <Container>
                    <Row>
                        <Col className="col-md-1">
                            <CompleteForm id={props.data.id} handleComplete={handleComplete} />
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
            </Card.Body>
        </Card>
    );
}



export default Task;