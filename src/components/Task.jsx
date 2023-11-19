import { CollectionReference, Timestamp, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { useEffect, useState } from "react";
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container, Stack } from 'react-bootstrap';

import { Card } from "react-bootstrap";
import CompleteForm from "./CompleteForm";
import UncompleteForm from "./UncompleteForm";
import { revokeAccessToken } from "firebase/auth";

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

    const deadline = task.deadline.toDate();
    console.log(task.deadline.toDate().toDateString)

    return (
        <Card>
            <Card.Body>
                <Container>
                <Row className="align-items-center">
                    <Col className="col-md-1">
                        { task.completed ?  <UncompleteForm id={props.data.id} handleComplete={handleComplete} /> : <CompleteForm id={props.data.id} handleComplete={handleComplete} /> }
                    </Col>
                    <Col className="align-items-center">
                        <Row className="align-items-center">
                            <b>{ task.name }</b>
                        </Row>
                        <Row className="align-items-center">
                        <p className="mb-0">{ task.description }</p>
                        </Row>
                    </Col>
                    <Col className="col-md-2">
                        <span className="badge bg-danger">Due: {deadline.getMonth()+1}/{deadline.getDate()}</span>
                    </Col>
                </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}



export default Task;