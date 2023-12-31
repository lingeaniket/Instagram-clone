import React, { useState, memo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Post from "../../Post/Post";
import BackArrow from "../../Icons/BackArrow/BackArrow";
import CommentsComponent from "../../Post/Fullpost/RightComponent/Comments/CommentsComponent";

const ProfileScroll = () => {
    const title = ["Post", "Comments"];

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const postId = searchParams.get("postId");
    const postUser = searchParams.get("postUser");

    const [step, setStep] = useState(0);

    const handleBack = () => {
        if (step === 0) {
            document.body.style.overflow = "auto";
            navigate(0 - 1);
        } else {
            setStep((prev) => prev - 1);
        }
    };

    return (
        <div className="post020">
            <div className="post021">
                <div className="post022" onClick={handleBack}>
                    <BackArrow />
                </div>
                <h1 className="post023">{title[step]}</h1>
                <div className="post022"></div>
            </div>
            {step === 0 ? (
                <div className="post024">
                    <Post postId={postId} id={postUser} type="profile" setStep={setStep} />
                </div>
            ) : (
                <CommentsComponent />
            )}
        </div>
    );
};

export default memo(ProfileScroll);
