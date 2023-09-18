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

const Post = ({ post, id }) => {
    const [userData, setUserData] = useState({});
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);

    const likeref = useRef(null);
    const imagelikeref = useRef(null);

    const handleImageLiked = (e) => {
        imagelikeref.current.classList.add("clicked");
        // console.log("is called?")
        setTimeout(() => {
            imagelikeref.current.classList.remove("clicked");
            console.log("is called?");
            // console.log(imagelikeref.current.classList)
        }, 1200);
        if (!liked) handleLiked(e);
    };

    const animateDiv = () => {
        likeref.current.classList.add("clicked");
        setTimeout(() => {
            likeref.current.classList.remove("clicked");
        }, 500);
    };

    const handleLiked = (e) => {
        animateDiv();
        setLiked((liked) => !liked);
    };
    const handleSaved = () => {
        setSaved((saved) => !saved);
    };
    useEffect(() => {
        axios
            .get("https://instagram-api-aniket.onrender.com/api/v1/users")
            .then((response) => {
                setUserData(
                    response.data.users.filter((user) => user.id === id)[0]
                );
            });
    }, [id]);
    return (
        <div className="timelineIn01 post001">
            <div className="post002">
                <div className="post003">
                    <div className="post004">
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
                            className="post011 post012 animeicon"
                            onClick={handleLiked}
                        >
                            <Like liked={liked} />
                        </div>
                        <div className="post011">
                            <CommentIcon />
                        </div>
                        <div className="post011">
                            <Share />
                        </div>
                    </div>
                    <div>
                        <div className="post011 post018" onClick={handleSaved}>
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
                    {post.comments.slice(0, 2).map((comment) => (
                        <Comment comment={comment} />
                    ))}
                </div>
                <div className="post016">
                    View all {post.comments.length} comments
                </div>
                <div className="post014">
                    <input className="post017" placeholder="Add a comment..." />
                </div>
            </div>
        </div>
    );
};

export default memo(Post);
