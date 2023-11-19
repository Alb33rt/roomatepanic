import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TaskCreateForm from './TaskCreateForm';

import { auth, db } from "../firebase-config";

import {v4 as uuidv4} from 'uuid';
import { Timestamp, doc, setDoc } from "firebase/firestore";

function TaskFormModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    submitForm(e);
    setShow(false);
  }

  const [formValue, setFormValue] = useState({
      name: '',
      description: '',
      deadline: new Timestamp()
  })

  const submitForm = async(e) => {

      const { uid } = auth.currentUser;

      let taskUUID = uuidv4();


      await setDoc(doc(db, "tasks", taskUUID), {
          name: formValue.name,
          description: formValue.description,
          owner: uid,
          group: '',
          repetition: '', 
          deadline: formValue.deadline
      }).then(
          
      );          
  }

  useEffect(() => {}

  , [formValue])

  const onNameChange = (e) => {
      setFormValue({
          name: e.target.value,
          description: formValue.description,
          deadline: formValue.deadline
      })
  }

const onDescChange = (e) => {
    setFormValue({
        name: formValue.name,
        description: e.target.value,
        deadline: formValue.deadline
    })
}

const onDateChange = (e) => {   
    let ms = Date.parse(e.target.value) / 1000;
    setFormValue({
        name: formValue.name,
        description: formValue.description,
        deadline: new Timestamp(ms, 0)
    })
}

  return (
    <div className="w-10">
      <Button variant="primary" onClick={handleShow}>
        Add Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <TaskCreateForm 
            onNameChange={onNameChange}
            onDescChange={onDescChange}
            onDateChange={onDateChange}
          />
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Create Task
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TaskFormModal;