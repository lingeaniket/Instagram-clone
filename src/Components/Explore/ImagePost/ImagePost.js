import { useNavigate } from "react-router-dom";
import React, { memo, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Like from "../../Icons/Like/Like";
import Comment from "../../Icons/Comment/Comment";

import { generateUser } from "../function";

import { Skeleton } from "@mui/material";
import "../../Profile/profile.css";
import "../../Profile/PostList/postList.css";

const ImagePost = ({ number, handleFullPost }) => {
    const navigate = useNavigate();

    const [post, setPost] = useState({});
    const [account, setAccount] = useState({});
    const [loading, setLoading] = useState(true);

    const handlePost = () => {
        handleFullPost();
        navigate(`/explore/post?postUser=${account.id}&postId=${post.id}`);
        document.body.style.overflow = "hidden";
    };

    useEffect(() => {
        setLoading(true);
        const generateRandom = async () => {
            const data = await generateUser();
            setPost(() => data.post);
            setAccount(() => data.account);
            setTimeout(() => {
                setLoading(false);
            }, 100);
        };

        generateRandom();
    }, [number]);

    return (
        <div
            className="explore005 explore006"
            style={{
                aspectRatio: `${loading ? "1/1" : "auto"}`,
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
                <div className="explore008 explore012 w_100" onClick={handlePost}>
                    <div>
                        <div className="explore008 w_100">
                            <div className="w_100">
                                <div className="explore010">
                                    <div>
                                        <LazyLoadImage
                                            effect="blur"
                                            style={{
                                                maxWidth: "100%",
                                                verticalAlign: "middle",
                                            }}
                                            src={`https://picsum.photos/id/${post?.id}/500/500`}
                                            alt=""
                                        />
                                    </div>
                                    <div className="hoverIcons">
                                        <div className="postList003">
                                            <div className="postList004 postList006">
                                                <div className="postList005">
                                                    <Like size={24} liked={true} white="white" />
                                                </div>{" "}
                                                {post?.likes}
                                            </div>
                                            <div className="postList004">
                                                <div className="postList005">
                                                    <Comment fill="white" color="white" />
                                                </div>{" "}
                                                {post?.comments?.length}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default memo(ImagePost);
