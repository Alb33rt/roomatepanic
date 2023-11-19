import { Stack } from "react-bootstrap"

import Task from "./Task";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { useEffect, useState } from "react";

const TaskList = () => {
    const [taskList, setTaskList] = useState([]);

    async function handleReadTask() {
        let dataArray = [];
        const querySnapshot = await getDocs(collection(db, 'tasks'));
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
                if (!data.completed) {
                    return (<Task data={data} handleCompleteTask={handleCompleteTask} />)
                }
            })
        }
        </Stack>
    );
}

export default TaskList;