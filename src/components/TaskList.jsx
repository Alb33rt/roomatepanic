import { Stack } from "react-bootstrap"

import Task from "./Task";
import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { useEffect, useState } from "react";
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { wait } from "@testing-library/user-event/dist/utils";

const TaskList = (props) => {
    const [taskList, setTaskList] = useState([]);

    async function handleReadTask() {
        let dataArray = [];
        let uid = '';
        if (auth.currentUser) {
            uid = auth.currentUser.uid;
        }

        const q = query(collection(db, 'tasks'), where("owner", "==", uid) );
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

    async function handleUncompleteTask(id) {
        const tasksRef =  doc(db, "tasks", id);

        await updateDoc(tasksRef, {
            completed: false,
        }).then(() => {
            handleReadTask();
        })
    }

    useEffect(() => {
        const sleep = ms => new Promise(r => setTimeout(r, ms));
        sleep(500).then(() => handleReadTask());
        setInterval(() => {
                handleReadTask();
        }, 10000)
        return (() => clearInterval())
    }, []);

    return (
        <Stack gap={1}>
        {
            taskList.map((data) => {
                if (props.filter == "all") {
                    return (<Task key={data.id} data={data} handleCompleteTask={handleCompleteTask} handleUncompleteTask={handleUncompleteTask} />)
                } else if (props.filter == "completed") {
                    if (data.completed) {
                        return (<Task key={data.id} data={data} handleUncompleteTask={handleUncompleteTask} />);
                    }
                } else {
                    if (!data.completed) {
                        return (<Task key={data.id} data={data} handleCompleteTask={handleCompleteTask} />)
                    }
                }   
            })
        }
        </Stack>
    );
}

export default TaskList;