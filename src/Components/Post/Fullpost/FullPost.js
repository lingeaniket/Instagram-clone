import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import { apiSite } from "../../../Website/website";
import { handleImagePostLiked, handlePostLiked } from "./functions";

import Post from "../Post";
import Modal from "../../Modal/Modal";
import Navigation from "./Navigation/Navigation";
import ImageComponent from "./LeftComponent/ImageComponent";
import PostDetailComponent from "./RightComponent/PostDetailComponent";

import "./fullPost.css";

const FullPost = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const postId = Number(searchParams.get("postId"));
    const postUser = Number(searchParams.get("postUser"));

    const userId = JSON.parse(localStorage.getItem("userId"));

    const fullPostMode = useSelector((state) => state.fullPostData.mode);
    const fullPostData = useSelector((state) => state.fullPostData.postArray);

    const navigate = useNavigate();

    const likeref = useRef(null);
    const imageRef = useRef();
    const detailRef = useRef();
    const prevBtnRef = useRef();
    const nextBtnRef = useRef();
    const imagelikeref = useRef(null);
    const mobileViewRef = useRef(null);

    const [post, setPost] = useState({});
    const [count, setCount] = useState(1);
    const [liked, setLiked] = useState(false);
    const [reload, setReload] = useState(false);
    const [postIndex, setPostIndex] = useState(0);

    const handleClose = () => {
        document.body.style.overflow = "auto";
        navigate(0 - count);
    };

    const handleImageLiked = () => {
        handleImagePostLiked(imagelikeref, liked, userId, postUser, postId, setReload, setLiked, likeref);
    };

    const handleLiked = () => {
        handlePostLiked(liked, userId, postUser, postId, setReload, setLiked, likeref);
    };

    const handleNext = () => {
        setCount((prev) => prev + 1);
        searchParams.set("postId", fullPostData[postIndex + 1].id);
        setPostIndex((prev) => prev + 1);
        setSearchParams(searchParams);
    };

    const handlePrev = () => {
        setCount((prev) => prev + 1);
        searchParams.set("postId", fullPostData[postIndex - 1].id);
        setPostIndex((prev) => prev - 1);
        setSearchParams(searchParams);
    };

    const handleModalClose = (e) => {
        if (
            !(
                imageRef.current.contains(e.target) ||
                (detailRef.current && detailRef.current.contains(e.target)) ||
                (mobileViewRef.current && mobileViewRef.current.contains(e.target)) ||
                (prevBtnRef.current && prevBtnRef.current.contains(e.target)) ||
                (nextBtnRef.current && nextBtnRef.current.contains(e.target))
            )
        ) {
            handleClose();
        }
    };

    useEffect(() => {
        const loadData = async () => {
            if (fullPostMode !== "explore") {
                const index = fullPostData.findIndex((data) => data.id === Number(postId));
                setPostIndex(index);
            }
            await axios.get(`${apiSite}/posts/post?postUser=${postUser}&postId=${postId}`).then((response) => {
                setPost(() => response.data.post);
                setLiked(() => response.data.post?.likedBy?.includes(userId));
            });
        };
        loadData();
    }, [postUser, postId, reload, userId, fullPostData, fullPostMode]);

    return (
        <Modal handleModalClose={handleModalClose}>
            <div></div>
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
                            <Navigation
                                postIndex={postIndex}
                                handlePrev={handlePrev}
                                prevBtnRef={prevBtnRef}
                                handleNext={handleNext}
                                nextBtnRef={nextBtnRef}
                            />
                            <div
                                className="fullPost019"
                                style={{
                                    alignItems: "stretch",
                                }}
                            >
                                <div className="fullPost020 fullPost042">
                                    <div className="fullPost082">
                                        <div className="fullPost083">
                                            <div className="fullPost021">
                                                <div className="fullPost022 fullPost024 fullPost042" ref={imageRef}>
                                                    <ImageComponent handleImageLiked={handleImageLiked} imagelikeref={imagelikeref} />
                                                </div>

                                                <div className="fullPost028 fullPost062 fullPost024 fullPost042" ref={detailRef}>
                                                    <PostDetailComponent
                                                        post={post}
                                                        setReload={setReload}
                                                        handleLiked={handleLiked}
                                                        likeref={likeref}
                                                        liked={liked}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fullPost086" ref={mobileViewRef}>
                                    <Post postId={postId} id={postUser} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default FullPost;
