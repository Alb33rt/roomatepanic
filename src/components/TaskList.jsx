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
<<<<<<< HEAD
        {
            taskList.map((data) => {
                return (<Task data={data} />)
            })
        }
=======
        <Task />
        <Task />
        <Task />
        <a href="/Tasks" className="btn btn-primary">Edit Tasks</a>
>>>>>>> 38e20c567ea70644a9ec14eff460f1b3e09f369b
    </Stack>
    );
}

export default TaskList;