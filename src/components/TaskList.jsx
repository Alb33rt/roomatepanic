import { Stack } from "react-bootstrap"

import Task from "./Task";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { useEffect, useState } from "react";
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const TaskList = () => {
    const [taskList, setTaskList] = useState([]);

    async function handleReadTask() {
        let dataArray = [];
        const querySnapshot = await getDocs(collection(db, 'tasks'));
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            dataArray.push(doc.data());
        });
        setTaskList(dataArray);
    }

    useEffect(() => {
       handleReadTask();
    }, []);

    return (
    <Stack gap={1}>
        <Task />
        <Task />
        <Task />
        <a href="/Tasks" className="btn btn-primary" style={{width: 100}}>Edit Tasks</a>
    </Stack>
    );
}

export default TaskList;