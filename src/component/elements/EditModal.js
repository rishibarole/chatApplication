import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { useState } from "react";

const EditModal=(props)=>{
    const{showEdit, editHandleClose,editHandleSave,editHandleShow} = props;

    //const [show, setShow] = useState(props.showModal);
    //const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);

return<>

<Modal show={showEdit} onHide={editHandleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Upload</Modal.Title>
            </Modal.Header>
            <Modal.Body>                
                    <Form.Group as={Row} className="mb-3" controlId="formFileDescription">
                        <Form.Label column sm={4}>
                            File Description
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Control type="fileDesc" id="fileDesc" name="fileDesc" placeholder="Description" />
                        </Col>
                    </Form.Group>
             </Modal.Body>
            <Modal.Footer align="left">
                
                <Button variant="primary" onClick={editHandleSave}>
                    Upload File
                </Button>
                <Button variant="secondary" onClick={editHandleClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>


</>



}
export default EditModal;