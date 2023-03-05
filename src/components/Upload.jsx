import React, { useRef, useState } from "react";
import SelectBox from "./partials/SelectBox";

// Select Box Options List
const options = [
    { value: "Progress note - 80 left", label: "Progress note - 80 left" },
    { value: "Soap note - 80 left", label: "Soap note - 80 left" },
    { value: "EMDR note- 80 left", label: "EMDR note- 80 left" },
    { value: "Couples therapy note - 80 left", label: "Couples therapy note - 80 left" },
    { value: "Family therapy note - 80 left", label: "Family therapy note - 80 left" },
];

const Upload = ({onUpload}) => {

    const modalRef = useRef(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedValue, setSelectedValue] = useState();
    const [clientName, setClientName] = useState("");

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleUploadModel = () => {
        setShowModal(true);
    };

    const handleSelectChange = (val) => {
        setSelectedValue(val);
    };

    const handleClientName = (evt) => {
        setClientName(evt.target.value);
    }

    const handleFinishUpload = () => {
        onUpload({name: clientName, type: selectedValue});
        setShowModal(false);
        setClientName("");
        setSelectedValue("");
    }


    return (
        <>
            {/* Upload Button to open Model*/}
            <button className='upload-btn' onClick={handleUploadModel}>Upload</button>
            {/* Model */}
            <div className={`modal ${showModal ? "show" : ""}`}>
                <div className="modal-content" ref={modalRef}>
                    <img className='form-close' onClick={handleCloseModal} src="/images/close.svg" alt="close"/>
                    <h1 className='upload-form-heading'>Complete Your Upload</h1>
                    <p className='upload-form-para'>Fill in the details below to complete your upload</p>
                    {/* Custom Select Box */}
                    <SelectBox
                        options={options}
                        selectedValue={selectedValue}
                        onChange={handleSelectChange}
                    />
                    {/* Client Name Input */}
                    <input type="text" placeholder="Enter client name" className="input-name" value={clientName} onChange={handleClientName} />
                    {/* Finish Upload button */}
                    <button className="finish-upload-btn" onClick={handleFinishUpload}>Finish Upload</button>
                </div>
            </div>
        </>
    );
};

export default Upload;
