import { Card } from "react-bootstrap";
import RoommatesList from "./RoommatesList";

const RoommatesCard = () => {
    return (
        <Card>
        <Card.Body>
            <Card.Title>Your Roommates</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Progress</Card.Subtitle>
            <RoommatesList />
        </Card.Body>
        </Card>
    )
}

export default RoommatesCard;