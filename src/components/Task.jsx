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
            <Row>
            <Col className="col-md-1">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked>
            </input>
            </Col>
            <Col>
            <Row>
              <b>This is some text within a card body.</b>
            </Row>
            <Row>
            <p>yummy</p>
            </Row>
            </Col>
            <Col>
            <span className="badge badge-danger">Danger</span>
            </Col>
            </Row>
            </Container>
            </Card.Body>
            </Row>
        </Card>
    );
}



export default Task;