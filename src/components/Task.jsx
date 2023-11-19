import { CollectionReference, Timestamp, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { useEffect, useState } from "react";

import { Card } from "react-bootstrap";

const Task = (props) => {
    const [task, setTask] = useState({
        name: '',
        description: '',
        completed: false,
        deadline: new Timestamp(),
        repetition: ''
    });

    useEffect(() => {
        setTask({
            name: props.data.name,
            description: props.data.description,
            completed: props.data.completed,
            deadline: props.data.deadline,
            repetition: props.data.repetition
        })
    }, [])

    return (
        <Card>
            <Card.Body>{ task.name }</Card.Body>
        </Card>
    );
}

export default Task;