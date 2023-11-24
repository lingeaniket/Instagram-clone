import React from "react";
import BackArrow from "../../../Icons/BackArrow/BackArrow";
import Posting from "../Posting/Posting";
import LandPage from "../LandPage/LandPage";
import ImageComponent from "../ImageComponent/ImageComponent";
import ViewComponent from "../ViewImageComponent/ViewComponent";
import PostSuccess from "../PostSuccess/PostSuccess";
import PostSuccess2 from "../PostSuccess/PostSuccess2";
import { useDispatch } from "react-redux";
import { sharePost } from "../../../../Features/newPostDetailsSlice";

const PostFolder = ({ step, handleStep, steps }) => {
    const dispatch = useDispatch();

    const handlePosting = () => {
        dispatch(sharePost());
        setTimeout(() => {
            handleStep(6);
        }, 3000);
    };
    return (
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
    );
};

export default PostFolder;
