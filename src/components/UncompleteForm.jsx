import { useState } from "react";
import { Form } from "react-bootstrap";

const UncompleteForm = (props) => {
    return (
        <div key={props.id}>
            <Form.Check
                onChange={props.handleUncomplete}
                type='checkbox'
                id={`default-${props.id}`}
                defaultChecked
            />  
        </div>
    );
}

export default UncompleteForm;