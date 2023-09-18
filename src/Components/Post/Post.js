import { useEffect, useState, memo } from "react";
import axios from "axios";
import "../Timeline/TtimelineIn/timelineIn.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import BookmarkBorderSharpIcon from "@mui/icons-material/BookmarkBorderSharp";
import Comment from "./Comment/Comment";

const iconStyle = {
    fontSize: "24px",
};

const Post = ({ post, id }) => {
    const [userData, setUserData] = useState({});
    useEffect(() => {
        axios
            .get("https://instagram-api-aniket.onrender.com/api/v1/users")
            .then((response) => {
                setUserData(
                    response.data.users.filter((user) => user.id === id)[0]
                );
            });
        console.log("rendered");
    }, [id]);
    return (
        <div
            className="timelineIn01"
            style={{
                marginBottom: "12px",
                paddingBottom: "20px",
                borderBottom: "1px solid rgb(219,219,219)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    marginBottom: "15px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        margin: "8px 4px 8px 5px",
                        padding: "unset",
                    }}
                >
                    <div
                        style={{
                            height: "32px",
                            width: "32px",
                            position: "relative",
                            border: "0.5px solid rgba(0,0,0,0.4)",
                            borderRadius: "50%",
                            cursor: 'pointer'
                        }}
                    >
                        <img
                            style={{
                                borderRadius: "50%",
                                width: "100%",
                            }}
                            src={`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${userData.avatar}.jpg`}
                            alt="title1"
                        />
                    </div>
                    <div
                        style={{
                            padding: "0 15px",
                            fontSize: "14px",
                            fontWeight: "600",
                            display: "flex",
                            alignItems: "center",
                            
                        }}
                    >
                        <div style={{cursor: 'pointer'}}>{userData.username}</div>
                    </div>
                </div>
                <div>:</div>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    border: "1px solid rgb(239,239,239)",
                    borderRadius: "4px",
                }}
            >
                <LazyLoadImage
                    style={{
                        objectFit: "cover",
                    }}
                    alt=""
                    height={470}
                    effect="blur"
                    src={`https://picsum.photos/id/${post.id}/500/500`} // use normal <img> attributes as props
                    width={470}
                />
            </div>
            <div
                
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "4px 0",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            width: "28%",
                            justifyContent: "space-between",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                padding: "8px",
                                marginLeft: "-8px",
                                cursor: 'pointer'
                            }}
                        >
                            <svg
                                aria-label="Like"
                                class="x1lliihq x1n2onr6"
                                color="rgb(38, 38, 38)"
                                fill="rgb(38, 38, 38)"
                                height="24"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24"
                            >
                                <title>Like</title>
                                <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                            </svg>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                padding: "8px",
                                cursor: 'pointer'
                            }}
                        >
                            <svg
                                aria-label="Comment"
                                class="x1lliihq x1n2onr6"
                                color="rgb(0, 0, 0)"
                                fill="rgb(0, 0, 0)"
                                height="24"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24"
                            >
                                <title>Comment</title>
                                <path
                                    d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                ></path>
                            </svg>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                padding: "8px",
                                cursor: 'pointer'
                            }}
                        >
                            <svg
                                aria-label="Share Post"
                                class="x1lliihq x1n2onr6"
                                color="rgb(0, 0, 0)"
                                fill="rgb(0, 0, 0)"
                                height="24"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24"
                            >
                                <title>Share Post</title>
                                <line
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    x1="22"
                                    x2="9.218"
                                    y1="3"
                                    y2="10.083"
                                ></line>
                                <polygon
                                    fill="none"
                                    points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                                    stroke="currentColor"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                ></polygon>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                padding: "8px",
                                cursor: 'pointer'
                            }}
                        >
                            <svg
                                aria-label="Save"
                                class="x1lliihq x1n2onr6"
                                color="rgb(0, 0, 0)"
                                fill="rgb(0, 0, 0)"
                                height="24"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24"
                            >
                                <title>Save</title>
                                <polygon
                                    fill="none"
                                    points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                ></polygon>
                            </svg>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        fontWeight: "600",
                        lineHeight: "18px",
                        cursor: 'pointer'
                    }}
                >
                    {post.likes} likes
                </div>
                <div
                    style={{
                        marginTop: "8px",
                    }}
                >
                    <span
                        style={{
                            fontWeight: "600",
                            cursor: 'pointer'
                        }}
                    >
                        {userData?.username}
                    </span>{" "}
                    {post.caption}
                </div>
                <div
                    style={{
                        marginTop: "8px",
                    }}
                >
                    {post.comments.slice(0, 2).map((comment) => (
                        <Comment comment={comment} />
                    ))}
                </div>
                <div
                    style={{
                        color: "rgb(116,116,116)",
                        marginTop: "8px",
                        cursor: 'pointer'
                    }}
                >
                    View all {post.comments.length} comments
                </div>
                <div
                    style={{
                        marginTop: "8px",
                    }}
                >
                    <input
                        style={{
                            width: "100%",
                            border: "none",
                            height: "18px",
                            outline: "none",
                        }}
                        placeholder="Add a comment..."
                    />
                </div>
            </div>
        </div>
    );
};

export default memo(Post);
