import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Save from "../../Icons/Save/Save";
import Like from "../../Icons/Like/Like";
import Comment from "../Comment/Comment";
import Share from "../../Icons/Share/Share";
import CommentIcon from "../../Icons/Comment/Comment";

import { addComment, handleLiked, handlePost } from "../functions";

import { Skeleton } from "@mui/material";

const PostFooter = ({
    setLiked,
    liked,
    setLikes,
    postId,
    userData,
    likes,
    post,
    setReload,
    likeref,
    loading,
}) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [saved, setSaved] = useState(false);
    const [comment, setComment] = useState("");

    const handleSaved = () => {
        setSaved((saved) => !saved);
    };

    const handleLike = () => {
        handleLiked(likeref, setLiked, liked, setLikes, userData.id, postId);
    };

    const commentAdd = (e) => {
        addComment(e, userData, postId, comment, setReload, setComment);
    };

    const postHandle = () => {
        handlePost(dispatch, navigate, userData, postId);
    };

    const handleComment = (e) => {
        setComment(() => e.target.value);
    };

    return (
        <div>
            <div className="post009">
                <div className="post010">
                    <div
                        ref={likeref}
                        className={`post011 post012 animeicon`}
                        onClick={handleLike}
                    >
                        {loading ? (
                            <Skeleton
                                variant="rounded"
                                animation="wave"
                                sx={{
                                    height: "24px",
                                    width: "24px",
                                }}
                            />
                        ) : (
                            <Like liked={liked} size={24} />
                        )}
                    </div>
                    <div className="post011 post019" onClick={postHandle}>
                        {loading ? (
                            <Skeleton
                                variant="rounded"
                                animation="wave"
                                sx={{
                                    height: "24px",
                                    width: "24px",
                                }}
                            />
                        ) : (
                            <CommentIcon />
                        )}
                    </div>
                    <div className="post011 post019">
                        {loading ? (
                            <Skeleton
                                variant="rounded"
                                animation="wave"
                                sx={{
                                    height: "24px",
                                    width: "24px",
                                }}
                            />
                        ) : (
                            <Share />
                        )}
                    </div>
                </div>
                <div>
                    <div
                        className={`post011 post018 ${!saved ? "post019" : ""}`}
                        onClick={handleSaved}
                    >
                        {loading ? (
                            <Skeleton
                                variant="rounded"
                                animation="wave"
                                sx={{
                                    height: "24px",
                                    width: "24px",
                                }}
                            />
                        ) : (
                            <Save saved={saved} />
                        )}
                    </div>
                </div>
            </div>
            <div className="post013">
                {loading ? (
                    <Skeleton
                        variant="text"
                        animation="wave"
                        sx={{
                            fontSize: "14px",
                            width: "50px",
                        }}
                    />
                ) : (
                    <>{likes} likes</>
                )}
            </div>
            <div className="post014">
                {loading ? (
                    <Skeleton
                        variant="text"
                        animation="wave"
                        sx={{
                            fontSize: "14px",
                            width: "100%",
                        }}
                    />
                ) : (
                    <>
                        <span className="post015">{userData?.username}</span>{" "}
                        {post.caption}
                    </>
                )}
            </div>
            <div
                className="post014"
                style={{
                    width: "100%",
                }}
            >
                {post?.comments?.slice(-2).map((comment) => (
                    <Comment comment={comment} post={post} id={userData.id} />
                ))}
            </div>
            <div className="post016" onClick={handlePost}>
                {loading ? (
                    <Skeleton
                        variant="text"
                        animation="wave"
                        sx={{
                            width: "150px",
                            fontSize: "12px",
                        }}
                    />
                ) : (
                    <>View all {post?.comments?.length} comments</>
                )}
            </div>
            <div className="post014">
                <input
                    className="post017"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={handleComment}
                    onKeyDown={commentAdd}
                />
            </div>
        </div>
    );
};

export default PostFooter;
