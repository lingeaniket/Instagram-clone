import React, { useCallback, useRef, useState, memo } from "react";

import Modal from "../../Modal/Modal";
import PostFolder from "./PostFolder/PostFolder";

import "./newPost.css";
import "../Fullpost/fullPost.css";

const NewPost = ({ setOpen }) => {
    const handleModalClose = (e) => {
        if (step !== 5) {
            if (!modalref.current.contains(e.target)) {
                handleClose();
            }
        }
    };

    const handleClose = () => {
        setOpen();
    };

    const steps = ["Create new post", "Select a photo", "Review", "Create a new post", "Post sharing", "Post shared"];

    const [step, setStep] = useState(1);

    const modalref = useRef();

    const handleStep = useCallback((step) => {
        setStep(step);
    }, []);

    return (
        <Modal handleModalClose={handleModalClose}>
            <div ref={modalref} className="new_post001">
                <div className="new_post002">
                    <div className="new_post003">
                        <div className="new_post004">
                            <div className="new_post005">
                                <div
                                    style={{
                                        maxHeight: `898px`,
                                        minHeight: `391px`,
                                        maxWidth: `${step !== 4 ? "855px" : "1195px"}`, //1195
                                        minWidth: `${step !== 4 ? "348px" : "688px"}`, //688
                                        width: `${step !== 4 ? (step === 5 || step === 6 ? "448px" : "535px") : "875px"}`, //875
                                    }}
                                >
                                    <PostFolder step={step} handleStep={handleStep} steps={steps} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default memo(NewPost);
