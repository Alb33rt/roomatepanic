import { Card, Stack } from "react-bootstrap";
import TaskList from "./TaskList";

const StatCard = () => {
    return (
        <Card className="border-0 shadow">
        <Card.Body>
            <Stack gap={2}>
                <div>
                    <Card.Title>Your Stats</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">See how well you did:</Card.Subtitle>
                </div>
                <a href="/Stats" className="btn btn-primary" style={{width: 150}}>View More Stats</a>
            </Stack>
        </Card.Body>
        </Card>
    )
}

export default StatCard;