import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect, useState, memo } from "react";
import { useSearchParams } from "react-router-dom";

import timeElapsedFromCurrent from "./function";
import { apiSite } from "../../../../../../Website/website";
import {
    updateComment,
    updateData,
} from "../../../../../../Features/fullPostCommentSlice";

import Like from "../../../../../Icons/Like/Like";

import { Skeleton } from "@mui/material";

const Comment = ({
    addReply,
    comment,
    commentId,
    mainLoad,
    setComment,
    setReplyData,
    setReplyMode,
    type,
}) => {
    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();
    const postId = Number(searchParams.get("postId"));
    const postUser = Number(searchParams.get("postUser"));

    const userId = JSON.parse(localStorage.getItem("userId"));

    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);

    const handleReplyComment = async () => {
        addReply();
        setReplyData((prev) => {
            return {
                ...prev,
                username: userData.username,
                userId: comment.userId,
                commentId: type === "primary" ? comment.id : commentId,
            };
        });
        dispatch(
            updateData({
                username: userData.username,
                userId: comment.userId,
                commentId: type === "primary" ? comment.id : commentId,
            })
        );
        setComment(() => `@${userData.username} `);
        dispatch(updateComment({ comment: `@${userData.username}` }));
        setReplyMode(true);
    };

    const handleCommentLike = async () => {
        setLiked((prev) => !prev);
        if (liked) {
            setLikes((prev) => prev - 1);
        } else {
            setLikes((prev) => prev + 1);
        }
        if (type === "primary") {
            await axios.put(`${apiSite}/posts/comment-like`, {
                method: liked ? "unlike" : "like",
                user: userId,
                postUser,
                postId,
                commentId: comment.id,
            });
        } else {
            await axios.put(`${apiSite}/posts/reply-like`, {
                method: liked ? "unlike" : "like",
                user: userId,
                postUser,
                postId,
                commentId: commentId,
                replyId: comment.id,
            });
        }
    };

    useEffect(() => {
        setLoading(true);
        axios.get(`${apiSite}/users/${comment.userId}`).then((response) => {
            setUserData(response.data);
            setTimeout(() => {
                setLoading(false);
                if (type === "primary") {
                    mainLoad(true);
                }
            }, 1000);
            setLiked(() => comment?.likedBy?.includes(userId));
            setLikes(() => comment?.likes);
        });
        // eslint-disable-next-line
    }, [comment.id]);

    return (
        <div className="fullPost061">
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
                                    animation="wave"
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
                                        fontSize: "14px",
                                        width: "100%",
                                    }}
                                />

                                <Skeleton
                                    variant="text"
                                    sx={{
                                        fontSize: "12px",
                                        width: "50%",
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
                                        {comment?.text}
                                    </h1>
                                </div>
                                <div className="fullPost057">
                                    <span className="fullPost058">
                                        <span>
                                            <time className="fullPost059">
                                                {comment?.time
                                                    ? timeElapsedFromCurrent(
                                                          comment.time
                                                      )
                                                    : "no time"}
                                            </time>
                                        </span>
                                        <button className="fullPost065 fullPost071">
                                            {likes} likes
                                        </button>
                                        <button
                                            className="fullPost065 fullPost071"
                                            onClick={handleReplyComment}
                                        >
                                            reply
                                        </button>
                                    </span>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div
                    className="fullPost066"
                    onClick={handleCommentLike}
                    style={{
                        cursor: "pointer",
                    }}
                >
                    <Like liked={liked} size={12} />
                </div>
            </div>
        </div>
    );
};

export default memo(Comment);
