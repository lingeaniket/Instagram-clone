import { apiSite } from "../../Website/website";
import { changeMode } from "../../Features/fullPostSlice";
import axios from "axios";
const userId = JSON.parse(localStorage.getItem("userId"));
export const handleImageLiked = (
    imagelikeref,
    likeref,
    setLiked,
    liked,
    setLikes,
    id,
    postId
) => {
    imagelikeref.current.classList.add("clicked");
    setTimeout(() => {
        imagelikeref.current.classList.remove("clicked");
    }, 1000);
    if (!liked) handleLiked(likeref, setLiked, liked, setLikes, id, postId);
};

const animateDiv = (likeref) => {
    likeref.current.classList.add("clicked");
    setTimeout(() => {
        likeref.current.classList.remove("clicked");
    }, 500);
};

export const handleLiked = async (
    likeref,
    setLiked,
    liked,
    setLikes,
    id,
    postId
) => {
    animateDiv(likeref);
    setLiked((prev) => !prev);
    if (liked) {
        setLikes((prev) => prev - 1);
    } else {
        setLikes((prev) => prev + 1);
    }
    if (liked) {
        await axios.put(`${apiSite}/posts/post-like`, {
            method: "unlike",
            user: userId,
            postUser: id,
            postId,
        });
    } else {
        await axios.put(`${apiSite}/posts/post-like`, {
            method: "like",
            user: userId,
            postUser: id,
            postId,
        });
    }
};

export const addComment = async (
    e,
    userData,
    postId,
    comment,
    setReload,
    setComment
) => {
    if (e.key === "Enter") {
        await axios
            .put(`${apiSite}/posts/add-comment`, {
                user: userId,
                postUser: userData.id,
                postId,
                comment,
            })
            .then(() => {
                setReload((prev) => !prev);
            });

        setComment("");
    }
};

export const handlePost = (dispatch, navigate, userData, postId) => {
    dispatch(changeMode("timeline"));
    setTimeout(() => {
        navigate(`/post?postUser=${userData.id}&postId=${postId}`);
        document.body.style.overflow = "hidden";
    }, 250);
};
