import axios from "axios";
import { useEffect, useState, memo, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import PostHeader from "./PostHeader/PostHeader";
import PostFooter from "./PostFooter/PostFooter";
import ImageLike from "../Icons/ImageLike/ImageLike";

import { apiSite } from "../../Website/website";
import { handleLikes, animateDiv, animateLike, handleLiked } from "./functions";

import "./post.css";
import "../Timeline/TimelineIn/timelineIn.css";
import "react-lazy-load-image-component/src/effects/blur.css";

const Post = ({ postId, id, type = "timeline", setStep }) => {
    const userId = JSON.parse(localStorage.getItem("userId"));

    const [post, setPost] = useState({});
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    const [reload, setReload] = useState(false);
    const [lastTap, setLastTap] = useState(0);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState({});
    const [lcpImageUrl, setLcpImageUrl] = useState("");
    const [imageLikeTimer, setImageLikeTimer] = useState(null);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const likeref = useRef(null);
    const imagelikeref = useRef(null);

    const handleImg2like = () => {
        const now = Date.now();
        const DOUBLE_TAP = 300;

        if (now - lastTap < DOUBLE_TAP) {
            handleImgLike();
        }

        setLastTap(now);
    };

    const handleImgLike = () => {
        if (imageLikeTimer) {
            clearTimeout(imageLikeTimer);
        }
        animateLike(imagelikeref);
        if (!liked) {
            animateDiv(likeref);
            setImageLikeTimer(
                setTimeout(() => {
                    handleLiked(liked, userData.id, postId);
                }, 1000)
            );
            handleLikes(liked, setLikes);
            setLiked((prev) => !prev);
        }
    };

    useEffect(() => {
        const loadData = async () => {
            await axios.get(`${apiSite}/posts/post?postUser=${id}&postId=${postId}`).then((response) => {
                setPost(() => response.data.post);
                const apiImageURL = `https://picsum.photos/id/${response.data.post.id}/500/500`;
                setLcpImageUrl(apiImageURL);
                const img = new Image();
                img.src = apiImageURL;
                img.onload = () => {
                    setIsImageLoaded(true);
                };
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

    return (
        <div className="timelineIn01 post001">
            <PostHeader userData={userData} loading={loading} />
            <div
                className="post008"
                style={{
                    position: "relative",
                    cursor: "auto",
                }}
            >
                {!isImageLoaded ? (
                    <div
                        style={{
                            width: "100%",
                            aspectRatio: "1/1",
                        }}
                    ></div>
                ) : (
                    <LazyLoadImage
                        onDoubleClick={handleImgLike}
                        onTouchStart={handleImg2like}
                        style={{
                            objectFit: "cover",
                            aspectRatio: "1/1",
                            verticalAlign: "middle",
                            touchAction: "manipulation",
                            cursor: "pointer",
                            userSelect: "none",
                            WebkitTapHighlightColor: "transparent",
                        }}
                        alt=""
                        // height={'auto'}
                        effect="blur"
                        src={lcpImageUrl}
                        width={"100%"}
                    />
                )}
                <div
                    className="heartIconDiv"
                    style={{
                        cursor: "pointer",
                    }}
                >
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
