import { Card, Stack } from "react-bootstrap";

const StatSummaryCard = () =>{
return (
<Card className="border-0 shadow">
<Card.Body>
<Stack gap={2}>
    <div>
        <Card.Title className="h3">Tasks Completed</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Tasks completed this week: <b>8/12</b></Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Tasks completed last week: <b>5/12</b></Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Average percent of tasks completed in the last month: <b>80%</b></Card.Subtitle>
    </div>
</Stack>
</Card.Body>
</Card>
);
}

export default StatSummaryCard;