import { CollectionReference, Timestamp, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { useEffect, useState } from "react";
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container, Stack } from 'react-bootstrap';

import { Card } from "react-bootstrap";

const Task = () => {
    const [task, setTask] = useState({
        name: '',
        description: '',
        completed: false,
        deadline: new Timestamp(),
        repetition: ''
    });

    async function handleReadTask() {
        const querySnapshot = await getDocs(collection(db, 'tasks'));
        querySnapshot.forEach((doc) => {
            console.log(doc);
        });
    }

    useEffect(() => {
       handleReadTask();
    }, []);

    return (
        <Card>
            <Row>
            <Card.Body>
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
            </Card.Body>
            </Row>
        </Card>
    );
}



export default Task;