import { Card, Stack } from "react-bootstrap";
import TaskList from "./TaskList";
import TaskFormModal from "./TaskFormModal";

const TaskCard = () => {
    return (
        <Card className="border-0 shadow">
        <Card.Body>
            <Stack gap={2}>
                <div>
                    <Card.Title className="h3">Tasks</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Your daily tasks</Card.Subtitle>
                </div>
                <TaskList />
                <TaskFormModal />
            </Stack>
        </Card.Body>
        </Card>
    )
}

export default TaskCard;