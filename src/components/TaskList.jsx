import { Stack } from "react-bootstrap"

import Task from "./Task";
import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../firebase-config";
import { useEffect, useState } from "react";
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const TaskList = (props) => {
    const [taskList, setTaskList] = useState([]);

    async function handleReadTask() {
        let dataArray = [];
        const q = collection(db, 'tasks');
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            data.id = doc.id;
            dataArray.push(data);
        });
        setTaskList(dataArray);
    }

    async function handleCompleteTask(id) {
        const tasksRef =  doc(db, "tasks", id);

        await updateDoc(tasksRef, {
            completed: true,
        }).then(() => {
            handleReadTask();
        })
    }

    useEffect(() => {
       handleReadTask();
       const interval = setInterval(() => {
            handleReadTask();
       }, 10000)
    }, []);

    return (
        <Stack gap={1}>
        {
            taskList.map((data) => {
                if (props.filter == "all") {
                    return (<Task data={data} handleCompleteTask={handleCompleteTask} />)
                } else {
                    if (!data.completed) {
                        return (<Task data={data} handleCompleteTask={handleCompleteTask} />)
                    }
                }
            })
        }
        </Stack>
    );
}

export default TaskList;