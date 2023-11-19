import { Stack } from "react-bootstrap"

import Task from "./Task";

const TaskList = () => {
    return (
    <Stack gap={1}>
        <Task />
        <Task />
        <Task />
    </Stack>
    );
}

export default TaskList;