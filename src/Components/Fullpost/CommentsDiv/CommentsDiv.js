import React, { memo } from "react";
import { useState } from "react";
import Comment from "../Comment/Comment";
import Loader from "../../Icons/Loader/Loader";
import { Skeleton } from "@mui/material";

const CommentsDiv = ({ comment, setComment, setReplyMode, setReplyData }) => {
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
            <Comment
                comment={comment}
                mainLoad={setMainLoad}
                type="primary"
                setComment={setComment}
                setReplyData={setReplyData}
                setReplyMode={setReplyMode}
            />
            {mainLoad ? (
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
                                                    <div
                                                        style={{
                                                            width: "16px",
                                                            height: "16px",
                                                        }}
                                                    >
                                                        <Loader />
                                                    </div>
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
                                                    setComment={setComment}
                                                    type="secondary"
                                                    commentId={comment.id}
                                                    setReplyMode={setReplyMode}
                                                    setReplyData={setReplyData}
                                                />
                                            ))}

                                        {loadMoreSpinn && (
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width: "16px",
                                                        height: "16px",
                                                    }}
                                                >
                                                    <Loader />
                                                </div>
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
            ) : (
                <>
                    <Skeleton
                        variant="text"
                        style={{
                            fontSize: "12px",
                            width: "130px",
                            margin: '16px 0 0 54px'
                        }}
                    />
                </>
            )}
        </div>
    );
};

export default memo(CommentsDiv);
