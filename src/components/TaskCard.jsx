import { Card } from "react-bootstrap";
import TaskList from "./TaskList";

const TaskCard = () => {
    return (
        <Card>
        <Card.Body>
            <Card.Title>Tasks</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Your daily tasks</Card.Subtitle>
            <TaskList />
        </Card.Body>
        </Card>
    )
}

export default TaskCard;