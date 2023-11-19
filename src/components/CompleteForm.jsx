import { Form } from "react-bootstrap";

const CompleteForm = (props) => {
    return (
        <div key={props.id}>
            <Form.Check
                type='checkbox'
                id={`default-${props.id}`}
            />  
        </div>
    );
}

export default CompleteForm;