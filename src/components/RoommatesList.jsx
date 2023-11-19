import { Stack } from "react-bootstrap"

import Roommate from "./Roommate";

const RoommatesList = () => {
    return (
    <Stack gap={1}>
        <Roommate/>
        <Roommate />
        <Roommate />
        <a href="/Stats" className="btn btn-primary">View Roommates</a>
    </Stack>
    );
}

export default RoommatesList;