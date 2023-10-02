import { useEffect, useState, memo, useRef } from "react";
import axios from "axios";
import "../Timeline/TtimelineIn/timelineIn.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./post.css";
import ImageLike from "../Icons/ImageLike/ImageLike";
import { apiSite } from "../../Website/website";
import PostHeader from "./PostHeader/PostHeader";
import PostFooter from "./PostFooter/PostFooter";
import { handleImageLiked } from "./functions";

const Post = ({ postId, id }) => {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState({});
    const userId = JSON.parse(localStorage.getItem("userId"));
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(0);
    const [reload, setReload] = useState(false);

    const imagelikeref = useRef(null);
    const likeref = useRef(null);

    const handleImgLike = () => {
        handleImageLiked(
            imagelikeref,
            likeref,
            setLiked,
            liked,
            setLikes,
            userData.id,
            postId
        );
    };

    useEffect(() => {
        const loadData = async () => {
            await axios
                .get(`${apiSite}/posts/post?postUser=${id}&postId=${postId}`)
                .then((response) => {
                    setPost(() => response.data.post);
                    setLikes(() => response.data.post.likes);
                    setLiked(() =>
                        response.data.post.likedBy?.includes(userId)
                    );
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
                    cursor: "pointer",
                }}
            >
                <LazyLoadImage
                    onDoubleClick={handleImgLike}
                    style={{
                        objectFit: "cover",
                    }}
                    alt=""
                    height={470}
                    effect="blur"
                    src={`https://picsum.photos/id/${post.id}/500/500`}
                    width={470}
                />
                <div className="heartIconDiv">
                    <div ref={imagelikeref} className="heart_icon">
                        <ImageLike />
                    </div>
                </div>
            </div>
            <PostFooter
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
