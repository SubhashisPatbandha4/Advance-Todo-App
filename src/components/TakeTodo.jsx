import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const TakeTodo = ({ addTodo }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [time, setTime] = useState();
    const [work, setWork] = useState();

    const handleSubmit = () => {
        handleClose();
        addTodo(time, work);
        setTime("")
        setWork("")

    }

    return (
        <>
            <Button variant='dark' className=' mb-3 ' onClick={handleShow}>
                Add Todo
            </Button>

            <Modal show={show} onHide={handleClose}  >
                <Modal.Header closeButton className='modalForm'>
                    <Modal.Title >Enter your todos here ! </Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalForm'>
                    <Form >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Time</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Study for 4 hours . "
                                autoFocus
                                name="time"
                                value={time}
                                onChange={e => setTime(e.target.value)}

                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Work</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                name="work"
                                value={work}
                                onChange={(e) => setWork(e.target.value)}

                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='modalForm' >
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default TakeTodo;