<<<<<<< HEAD
import React from 'react';

const Roommates = () => {
    return(<div className="card w-100">
    <div className="card-body">
    <h1>Your Roommates</h1>
        <div className="form-check">
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Default checkbox
                </label>
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            </input>
       </div>
        <div className="form-check">
        <   label className="form-check-label" htmlFor="flexCheckChecked">
                Checked checkbox
            </label>
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked>
            </input>
        </div>
        <a href="/ManageRoommates" className="btn btn-primary">Manage Roommates</a>
    </div>
    </div>
=======
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
              <b>Roommate</b>
            </Row>
            <Row className="align-items-center">
            <p className="mb-0">Task Progress</p>
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
>>>>>>> 38e20c567ea70644a9ec14eff460f1b3e09f369b
    );
}



export default Task;