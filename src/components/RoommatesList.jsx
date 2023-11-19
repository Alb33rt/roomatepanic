import { Stack } from "react-bootstrap"

import Roommate from "./Roommate";

const RoommatesList = () => {
    return (
    <Stack gap={1}>
        <Roommate/>
        <Roommate />
        <Roommate />
        <a href="/manageroommates" className="btn btn-primary" style={{width: 200}}>Manage Roommates</a>
    </Stack>
    );
}

export default RoommatesList;