import axios from "axios";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import React, { useEffect, useState, memo, useRef, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

import Loader from "../../../Icons/Loader/Loader";
import CommentsDiv from "../Comments/CommentsDiv/CommentsDiv";

import { apiSite } from "../../../../Website/website";
import {
    addPostComment,
    addPostReply,
    updateComment,
    updateData,
    updateUuidv,
} from "../../../../Features/fullPostCommentSlice";

import { Skeleton } from "@mui/material";
import RoundedImage from "../../../RoundedImage/RoundedImage";

const CommentsComponent = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const postId = Number(searchParams.get("postId"));
    const postUser = Number(searchParams.get("postUser"));

    const userId = JSON.parse(localStorage.getItem("userId"));

    const postReplyRef = useRef(null);
    const postCommentRef = useRef(null);

    const [post, setPost] = useState({});
    const [comment, setComment] = useState("");
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState({});
    const [comments, setComments] = useState([]);
    const [uuidv, setUuidv] = useState(uuidv4());
    const [replyMode, setReplyMode] = useState(false);
    const [replyData, setReplyData] = useState({
        username: "",
        userId: "",
        commentId: "",
    });

    const addReply = useCallback(() => {
        dispatch(addPostReply({ postUser, postId }));
        setComment("");
        // eslint-disable-next-line
    }, []);

    const addReplyComment = () => {
        const doc = document.getElementById("replycomment");
        doc.removeEventListener("click", addReply);
        doc.addEventListener("click", addReply);
    };

    const addComment = useCallback(async () => {
        dispatch(addPostComment({ postUser, postId }));
        setComment("");
        // eslint-disable-next-line
    }, []);

    const checkReplyMode = (e) => {
        if (replyMode) {
            if (replyData.username.length > 0 && e.target.value.includes(replyData.username)) {
                return true;
            }
        }
        return false;
    };

    const handleAddReply = () => {
        const commentObj = {
            id: uuidv,
            text: comment,
            userId,
            time: new Date().getTime(),
            toUser: replyData.username,
            toUserId: replyData.userId,
            likes: 0,
            likedBy: [],
        };

        setComments((prev) => {
            const commentData = prev.map((comment) => {
                if (comment.id === replyData.commentId) {
                    comment.reply.unshift(commentObj);
                    const data = {
                        ...comment,
                        reply: comment.reply,
                    };
                    return data;
                }
                return comment;
            });

            return commentData;
        });
    };

    const handleAddComment = () => {
        const commentObj = {
            id: uuidv,
            text: comment,
            userId,
            time: new Date().getTime(),
            likes: 0,
            likedBy: [],
            reply: [],
        };
        setComments((prev) => {
            prev.unshift(commentObj);
            return prev;
        });
        setComment("");
    };

    const handleComment = async (e) => {
        setComment(() => e.target.value);
        dispatch(updateComment({ comment: e.target.value }));
        const check = checkReplyMode(e);
        if (!check) {
            setReplyMode(false);
            setReplyData((prev) => {
                return { ...prev, username: "", commentId: "", userId: "" };
            });
            dispatch(updateData({ username: "", commentId: "", userId: "" }));
            const doc = postCommentRef.current;
            doc.removeEventListener("click", addComment);
            doc.addEventListener("click", addComment);
        }
        const uuid = uuidv4().toString();

        setUuidv(uuid);
        dispatch(updateUuidv({ uuid }));
    };

    const addEnterComment = async (e) => {
        if (e.key === "Enter") {
            if (replyMode) {
                addReply();
                handleAddReply();
            } else {
                addComment();
                handleAddComment();
            }
        }
    };

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            await axios.get(`${apiSite}/users/${postUser}`).then((response) => {
                setUserData(() => response.data);
            });

            await axios
                .get(`${apiSite}/posts/post?postUser=${postUser}&postId=${postId}`)
                .then((response) => {
                    setPost(() => response.data.post);
                    setComments(() => response.data.post.comments.reverse());
                    setTimeout(() => {
                        setLoading(false);
                    }, 1000);
                });
        };
        loadData();
    }, [postUser, postId]);

    return (
        <>
            <div className="fullPost047 fullPost024 fullPost042">
                <div className="fullPost048 fullPost063">
                    <div>
                        <div className="fullPost049">
                            <div className="fullPost050">
                                <div className="fullPost051">
                                    <div className="fullPost052">
                                        <div
                                            style={{
                                                height: "32px",
                                                width: "32px",
                                                borderRadius: "50%",
                                                overflow: "hidden",
                                            }}
                                        >
                                            {loading ? (
                                                <Skeleton
                                                    variant="rectangle"
                                                    sx={{
                                                        height: "100%",
                                                        width: "100%",
                                                    }}
                                                />
                                            ) : (
                                                <RoundedImage url={userData?.avatar} />
                                            )}
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            width: "100%",
                                        }}
                                    >
                                        {loading ? (
                                            <>
                                                <Skeleton
                                                    variant="text"
                                                    sx={{
                                                        fontSize: "12px",
                                                        width: "100%",
                                                    }}
                                                />
                                                <Skeleton
                                                    variant="text"
                                                    sx={{
                                                        fontSize: "12px",
                                                        width: "100%",
                                                    }}
                                                />
                                                <Skeleton
                                                    variant="text"
                                                    sx={{
                                                        fontSize: "12px",
                                                        width: "25px",
                                                        marginTop: "10px",
                                                    }}
                                                />
                                            </>
                                        ) : (
                                            <>
                                                <h2 className="fullPost053">
                                                    <div className="fullPost054">
                                                        {userData?.username}
                                                    </div>
                                                </h2>
                                                <div className="fullPost055">
                                                    <h1 className="fullPost056">{post?.caption}</h1>
                                                </div>
                                                <div className="fullPost057">
                                                    <span className="fullPost058">
                                                        <time
                                                            className="fullPost059"
                                                            dateTime="2023-09-10T08:34:19.000Z"
                                                        >
                                                            1 w
                                                        </time>
                                                    </span>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {loading ? (
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <div
                                style={{
                                    width: "30px",
                                    height: "30px",
                                }}
                            >
                                <Loader />
                            </div>
                        </div>
                    ) : (
                        <>
                            {comments?.map((comment) => (
                                <CommentsDiv
                                    comment={comment}
                                    key={comment.id}
                                    setComment={setComment}
                                    setReplyMode={setReplyMode}
                                    addReplyComment={addReplyComment}
                                    setReplyData={setReplyData}
                                />
                            ))}
                        </>
                    )}
                </div>
            </div>
            <div className="fullPost074">
                <div className="fullPost075 fullPost032">
                    <div>
                        <input
                            className="fullPost076"
                            type="text"
                            value={comment}
                            placeholder="Add a comment..."
                            onChange={handleComment}
                            onKeyDown={addEnterComment}
                            autoFocus={replyMode}
                        />
                    </div>
                    <div className="fullPost077">
                        <span ref={postReplyRef} onClick={handleAddReply} id="replycomment">
                            {replyMode && (
                                <button
                                    className="fullPost078"
                                    style={{
                                        cursor: "pointer",
                                    }}
                                >
                                    reply
                                </button>
                            )}
                        </span>
                        <span ref={postCommentRef} onClick={handleAddComment}>
                            {!replyMode && (
                                <button
                                    className="fullPost078"
                                    style={{
                                        cursor: "pointer",
                                    }}
                                >
                                    comment
                                </button>
                            )}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(CommentsComponent);
