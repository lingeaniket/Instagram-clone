import React from "react";

import Close from "../../../Icons/Close/Close";

import "./replyMode.css";

const ReplyDiv = ({ handleReplyMode, replyMode, userData }) => {
    const handleMode = () => {
        handleReplyMode("close");
    };

    return (
        <div className="replyMode001">
            <div className="replyMode002">
                <div className="replyMode003">
                    <div className="replyMode004">
                        <span className="replyMode005">
                            <span className="replyMode006">
                                Replying to{" "}
                                {replyMode.toSelf ? (
                                    <span>yourself</span>
                                ) : (
                                    <span className="replyMode007">{userData.first_name}</span>
                                )}
                            </span>
                        </span>
                    </div>
                    <div className="replyMode008">
                        <span className="replyMode009">{replyMode.message}</span>
                    </div>
                </div>
            </div>
            <div onClick={handleMode} className="replyMode010">
                <div className="replyMode011">
                    <Close color={"black"} size={"12px"} />
                </div>
            </div>
        </div>
    );
};

export default ReplyDiv;
