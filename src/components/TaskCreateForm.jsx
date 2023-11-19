import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { auth, db } from "../firebase-config";

import {v4 as uuidv4} from 'uuid';
import { Timestamp, doc, setDoc } from "firebase/firestore";

const TaskCreateForm = (props) => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Task Name</Form.Label>
                <Form.Control type="text" placeholder="Get groceries..." onChange={props.onNameChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Task Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Shopping List: Milk, Eggs, Toast..." onChange={props.onDescChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlDeadline">
                <Form.Label>Task Deadline</Form.Label>
                <Form.Control as="date" >
                <input type="date" onChange={props.onDateChange}/>
                </Form.Control>
            </Form.Group>
        </Form>
    )
}

export default TaskCreateForm;