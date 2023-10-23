import React, { useState, memo, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

import Like from "../../Icons/Like/Like";
import Save from "../../Icons/Save/Save";
import Share from "../../Icons/Share/Share";
import Comment from "../../Icons/Comment/Comment";

import CommentsComponent from "./Comments/CommentsComponent";

import { Skeleton } from "@mui/material";
import PostDetailsHeader from "./PostDetailsHeader/PostDetailsHeader";

const RoundedSkeleton = () => {
    return (
        <Skeleton
            variant="rounded"
            sx={{
                width: "24px",
                height: "24px",
            }}
        />
    );
};

const PostDetailComponent = ({ likeref, liked, handleLiked, post }) => {
    const [searchParams] = useSearchParams();
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
                    <div className="fullPost044">
                        <div
                            style={{
                                marginLeft: "-8px",
                            }}
                        >
                            <div
                                ref={likeref}
                                onClick={handleLiked}
                                className="fullPost045 fullPost016 fullPost006 animeicon"
                            >
                                {post.id !== postId ? (
                                    <RoundedSkeleton />
                                ) : (
                                    <Like liked={liked} size={24} />
                                )}
                            </div>
                        </div>
                        <div>
                            <div className="fullPost045 fullPost016 fullPost006">
                                {post.id !== postId ? <RoundedSkeleton /> : <Comment />}
                            </div>
                        </div>
                        <div>
                            <div className="fullPost045 fullPost016 fullPost006">
                                {post.id !== postId ? <RoundedSkeleton /> : <Share />}
                            </div>
                        </div>
                        <div
                            style={{
                                marginLeft: "auto",
                                marginRight: "-10px",
                            }}
                        >
                            <div className="fullPost045 fullPost016 fullPost006">
                                {post.id !== postId ? <RoundedSkeleton /> : <Save />}
                            </div>
                        </div>
                    </div>
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
