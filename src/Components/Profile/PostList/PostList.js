import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { arrayFill } from "../arrayFillFunction";

import Like from "../../Icons/Like/Like";
import "./postList.css";
import Comment from "../../Icons/Comment/Comment";
import { useNavigate } from "react-router-dom";
import { changeMode, updatePostArray } from "../../../Features/fullPostSlice";
import { useDispatch } from "react-redux";

const PostList = ({ userPosts, userData, modeId }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(updatePostArray(userPosts.flat()));
    const handlePost = (id) => {
        if (modeId) {
            dispatch(changeMode("userProfile"));
            navigate(
                `/p/${modeId}/post?postUser=${userData.id}&postId=${userPosts[id].id}`
            );
        } else {
            dispatch(changeMode("profile"));
            navigate(
                `/profile/post?postUser=${userData.id}&postId=${userPosts[id].id}`
            );
        }
        document.body.style.overflow = "hidden";
    };
    return (
        <div>
            <div className="postList001">
                {Array.from({
                    length: Math.ceil(userPosts.length / 3),
                }).map((val, i) => {
                    return (
                        <div className="profPostsContainer postList002">
                            {arrayFill(userPosts.slice(i * 3, i * 3 + 3)).map(
                                (post, index) => (
                                    <div
                                        style={{
                                            pointerEvents: `${
                                                i * 3 + index >=
                                                userPosts.length
                                                    ? "none"
                                                    : ""
                                            }`,
                                        }}
                                        className="image-container"
                                        onClick={() =>
                                            handlePost(i * 3 + index)
                                        }
                                    >
                                        <div>
                                            <LazyLoadImage
                                                effect="blur"
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
                                )
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PostList;
