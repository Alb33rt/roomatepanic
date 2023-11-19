import { Card, Stack } from "react-bootstrap";

const StatRoommateComp = () =>{
return (
<Card className="border-0 shadow">
    <Card.Body>
        <Stack gap={2}>
            <div>
                <Card.Title className="h3">Roommate Comparison</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">The roommate with the highest rate of completion is: <b>Mao ZeXi</b></Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Completion Rate: <b>97.8%</b></Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Your place among your roomates: <b>4st Place</b></Card.Subtitle>
            </div>
        </Stack>
    </Card.Body>
</Card>
);
}

export default StatRoommateComp;