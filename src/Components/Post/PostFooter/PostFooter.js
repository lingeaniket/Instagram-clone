import React, { Suspense, lazy, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

import Save from "../../Icons/Save/Save";
import Like from "../../Icons/Like/Like";
import Comment from "../Comment/Comment";
import Share from "../../Icons/Share/Share";
import CommentIcon from "../../Icons/Comment/Comment";
import BackArrow from "../../Icons/BackArrow/BackArrow";

import { addComment, handleLiked, handlePost } from "../functions";

import { Skeleton } from "@mui/material";
const CommentsComponent = lazy(() => import("../../Fullpost/RightComponent/Comments/CommentsComponent"));

const RoundedSkeleton = () => {
    return (
        <Skeleton
            variant="rounded"
            animation="wave"
            sx={{
                height: "24px",
                width: "24px",
            }}
        />
    );
};

const PostFooter = ({ setLiked, liked, setLikes, postId, userData, likes, post, setReload, likeref, loading, type, setStep }) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [saved, setSaved] = useState(false);
    const [comment, setComment] = useState("");
    const [openComments, setOpenComments] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();

    const handleSaved = () => {
        setSaved((saved) => !saved);
    };

    const handleBack = () => {
        if (type !== "timeline") {
            setStep((prev) => prev - 1);
        } else {
            document.body.style.overflow = "auto";
            searchParams.delete("postId");
            searchParams.delete("postUser");
            setSearchParams(searchParams);
            setOpenComments(false);
        }
    };

    const handleLike = () => {
        handleLiked(likeref, setLiked, liked, setLikes, userData.id, postId);
    };

    const commentAdd = (e) => {
        addComment(e, userData, postId, comment, setReload, setComment);
    };

    const postHandle = () => {
        if (type !== "timeline") {
            setStep((prev) => prev + 1);
        } else {
            setOpenComments(false);
            document.body.style.overflow = "auto";
            if (window.innerWidth <= 768) {
                document.body.style.overflow = "hidden";
                searchParams.set("postId", postId);
                searchParams.set("postUser", userData.id);
                setSearchParams(searchParams);
                setOpenComments(true);
            } else {
                handlePost(dispatch, navigate, userData, postId);
            }
        }
    };

    const handleComment = (e) => {
        setComment(() => e.target.value);
    };

    return (
        <div>
            <div className="post009">
                <div className="post010">
                    <div ref={likeref} className={`post011 post012 animeicon`} onClick={handleLike}>
                        {loading ? <RoundedSkeleton /> : <Like liked={liked} size={24} />}
                    </div>
                    <div className="post011 post019" onClick={postHandle}>
                        {loading ? <RoundedSkeleton /> : <CommentIcon />}
                    </div>
                    <div className="post011 post019">{loading ? <RoundedSkeleton /> : <Share />}</div>
                </div>
                <div>
                    <div className={`post011 post018 ${!saved ? "post019" : ""}`} onClick={handleSaved}>
                        {loading ? <RoundedSkeleton /> : <Save saved={saved} />}
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
                        <span className="post015">{userData?.username}</span> {post.caption}
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
                    <Comment key={comment.id} comment={comment} post={post} id={userData.id} />
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
                <input className="post017" placeholder="Add a comment..." value={comment} onChange={handleComment} onKeyDown={commentAdd} />
            </div>
            {openComments && (
                <div className="post020">
                    <div className="post021">
                        <div className="post022" onClick={handleBack}>
                            <BackArrow />
                        </div>
                        <h1 className="post023">Comments</h1>
                        <div className="post022"></div>
                    </div>
                    <Suspense fallback={<></>}>
                        <CommentsComponent />
                    </Suspense>
                </div>
            )}
        </div>
    );
};

export default PostFooter;
