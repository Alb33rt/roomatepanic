import { Form } from "react-bootstrap";

const UncompleteForm = (props) => {

    return (
        <div key={props.id}>
            <Form.Check
                checked
                onClick={props.handleComplete}
                type='checkbox'
                id={`default-${props.id}`}
            />  
        </div>
    );
}

export default UncompleteForm;