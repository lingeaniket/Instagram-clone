import React, { useEffect, useState, memo } from "react";
import CommentsDiv from "../CommentsDiv/CommentsDiv";
import axios from "axios";
import { apiSite } from "../../../Website/website";
import { useSearchParams } from "react-router-dom";
import { Skeleton } from "@mui/material";
import Loader from "../../Icons/Loader/Loader";

const CommentsComponent = () => {
    const [searchParams] = useSearchParams();
    const postUser = Number(searchParams.get("postUser"));
    const postId = Number(searchParams.get("postId"));

    const [replyData, setReplyData] = useState({
        username: "",
        userId: "",
        commentId: "",
    });
    const [replyMode, setReplyMode] = useState(false);

    const [post, setPost] = useState({});

    const [userData, setUserData] = useState({});

    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    const userId = JSON.parse(localStorage.getItem("userId"));
    // const [reload, setReload] = useState(false);

    const checkReplyMode = () => {
        if (replyMode) {
            if (
                replyData.username.length > 0 &&
                comment.includes(replyData.username)
            ) {
                return true;
            }
        }
        return false;
    };
    const handleComment = (e) => {
        const check = checkReplyMode();
        if (!check) {
            setReplyMode(false);
            setReplyData((prev) => {
                return { ...prev, username: "", commentId: "", userId: "" };
            });
        }
        setComment(() => e.target.value);
    };

    const loadComments = async () => {
        await axios
            .get(`${apiSite}/posts/post?postUser=${postUser}&postId=${postId}`)
            .then((response) => {
                setComments(() => response.data.post.comments.reverse());
            });
    };
    const addComment = async () => {
        if (replyMode) {
            await axios
                .put(`${apiSite}/posts/add-reply`, {
                    user: userId,
                    postUser,
                    postId,
                    commentId: replyData.commentId,
                    replyText: comment,
                    toUser: replyData.username,
                    toUserId: replyData.userId,
                })
                .then((res) => {
                    // loadComments();
                });
            setComment("");
        } else {
            if (comment.trim().length > 0) {
                await axios
                    .put(`${apiSite}/posts/add-comment`, {
                        user: userId,
                        postUser: userData.id,
                        postId: post.id,
                        comment,
                    })
                    .then(() => {
                        loadComments();
                    });

                setComment("");
            }
        }
    };

    const addEnterComment = async (e) => {
        if (e.key === "Enter") {
            addComment();
        }
    };

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            await axios.get(`${apiSite}/users/${postUser}`).then((response) => {
                setUserData(() => response.data);
            });

            await axios
                .get(
                    `${apiSite}/posts/post?postUser=${postUser}&postId=${postId}`
                )
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
                                                <img
                                                    style={{
                                                        maxWidth: "100%",
                                                    }}
                                                    src={`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${userData?.avatar}.jpg`}
                                                    alt=""
                                                />
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
                                                    <h1 className="fullPost056">
                                                        {post?.caption}
                                                    </h1>
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
                    <div className="fullPost077" onClick={addComment}>
                        <button
                            className="fullPost078"
                            style={{
                                cursor: "pointer",
                            }}
                        >
                            post
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(CommentsComponent);
