import { Card, Stack } from "react-bootstrap";
import TaskList from "./TaskList";

const TaskCard = () => {
    return (
        <Card>
        <Card.Body>
            <Stack gap={2}>
                <div>
                    <Card.Title>Tasks</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Your daily tasks</Card.Subtitle>
                </div>
                <TaskList />
                <a href="/Tasks" className="btn btn-primary" style={{width: 100}}>Edit Tasks</a>
            </Stack>
        </Card.Body>
        </Card>
    )
}

export default TaskCard;