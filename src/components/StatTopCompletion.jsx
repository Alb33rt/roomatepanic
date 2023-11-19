import { Card, Stack } from "react-bootstrap";

const StatTopCompletion = () =>{
return (
<Card className="border-0 shadow">
    <Card.Body>
        <Stack gap={2}>
            <div>
                <Card.Title className="h3">Top Tasks</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Most completed task: <b>Waking up Zachary</b></Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Completion Rate: <b>50%</b></Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Lease completed task: <b>Sleeping</b></Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Completion Rate: <b>2%</b></Card.Subtitle>
            </div>
        </Stack>
    </Card.Body>
</Card>
);
}

export default StatTopCompletion;