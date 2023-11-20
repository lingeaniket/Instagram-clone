import React, { useCallback, useState } from "react";
import Modal from "../Modal/Modal";

import "./newPost.css";
import MediaIcon from "../Icons/MediaIcon/MediaIcon";
import ImageComponent from "./ImageComponent/ImageComponent";
import ViewComponent from "./ViewImageComponent/ViewComponent";
import Back from "../Icons/Back/Back";
import BackArrow from "../Icons/BackArrow/BackArrow";
import Posting from "./Posting/Posting";

const NewPost = () => {
    const handleModalClose = () => {};

    const steps = ["Create new post", "Select a photo", "Review", "Create a new post"];

    const [step, setStep] = useState(1);

    const handleStep = useCallback((step) => {
        setStep(step);
    }, []);

    return (
        <Modal handleModalClose={handleModalClose}>
            <div className="new_post001">
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
                                        width: `${step !== 4 ? "535px" : "875px"}`, //875
                                    }}
                                >
                                    <div className="new_post007">
                                        <div className="w_100">
                                            <div className="new_post008">
                                                {step !== 1 && step !== 2 && (
                                                    <div
                                                        style={{
                                                            cursor: "pointer",
                                                            flexGrow: 1,
                                                        }}
                                                        onClick={() => {
                                                            handleStep(step - 1);
                                                        }}
                                                    >
                                                        <BackArrow />
                                                    </div>
                                                )}
                                                <h1 className="new_post009">
                                                    <div>{steps[step - 1]}</div>
                                                </h1>
                                                {step !== 1 && step !== 2 && (
                                                    <div
                                                        style={{
                                                            fontWeight: 600,
                                                            fontSize: "16px",
                                                            color: "rgb(0,149,246)",
                                                            cursor: "pointer",
                                                            flexGrow: 1,
                                                            textAlign: "end",
                                                        }}
                                                        onClick={() => {
                                                            handleStep(step + 1);
                                                        }}
                                                    >
                                                        Next
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        {step === 4 && <Posting />}
                                        {/* <div className="new_post010">
                                            {step === 1 && (
                                                <div className="new_post011">
                                                    <div className="new_post012">
                                                        <MediaIcon />
                                                        <div className="new_post013">Drag photos and videos here</div>
                                                        <div className="new_post014">
                                                            <div className="new_post015">
                                                                <button
                                                                    className="new_post016"
                                                                    onClick={() => {
                                                                        handleStep(2);
                                                                    }}
                                                                >
                                                                    Select from data
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {step === 2 && <ImageComponent handleStep={handleStep} />}
                                            {step === 3 && <ViewComponent />}
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default NewPost;
