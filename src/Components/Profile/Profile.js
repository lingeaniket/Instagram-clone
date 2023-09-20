import axios from "axios";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "./profile.css";
import Comment from "../Icons/Comment/Comment";
import Like from "../Icons/Like/Like";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import Tabs from "./Tabs/Tabs";
import FullPost from "../Fullpost/FullPost";
import { apiSite } from "../../Website/website";
import { arrayFill } from "./arrayFillFunction";

const Profile = ({ id }) => {
    const [userData, setUserData] = useState({});
    const [userPosts, setUserPosts] = useState([]);
    const [selectedPost, setSelectedpost] = useState(null);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        document.body.style.overflow = "auto";
        setOpen(() => false);
    };

    const handlePost = (id) => {
        handleClose();
        setSelectedpost(() => Number(id));
        setTimeout(() => {
            setOpen(() => true);
            document.body.style.overflow = "hidden";
        }, 250);
    };

    useEffect(() => {
        if (id) {
            axios.get(`${apiSite}/users/${id}`).then((response) => {
                setUserData(response.data);
            });
            axios.get(`${apiSite}/posts/${id}`).then((response) => {
                setUserPosts(response.data.posts);
                setSelectedpost(response.data.posts[0]); //for reference
            });
        }
    }, [id]);
    return (
        <div
            style={{
                width: "calc(100% - 40px)",
                padding: "35px 20px 0",
                margin: "0 auto 30px",
                maxWidth: "935px",
            }}
        >
            <ProfileHeader userData={userData} userPosts={userPosts} />
            <div
                style={{
                    marginBottom: "44px",
                    height: "130px",
                }}
            >
                <div
                    style={{
                        height: "100%",
                        display: "flex",
                    }}
                >
                    <ul
                        style={{
                            padding: 0,
                            display: "flex",
                            listStyleType: "none",
                        }}
                    >
                        <li
                            style={{
                                height: "100%",
                            }}
                        >
                            <div
                                style={{
                                    width: "125px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <div
                                    style={{
                                        cursor: "pointer",
                                        padding: "10px 15px",
                                        width: "115px",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "87px",
                                            height: "85px",
                                            border: "1px solid grey",
                                            borderRadius: "50%",
                                        }}
                                    ></div>
                                    <div
                                        style={{
                                            paddingTop: "15px",
                                            textAlign: "center",
                                            fontWeight: "600",
                                            fontSize: "12px",
                                        }}
                                    >
                                        heighlight
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <Tabs />
            <div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingBottom: "0px",
                        paddingTop: "0px",
                        position: "relative",
                    }}
                >
                    {Array.from({
                        length: Math.ceil(userPosts.length / 3),
                    }).map((val, i) => {
                        return (
                            <div
                                className="profPostsContainer"
                                style={{
                                    alignItems: "stretch",
                                    boxSizing: "border-box",
                                    display: "flex",
                                    flexShrink: 0,
                                    position: "relative",
                                    marginBottom: "4px",
                                }}
                            >
                                {arrayFill(
                                    userPosts.slice(i * 3, i * 3 + 3)
                                ).map((post, index) => (
                                    <div
                                        className="image-container"
                                        onClick={() =>
                                            handlePost(i * 3 + index)
                                        }
                                    >
                                        <div>
                                            <LazyLoadImage
                                                style={
                                                    {
                                                        // maxWidth: "100%",
                                                    }
                                                }
                                                effect="blur"
                                                src={`https://picsum.photos/id/${post?.id}/500/500`}
                                                alt=""
                                            />
                                        </div>
                                        <div className="hoverIcons">
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        marginRight: "30px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        fontSize: "16px",
                                                        fontWeight: "700",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            marginRight: "7px",
                                                        }}
                                                    >
                                                        <Like
                                                            liked={true}
                                                            white="white"
                                                        />
                                                    </div>{" "}
                                                    {post.likes}
                                                </div>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        fontSize: "16px",
                                                        fontWeight: "700",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            marginRight: "7px",
                                                        }}
                                                    >
                                                        <Comment
                                                            fill="white"
                                                            color="white"
                                                        />
                                                    </div>{" "}
                                                    {post?.comments?.length}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>
            </div>
            <FullPost
                post={selectedPost}
                open={open}
                handleClose={handleClose}
                userPosts={userPosts}
                setSelectedpost={setSelectedpost}
                userData={userData}
            />
        </div>
    );
};

export default Profile;
