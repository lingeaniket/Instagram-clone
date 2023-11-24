import { apiSite } from "../../Website/website";
import { changeMode } from "../../Features/fullPostSlice";
import axios from "axios";
const userId = JSON.parse(localStorage.getItem("userId"));
export const handleImageLiked = (imagelikeref, likeref, setLiked, liked, setLikes, id, postId) => {
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

export const handleLiked = async (likeref, setLiked, liked, setLikes, id, postId) => {
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

export const addComment = async (e, userData, postId, comment, setReload, setComment) => {
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

export const generateUser = async () => {
    let id = generateRandom(1, 100);
    let account = await accountData(id);

    while (account.private) {
        id = generateRandom(1, 100);
        account = await accountData(id);
    }

    return { account, post: await loadPosts(id) };
};

const generateRandom = (first, last) => {
    return Math.floor(Math.random() * (last - first)) + first;
};

const accountData = async (id) => {
    const data = await axios.get(`${apiSite}/users/${id}`);
    return data.data;
};

const loadPosts = async (id) => {
    try {
        const promise = await axios.get(`${apiSite}/posts/${id}`);
        const randomPost = generateRandom(0, promise?.data?.posts?.length === 0 ? 0 : promise.data?.posts?.length - 1);
        return promise?.data?.posts[randomPost];
    } catch (err) {
        console.log(err);
    }
};
