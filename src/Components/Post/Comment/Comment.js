import axios from "axios";
import { useEffect, useState, memo } from "react";
import { apiSite } from "../../../Website/website";
import { Skeleton } from "@mui/material";
import Like from "../../Icons/Like/Like";

const Comment = ({ comment, post, id }) => {
    const [userData, setUserData] = useState({});
    const userId = JSON.parse(localStorage.getItem("userId"));
    const [liked, setLiked] = useState(false);
    const [loading, setLoading] = useState(true);
    const handleLiked = async () => {
        setLiked((prev) => !prev);
        await axios.put(`${apiSite}/posts/comment-like`, {
            method: liked ? "unlike" : "like",
            user: userId,
            postUser: id,
            postId: post.id,
            commentId: comment.id,
        });
    };
    useEffect(() => {
        setLoading(true);
        axios.get(`${apiSite}/users/${comment.userId}`).then((response) => {
            setUserData(response.data);
            setLiked(() => comment?.likedBy.includes(userId));
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        });
        // eslint-disable-next-line
    }, [comment]);
    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                margin: "6px 0",
                justifyContent: "space-between",
            }}
        >
            {loading ? (
                <Skeleton
                    variant="text"
                    animation="wave"
                    sx={{
                        width: "100%",
                        fontSize: "14px",
                    }}
                />
            ) : (
                <>
                    <div style={{ fontSize: "14px" }}>
                        <span
                            style={{
                                fontWeight: "600",
                                cursor: "pointer",
                            }}
                        >
                            {userData.username}
                        </span>
                        {"  "}
                        {comment.text}
                    </div>
                    <div
                        style={{ display: "flex", cursor: "pointer" }}
                        onClick={handleLiked}
                    >
                        <Like liked={liked} size="12px" />
                    </div>
                </>
            )}
        </div>
    );
};

export default memo(Comment);
