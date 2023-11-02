import React, { useState, memo, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

import CommentsComponent from "./Comments/CommentsComponent";

import { Skeleton } from "@mui/material";
import PostDetailsHeader from "./PostDetailsHeader/PostDetailsHeader";
import ActionDiv from "./ActionDiv/ActionDiv";

const PostDetailComponent = ({ likeref, liked, handleLiked, post }) => {
    const [searchParams] = useSearchParams();
    console.log(post)
    const postId = Number(searchParams.get("postId"));

    const [loading, setLoading] = useState(true);

    const loadingFunction = useCallback((val) => {
        setLoading(val);
    }, []);

    return (
        <div className="fullPost029 fullPost024 fullPost042">
            <div className="fullPost030 fullPost024 fullPost042">
                <PostDetailsHeader post={post} setLoading={loadingFunction} />
                <div className="fullPost043 fullPost042 fullPost024">
                    <ActionDiv likeref={likeref} handleLiked={handleLiked} liked={liked} post={post} />
                    <div
                        className="fullPost046"
                        style={{
                            fontSize: "12px",
                        }}
                    >
                        <span
                            style={{
                                fontWeight: "600",
                            }}
                        >
                            {post.id !== postId ? (
                                <Skeleton
                                    variant="text"
                                    sx={{
                                        fontSize: "14px",
                                        width: "50px",
                                    }}
                                />
                            ) : (
                                <>{post?.likes} likes</>
                            )}
                        </span>
                    </div>
                    <CommentsComponent />
                    <div className="fullPost072">
                        <span className="fullPost073">
                            {loading ? (
                                <Skeleton
                                    animation="wave"
                                    variant="text"
                                    sx={{
                                        fontSize: "12px",
                                        width: "50px",
                                    }}
                                />
                            ) : (
                                <>1 day ago</>
                            )}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(PostDetailComponent);
