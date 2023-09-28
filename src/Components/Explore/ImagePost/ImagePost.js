import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Like from "../../Icons/Like/Like";
import Comment from "../../Icons/Comment/Comment";
import { useNavigate } from "react-router-dom";

const ImagePost = ({ post, account }) => {
    const navigate = useNavigate();

    const handlePost = () => {
        navigate(`/explore/post?postUser=${account.id}&postId=${post.id}`);
        document.body.style.overflow = "hidden";
    };

    return (
        <div className="explore005 explore006">
            <div className="explore008 explore012" onClick={handlePost}>
                <div>
                    <div className="explore008">
                        <div className="explore009">
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
                                                <Like
                                                    size={24}
                                                    liked={true}
                                                    white="white"
                                                />
                                            </div>{" "}
                                            {post.likes}
                                        </div>
                                        <div className="postList004">
                                            <div className="postList005">
                                                <Comment
                                                    fill="white"
                                                    color="white"
                                                />
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
        </div>
    );
};

export default ImagePost;
