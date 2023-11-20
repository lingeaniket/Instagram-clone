import React from "react";
import Close from "../Icons/Close/Close";

const Modal = ({ children, handleModalClose }) => {
    const handleClose = (e) => {
        handleModalClose(e);
    };
    return (
        <div className="fullPost001">
            <div className="fullPost002">
                <div className="fullPost003" onClick={handleClose}>
                    <div className="fullPost004"></div>
                    <div className="fullPost005">
                        <div className="fullPost006 fullPost016">
                            <Close color="white" size="18" title="close" />
                        </div>
                    </div>
                    <div className="fullPost007">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
