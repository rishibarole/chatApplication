import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { useState } from "react";

const FileUploadModal=(props)=>{
    const{show, handleClose,handleSave,handleShow} = props;

    //const [show, setShow] = useState(props.showModal);
    //const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);

return<>

<Modal show={show} onHide={handleClose}>
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
                    <Form.Group as={Row} className="mb-3" controlId="formFileUpload">
                        <Form.Label column sm={4}>
                            File Upload
                        </Form.Label>
                        <Col sm={6}>
                        <Form.Control type="file" name="selectedFile" id="selectedFile" size="sm" />
                        </Col>                        
                    </Form.Group>

                    
                
            </Modal.Body>
            <Modal.Footer align="left">
                
                <Button variant="primary" onClick={handleSave}>
                    Upload File
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>


</>



}
export default FileUploadModal;