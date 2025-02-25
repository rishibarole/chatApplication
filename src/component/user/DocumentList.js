import MyNav from "../app/MyNav";
import { useState } from "react";
import FileUploadModal from "../elements/FileUploadModal";
import EditModal from "../elements/EditModal";
import LocalStorageHandler from "../constant/LocalStorageHandler";

function DocumentList() {
    const [docList, setDocList] = useState(LocalStorageHandler.getStorageData("documentList"));

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [selectedId, setSelectedId] = useState(null);

    const [editShow, setEditShow] = useState(false);
    const editHandleClose = () => setEditShow(false);
    const editHandleShow = (docId) => {
        setSelectedId(docId)
        setEditShow(true);
    }

    const handleSave = (event) => {
        let filePath = document.getElementById("selectedFile").value;
        let filename = filePath.replace(/^.*[\\/]/, '')
        console.log(filename);
        let fileDesc = document.getElementById("fileDesc").value;
        let userEmail = LocalStorageHandler.getLoggedInUserData("loggedInUser") != "" ? LocalStorageHandler.getLoggedInUserData("loggedInUser").email : "";
        let userDocument = {
            id: Number(new Date()),
            fileDescription: fileDesc,
            fileName: filename,
            sharedBy: userEmail
        }

        let documentList = LocalStorageHandler.getStorageData("documentList");
        documentList.push(userDocument);
        setDocList(documentList);
        LocalStorageHandler.setUpdateStorageData("documentList", documentList);
        handleClose();
    };

    const deleteDocument = docId => e => {

        console.log(docId);

        if (window.confirm("Are you sure?")) {
            console.log(docId);

            let documentList = LocalStorageHandler.getStorageData("documentList");
            let documents = documentList ? documentList.filter(doc => doc.id != docId) : [];
            setDocList(documents);
            LocalStorageHandler.setUpdateStorageData("documentList", documents);

        }
        return;
    };
    const editHandleSave = (event) => {
        let fileDesc = document.getElementById("fileDesc") ? document.getElementById("fileDesc").value : "";

        let documentList = LocalStorageHandler.getStorageData("documentList");
        let documentvalues = documentList.map((docVal) => {
            if (docVal.id === selectedId) {
                docVal.fileDescription = fileDesc;
            }
            return docVal;
        }

        );

        setDocList(documentvalues);
        LocalStorageHandler.setUpdateStorageData("documentList", documentvalues);
        editHandleClose();


    };

    return <div align="center"> <FileUploadModal show={show} handleClose={handleClose} handleShow={handleShow} handleSave={handleSave} />
        <EditModal editShow={editShow} editHandleClose={editHandleClose} editHandleShow={editHandleShow} editHandleSave={editHandleSave} />
        <MyNav />
        <div align="center">
            <div align="left"><h4>My Uploads</h4></div>
            <div align="center">

                <table border="1" className="table table-striped table-hover">
                    <thead id="head">
                        <tr>
                            <th>Label</th>
                            <th>File Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            docList.map((doc, index) => (
                                <tr key={index}>
                                    <td>{doc.fileDescription}</td>
                                    <td>{doc.fileName}</td>
                                    <td><button className="btn btn-link" onClick={() => editHandleShow(doc.id)}>Edit</button>|<button className="btn btn-link" onClick={deleteDocument(doc.id)}>Delete</button></td>
                                </tr>
                            ))

                        }

                    </tbody>
                </table>
            </div>
            <div align="left"><h4>Shared Uploads</h4></div>
            <div align="center">

                <table border="1" className="table table-striped table-hover">
                    <thead id="head">
                        <tr>
                            <th>Label</th>
                            <th>File Name</th>
                            <th>Shared By</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            docList.map((doc, index) => (
                                <tr key={index}>
                                    <td>{doc.fileDescription}</td>
                                    <td>{doc.fileName}</td>
                                    <td>{doc.sharedBy}</td>
                                </tr>
                            ))

                        }
                        <tr><td><button className="btn btn-primary" onClick={handleShow}>Add Upload</button></td><td></td><td></td></tr>

                    </tbody>
                </table>
            </div>

        </div>

    </div>
}

export default DocumentList;