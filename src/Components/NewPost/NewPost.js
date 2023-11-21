import React, { useCallback, useState } from "react";
import Modal from "../Modal/Modal";

import "./newPost.css";
import ImageComponent from "./ImageComponent/ImageComponent";
import ViewComponent from "./ViewImageComponent/ViewComponent";
import BackArrow from "../Icons/BackArrow/BackArrow";
import Posting from "./Posting/Posting";
import { useDispatch } from "react-redux";
import { sharePost } from "../../Features/newPostDetailsSlice";
import PostSuccess from "./PostSuccess/PostSuccess";
import PostSuccess2 from "./PostSuccess/PostSuccess2";
import LandPage from "./LandPage/LandPage";

const NewPost = () => {
    const handleModalClose = () => {};

    const steps = ["Create new post", "Select a photo", "Review", "Create a new post", "Post sharing", "Post shared"];

    const [step, setStep] = useState(1);

    const dispatch = useDispatch();

    const handlePosting = () => {
        dispatch(sharePost());
        setTimeout(() => {
            setStep(6);
        }, 3000);
    };

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
                                        width: `${step !== 4 ? (step === 5 || step === 6 ? "448px" : "535px") : "875px"}`, //875
                                    }}
                                >
                                    <div className="new_post007">
                                        <div className="w_100">
                                            <div className="new_post008">
                                                {![1, 2, 5, 6].includes(step) && (
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
                                                {![1, 2, 5, 6].includes(step) && (
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
                                                            if (step === 4) {
                                                                handlePosting();
                                                            }
                                                            handleStep(step + 1);
                                                        }}
                                                    >
                                                        {step === 4 ? "Share" : "Next"}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        {step === 4 ? (
                                            <Posting />
                                        ) : step !== 5 && step !== 6 ? (
                                            <div className="new_post010">
                                                {step === 1 && <LandPage handleStep={handleStep} />}
                                                {step === 2 && <ImageComponent handleStep={handleStep} />}
                                                {step === 3 && <ViewComponent />}
                                            </div>
                                        ) : (
                                            <div
                                                className="new_post010"
                                                style={{
                                                    width: "448px",
                                                }}
                                            >
                                                {step === 5 && <PostSuccess />}
                                                {step === 6 && <PostSuccess2 />}
                                            </div>
                                        )}
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
