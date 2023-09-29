import axios from "axios";

import { apiSite } from "../../Website/website";

export const handleImagePostLiked = (
    imagelikeref,
    liked,
    userId,
    postUser,
    postId,
    setReload,
    setLiked,
    likeref
) => {
    imagelikeref.current.classList.add("clicked");
    setTimeout(() => {
        imagelikeref.current.classList.remove("clicked");
    }, 1000);
    if (!liked)
        handlePostLiked(liked, userId, postUser, postId, setReload, setLiked, likeref);
};

const animateDiv = (likeref) => {
    likeref.current.classList.add("clicked");
    setTimeout(() => {
        likeref.current.classList.remove("clicked");
    }, 500);
};

export const handlePostLiked = (
    liked,
    userId,
    postUser,
    postId,
    setReload,
    setLiked,
    likeref
) => {
    animateDiv(likeref);
    if (liked) {
        axios
            .put(`${apiSite}/posts/post-like`, {
                method: "unlike",
                user: userId,
                postUser,
                postId,
            })
            .then(() => {
                setReload((prev) => !prev);
            });
    } else {
        axios
            .put(`${apiSite}/posts/post-like`, {
                method: "like",
                user: userId,
                postUser,
                postId,
            })
            .then(() => {
                setReload((prev) => !prev);
            });
    }
    setLiked((liked) => !liked);
};
