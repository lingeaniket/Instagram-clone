import React from "react";
import { useState } from "react";
import Comment from "../Comment/Comment";

const CommentsDiv = ({ comment }) => {
    const [showReply, setShowReply] = useState(false);
    const [sliceid, setSliceid] = useState(3);

    const handleReply = () => {
        setShowReply((prev) => !prev);
    };

    const handleLoadMore = () => {
        setSliceid((last) => last + 3);
    };
    return (
        <div className="fullPost060">
            {/** this is comment div */}
            <Comment comment={comment} />
            {comment?.reply?.length > 0 && (
                <div>
                    <div className="fullPost067">
                        <span>
                            <div className="fullPost068" onClick={handleReply}>
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
                                </button>
                            </div>
                        </span>
                        {showReply && (
                            <div>
                                {comment?.reply
                                    ?.slice(0, sliceid)
                                    ?.map((reply) => (
                                        <Comment comment={reply} />
                                    ))}
                                {sliceid + 3 <= comment?.reply?.length && (
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
        </div>
    );
};

export default CommentsDiv;
