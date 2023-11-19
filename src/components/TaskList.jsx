import { Stack } from "react-bootstrap"

import Task from "./Task";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { useEffect, useState } from "react";

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
        {
            taskList.map((data) => {
                return (<Task data={data} />)
            })
        }
    </Stack>
    );
}

export default TaskList;