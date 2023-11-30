import axios from "axios";
import { useEffect, useState, memo } from "react";

import { apiSite } from "../../../Website/website";

import Like from "../../Icons/Like/Like";

import { Skeleton } from "@mui/material";

import "./comment.css";
import AccModal from "../../RoundedImage/AccModal/AccModal";

const Comment = ({ comment, post, id }) => {
    const userId = JSON.parse(localStorage.getItem("userId"));

    const [liked, setLiked] = useState(false);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState({});

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
        <div className="comment_001">
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
                    <div className="comment_002">
                        <span className="comment_003 user-name">{userData.username}
                        <AccModal user={userData}/>
                        </span>
                        {"  "}
                        {comment.text}
                    </div>
                    <div className="comment_004" onClick={handleLiked}>
                        <Like liked={liked} size="12px" />
                    </div>
                </>
            )}
        </div>
    );
};

export default memo(Comment);
