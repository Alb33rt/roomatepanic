import { Stack } from "react-bootstrap"

import Task from "./Task";

const TaskList = () => {
    return (
    <Stack gap={1}>
        <Task />
        <Task />
        <Task />
        <a href="/Tasks" className="btn btn-primary">Edit Tasks</a>
    </Stack>
    );
}

export default TaskList;