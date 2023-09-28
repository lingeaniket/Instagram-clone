import { useEffect, useState, memo, useRef } from "react";
import axios from "axios";
import "../Timeline/TtimelineIn/timelineIn.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import CommentIcon from "../Icons/Comment/Comment";
import Comment from "./Comment/Comment";
import "./post.css";
import Share from "../Icons/Share/Share";
import Save from "../Icons/Save/Save";
import Like from "../Icons/Like/Like";
import Options from "../Icons/Options/Options";
import ImageLike from "../Icons/ImageLike/ImageLike";
import { apiSite } from "../../Website/website";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeMode } from "../../Features/fullPostSlice";

const Post = ({ postId, id }) => {
    const [userData, setUserData] = useState({});
    const dispatch = useDispatch();
    const [post, setPost] = useState({});
    const userId = JSON.parse(localStorage.getItem("userId"));
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);
    const [reload, setReload] = useState(false);
    const [comment, setComment] = useState("");

    const handleComment = (e) => {
        setComment(() => e.target.value);
    };

    const addComment = async (e) => {
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

    const likeref = useRef(null);
    const imagelikeref = useRef(null);

    const navigate = useNavigate();


    const handlePost = () => {
        dispatch(changeMode("timeline"));
        setTimeout(() => {
            navigate(`/post?postUser=${userData.id}&postId=${postId}`);
            document.body.style.overflow = "hidden";
        }, 250);
    };

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

    const handleLiked = async () => {
        animateDiv();
        console.log(liked);
        if (liked) {
            axios
                .put(`${apiSite}/posts/post-like`, {
                    method: "unlike",
                    user: userId,
                    postUser: id,
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
                    postUser: id,
                    postId,
                })
                .then(() => {
                    setReload((prev) => !prev);
                });
        }
        setLiked((liked) => !liked);
    };

    const handleSaved = () => {
        setSaved((saved) => !saved);
    };

    const handleNavigate = () => {
        navigate(`/p/${id}`);
    };

    useEffect(() => {
        const loadData = async () => {
            await axios
                .get(`${apiSite}/posts/post?postUser=${id}&postId=${postId}`)
                .then((response) => {
                    // console.log(response.data);
                    setPost(() => response.data.post);
                    setLiked(() =>
                        response.data.post.likedBy?.includes(userId)
                    );
                });
        };
        loadData();
        // eslint-disable-next-line
    }, [reload]);

    useEffect(() => {
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
            <div className="post002">
                <div className="post003">
                    <div className="post004" onClick={handleNavigate}>
                        <img
                            className="post005"
                            src={`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${userData.avatar}.jpg`}
                            alt="title1"
                        />
                    </div>
                    <div className="post006">
                        <div className="post007">{userData.username}</div>
                    </div>
                </div>
                <div
                    className="post007"
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                    }}
                >
                    <Options />
                </div>
            </div>
            <div
                className="post008"
                style={{
                    position: "relative",
                    cursor: "pointer",
                }}
            >
                <LazyLoadImage
                    onDoubleClick={handleImageLiked}
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
            <div>
                <div className="post009">
                    <div className="post010">
                        <div
                            ref={likeref}
                            className={`post011 post012 animeicon`}
                            onClick={handleLiked}
                        >
                            <Like liked={liked} size={24} />
                        </div>
                        <div className="post011 post019" onClick={handlePost}>
                            <CommentIcon />
                        </div>
                        <div className="post011 post019">
                            <Share />
                        </div>
                    </div>
                    <div>
                        <div
                            className={`post011 post018 ${
                                !saved ? "post019" : ""
                            }`}
                            onClick={handleSaved}
                        >
                            <Save saved={saved} />
                        </div>
                    </div>
                </div>
                <div className="post013">{post.likes} likes</div>
                <div className="post014">
                    <span className="post015">{userData?.username}</span>{" "}
                    {post.caption}
                </div>
                <div className="post014">
                    {post?.comments?.slice(0, 2).map((comment) => (
                        <Comment comment={comment} />
                    ))}
                </div>
                <div className="post016" onClick={handlePost}>
                    View all {post?.comments?.length} comments
                </div>
                <div className="post014">
                    <input
                        className="post017"
                        placeholder="Add a comment..."
                        value={comment}
                        onChange={handleComment}
                        onKeyDown={addComment}
                    />
                </div>
            </div>
            {/* {open && (
                <FullPost
                    setReload={setReload}
                    post={post}
                    open={open}
                    handleClose={handleClose}
                    // userPosts={userPosts}
                    // setSelectedpost={setSelectedpost}
                    userData={userData}
                    timeline={true}
                />
            )} */}
        </div>
    );
};

export default memo(Post);
