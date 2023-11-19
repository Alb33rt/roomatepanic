import { CollectionReference, Timestamp, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { useEffect, useState } from "react";

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
            <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
    );
}

export default Task;