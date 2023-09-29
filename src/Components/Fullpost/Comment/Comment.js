import axios from "axios";
import { useEffect, useState } from "react";

import Like from "../../Icons/Like/Like";
import { apiSite } from "../../../Website/website";
import { useSearchParams } from "react-router-dom";
import timeElapsedFromCurrent from "./function";

const Comment = ({
    comment,
    type,
    mainLoad,
    commentId,
    setComment,
    setReplyMode,
    setReplyData,
}) => {
    const [userData, setUserData] = useState({});
    const [searchParams] = useSearchParams();
    const postUser = Number(searchParams.get("postUser"));
    const postId = Number(searchParams.get("postId"));
    const userId = JSON.parse(localStorage.getItem("userId"));
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const handleReplyComment = async () => {
        setReplyData((prev) => {
            return {
                ...prev,
                username: userData.username,
                userId: comment.userId,
                commentId: type === "primary" ? comment.id : commentId,
            };
        });
        setComment(() => `@${userData.username} `);
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
        axios.get(`${apiSite}/users/${comment.userId}`).then((response) => {
            setUserData(response.data);
            setLoaded(true);
            setLiked(() => comment?.likedBy?.includes(userId));
            setLikes(() => comment?.likes);
            if (type === "primary") {
                mainLoad(true);
            }
        });
        // eslint-disable-next-line
    }, [comment]);

    return (
        <>
            {loaded && (
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
                                    <img
                                        style={{
                                            maxWidth: "100%",
                                        }}
                                        src={`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${userData?.avatar}.jpg`}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div>
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
                                            <time
                                                className="fullPost059"
                                                dateTime="2023-09-10T08:34:19.000Z"
                                            >
                                                {
                                                    comment?.time ? 
                                                    timeElapsedFromCurrent(comment.time) :
                                                    "no time"
                                                }
                                                
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
                            </div>
                        </div>
                        <div
                            className="fullPost066"
                            onClick={handleCommentLike}
                            style={{
                                cursor: 'pointer'
                            }}
                        >
                            <Like liked={liked} size={12} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Comment;
