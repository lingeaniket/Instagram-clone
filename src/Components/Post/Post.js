import axios from "axios";
import { useEffect, useState, memo, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import PostHeader from "./PostHeader/PostHeader";
import PostFooter from "./PostFooter/PostFooter";
import ImageLike from "../Icons/ImageLike/ImageLike";

import { apiSite } from "../../Website/website";
import { handleImageLiked } from "./functions";

import "./post.css";
import "../Timeline/TimelineIn/timelineIn.css";
import "react-lazy-load-image-component/src/effects/blur.css";

const Post = ({ postId, id, type = "timeline", setStep }) => {
    const userId = JSON.parse(localStorage.getItem("userId"));

    const [post, setPost] = useState({});
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    const [reload, setReload] = useState(false);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState({});

    const likeref = useRef(null);
    const imagelikeref = useRef(null);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };
    const handleImgLike = () => {
        handleImageLiked(imagelikeref, likeref, setLiked, liked, setLikes, userData.id, postId);
    };

    useEffect(() => {
        const loadData = async () => {
            await axios.get(`${apiSite}/posts/post?postUser=${id}&postId=${postId}`).then((response) => {
                setPost(() => response.data.post);
                setLikes(() => response.data.post.likes);
                setLiked(() => response.data.post.likedBy?.includes(userId));
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            });
        };
        loadData();
        // eslint-disable-next-line
    }, [reload]);

    useEffect(() => {
        setLoading(true);
        const loadData = async () => {
            await axios.get(`${apiSite}/users/${id}`).then((response) => {
                setUserData(response.data);
            });
        };
        loadData();
        // eslint-disable-next-line
    }, [id]);

    useEffect(() => {
        setWindowWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div
            className="timelineIn01 post001"
            style={{
                width: windowWidth < 500 ? "100%" : "470px",
            }}
        >
            <PostHeader userData={userData} loading={loading} />
            <div
                className="post008"
                style={{
                    position: "relative",
                    cursor: "pointer",
                }}
            >
                {loading ? (
                    <div
                        style={{
                            width: "100%",
                            aspectRatio: "1/1",
                        }}
                    ></div>
                ) : (
                    <LazyLoadImage
                        onDoubleClick={handleImgLike}
                        style={{
                            objectFit: "cover",
                            aspectRatio: "1/1",
                            verticalAlign: "middle",
                        }}
                        alt=""
                        // height={'auto'}
                        effect="blur"
                        src={`https://picsum.photos/id/${post.id}/500/500`}
                        width={"100%"}
                    />
                )}
                <div className="heartIconDiv">
                    <div ref={imagelikeref} className="heart_icon">
                        <ImageLike />
                    </div>
                </div>
            </div>
            <PostFooter
                type={type}
                setStep={setStep}
                setLiked={setLiked}
                liked={liked}
                likeref={likeref}
                setLikes={setLikes}
                postId={postId}
                userData={userData}
                likes={likes}
                post={post}
                setReload={setReload}
                loading={loading}
            />
        </div>
    );
};

export default memo(Post);
