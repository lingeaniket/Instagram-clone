import React from "react";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Comment from "../Comment/Comment";

const CommentsDiv = ({ comment }) => {
    const [showReply, setShowReply] = useState(false);
    const [mainLoad, setMainLoad] = useState(false);
    const [loadMoreSpinn, setLoadMoreSpin] = useState(false);
    const [loadReplySpin, setLoadReplySpin] = useState(false);
    const [sliceid, setSliceid] = useState(3);

    const handleReply = () => {
        if (!showReply) {
            setLoadReplySpin(true);
            setTimeout(() => {
                setLoadReplySpin(false);
                setShowReply((prev) => !prev);
            }, 1000);
        } else {
            setLoadReplySpin(false);
            setShowReply((prev) => !prev);
        }
    };

    const handleLoadMore = () => {
        setLoadMoreSpin(true);
        setTimeout(() => {
            setLoadMoreSpin(false);

            setSliceid((last) => last + 3);
        }, 1000);
    };

    return (
        <div className="fullPost060">
            <Comment comment={comment} mainLoad={setMainLoad} type="primary" />
            {mainLoad && (
                <>
                    {comment?.reply?.length > 0 && (
                        <div>
                            <div className="fullPost067">
                                <span>
                                    <div
                                        className="fullPost068"
                                        onClick={handleReply}
                                    >
                                        <button
                                            className="fullPost069"
                                            style={{
                                                cursor: "pointer",
                                            }}
                                        >
                                            <div className="fullPost070"></div>
                                            <span className="fullPost071">
                                                {!showReply
                                                    ? `show replies(${comment?.reply?.length})`
                                                    : "hide replies"}
                                            </span>
                                            {loadReplySpin && (
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        justifyContent:
                                                            "center",
                                                        marginLeft: "15px",
                                                    }}
                                                >
                                                    <CircularProgress
                                                        size={16}
                                                    />
                                                </div>
                                            )}
                                        </button>
                                    </div>
                                </span>
                                {showReply && (
                                    <div>
                                        {comment?.reply
                                            ?.slice(0, sliceid)
                                            ?.map((reply) => (
                                                <Comment
                                                    comment={reply}
                                                    type="secondary"
                                                />
                                            ))}

                                        {loadMoreSpinn && (
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                <CircularProgress size={16} />
                                            </div>
                                        )}
                                        {sliceid + 3 <=
                                            comment?.reply?.length && (
                                            <div
                                                style={{
                                                    display: "flex",
                                                    width: "100%",
                                                    justifyContent: "center",
                                                    cursor: "pointer",
                                                }}
                                                onClick={handleLoadMore}
                                            >
                                                load more comments
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default CommentsDiv;
