import "./fullPost.css";
import Close from "../Icons/Close/Close";
import Back from "../Icons/Back/Back";
import axios from "axios";
import { apiSite } from "../../Website/website";

import ImageComponent from "./ImageComponent/ImageComponent";
import PostDetailComponent from "./PostDetailComponent/PostDetailComponent";
import { useEffect, useRef, useState } from "react";
import * as React from "react";

const FullPost = ({
    post,
    open,
    handleClose,
    userPosts = [],
    setSelectedpost,
    userData,
    explore = false,
    timeline = false,
    setReload,
}) => {
    const imageRef = useRef();
    const userId = JSON.parse(localStorage.getItem("userId"));
    const likeref = useRef(null);
    const imagelikeref = useRef(null);
    const detailRef = useRef();
    const prevBtnRef = useRef();
    const nextBtnRef = useRef();
    const [selected, setSelected] = useState({});
    const [liked, setLiked] = useState(false);

    const handleImageLiked = () => {
        imagelikeref.current.classList.add("clicked");
        setTimeout(() => {
            imagelikeref.current.classList.remove("clicked");
            console.log("is called?");
        }, 1000);
        if (!liked) handleLiked();
    };
    const animateDiv = () => {
        likeref.current.classList.add("clicked");
        setTimeout(() => {
            likeref.current.classList.remove("clicked");
        }, 500);
    };

    

    const handleLiked = () => {
        animateDiv();
        if (liked) {
            axios
                .put(`${apiSite}/posts/post-like`, {
                    method: "unlike",
                    user: userId,
                    postUser: userData.id,
                    postId: post.id,
                })
                .then(() => {
                    setReload((prev) => !prev);
                });
        } else {
            axios
                .put(`${apiSite}/posts/post-like`, {
                    method: "like",
                    user: userId,
                    postUser: userData.id,
                    postId: post.id,
                })
                .then(() => {
                    setReload((prev) => !prev);
                });
        }
        setLiked((liked) => !liked);
    };

    const handleNext = () => {
        setSelectedpost((prev) => prev + 1);
    };

    const handlePrev = () => {
        setSelectedpost((prev) => prev - 1);
    };

    const handleModalClose = (e) => {
        if (
            !(
                imageRef.current.contains(e.target) ||
                detailRef.current.contains(e.target) ||
                (prevBtnRef.current && prevBtnRef.current.contains(e.target)) ||
                (nextBtnRef.current && nextBtnRef.current.contains(e.target))
            )
        ) {
            handleClose();
        }
    };

    useEffect(() => {
        if (explore) {
            setSelected(() => userPosts[post]?.post);
            setLiked(() => userPosts[post]?.post?.likedBy?.includes(userId));
        } else if (timeline) {
            setSelected(() => post);
            setLiked(() => post?.likedBy?.includes(userId));
        } else {
            setSelected(() => userPosts[post]);
            setLiked(() => userPosts[post]?.likedBy?.includes(userId));
        }
        // eslint-disable-next-line
    }, [post, userPosts]);

    return (
        <div
            className="fullPost001"
            style={{
                display: `${open ? "block" : "none"}`,
            }}
        >
            <div className="fullPost002">
                <div className="fullPost003" onClick={handleModalClose}>
                    <div className="fullPost004"></div>
                    <div className="fullPost005" onClick={handleClose}>
                        <div className="fullPost006 fullPost016">
                            <Close color="white" size="18" title="close" />
                        </div>
                    </div>
                    <div className="fullPost007">
                        <div
                            className="fullPost008 fullPost042"
                            style={{
                                width: "100%",
                            }}
                        >
                            <div className="fullPost009">
                                <div className="fullPost010 fullPost063 fullPost016">
                                    <div
                                        className="fullPost011"
                                        style={{
                                            justifyContent: "center",
                                        }}
                                    >
                                        <div>
                                            <div className="fullPost012 fullPost063">
                                                {!explore && (
                                                    <div className="fullPost013 fullPost063">
                                                        {post > 0 && (
                                                            <div
                                                                className="fullPost014"
                                                                style={{
                                                                    left: 0,
                                                                }}
                                                                onClick={
                                                                    handlePrev
                                                                }
                                                                ref={prevBtnRef}
                                                            >
                                                                <button className="fullPost015 fullPost016 fullPost006">
                                                                    <div className="fullPost016">
                                                                        <span className="fullPost017">
                                                                            <Back title="Go back" />
                                                                        </span>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        )}
                                                        {post <
                                                            userPosts.length -
                                                                1 && (
                                                            <div
                                                                className="fullPost014"
                                                                style={{
                                                                    right: 0,
                                                                }}
                                                                onClick={
                                                                    handleNext
                                                                }
                                                                ref={nextBtnRef}
                                                            >
                                                                <button className="fullPost015 fullPost016 fullPost006">
                                                                    <div className="fullPost016">
                                                                        <span className="fullPost018">
                                                                            <Back title="Next" />
                                                                        </span>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div
                                            className="fullPost019"
                                            style={{
                                                alignItems: "stretch",
                                            }}
                                        >
                                            <div className="fullPost020 fullPost042">
                                                <div
                                                    style={{
                                                        width: "100%",
                                                        maxHeight: "inherit",
                                                        padding: "0",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            maxHeight:
                                                                "inherit",
                                                            maxWidth: "inherit",
                                                            overflow: "visible",
                                                            alignContent:
                                                                "stretch",
                                                            flexShrink: 0,
                                                            alignSelf: "auto",
                                                            flexGrow: 0,
                                                        }}
                                                    >
                                                        <div className="fullPost021">
                                                            <div
                                                                className="fullPost022 fullPost024 fullPost042"
                                                                ref={imageRef}
                                                            >
                                                                <ImageComponent
                                                                    handleImageLiked={
                                                                        handleImageLiked
                                                                    }
                                                                    imagelikeref={
                                                                        imagelikeref
                                                                    }
                                                                    id={
                                                                        selected?.id
                                                                    }
                                                                />
                                                            </div>

                                                            <div
                                                                className="fullPost028 fullPost062 fullPost024 fullPost042"
                                                                ref={detailRef}
                                                            >
                                                                <PostDetailComponent
                                                                    post={
                                                                        selected
                                                                    }
                                                                    setReload={
                                                                        setReload
                                                                    }
                                                                    handleLiked={
                                                                        handleLiked
                                                                    }
                                                                    likeref={
                                                                        likeref
                                                                    }
                                                                    userData={
                                                                        userData
                                                                    }
                                                                    liked={
                                                                        liked
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

export default FullPost;
