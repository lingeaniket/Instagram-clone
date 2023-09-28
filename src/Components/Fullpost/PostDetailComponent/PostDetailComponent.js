import React, { useState, useEffect } from "react";
import Options from "../../Icons/Options/Options";
import axios from "axios";
import { apiSite } from "../../../Website/website";
import Like from "../../Icons/Like/Like";
import Comment from "../../Icons/Comment/Comment";
import Share from "../../Icons/Share/Share";
import CommentsComponent from "../CommentsComponent/CommentsComponent";
import { useSearchParams } from "react-router-dom";

const PostDetailComponent = ({ likeref, liked, handleLiked, post }) => {
    const [searchParams] = useSearchParams();
    const postUser = searchParams.get("postUser");
    const postId = searchParams.get("postId");
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const loadData = async () => {
            // await axios
            //     .get(
            //         `${apiSite}/posts/post?postUser=${postUser}&postId=${postId}`
            //     )
            //     .then((response) => {
            //         setPost(() => response.data.post);
            //     });

            await axios.get(`${apiSite}/users/${postUser}`).then((response) => {
                setUserData(() => response.data);
            });
        };
        loadData();
    }, [postUser, postId]);

    return (
        <div className="fullPost029 fullPost024 fullPost042">
            <div className="fullPost030 fullPost024 fullPost042">
                <div className="fullPost031">
                    <div className="fullPost032">
                        <div className="fullPost033">
                            <div>
                                <div className="fullPost034">
                                    {post?.collab ? (
                                        <>
                                            <div
                                                className="fullPost035"
                                                style={{
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                }}
                                            >
                                                <img
                                                    style={{
                                                        maxWidth: "100%",
                                                    }}
                                                    src={`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${userData?.avatar}.jpg`}
                                                    alt=""
                                                />
                                            </div>
                                            <div
                                                className="fullPost035"
                                                style={{
                                                    position: "absolute",
                                                    bottom: 0,
                                                    right: 0,
                                                }}
                                            >
                                                <img
                                                    style={{
                                                        maxWidth: "100%",
                                                    }}
                                                    src={`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${userData?.avatar}.jpg`}
                                                    alt=""
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        <div
                                            className="fullPost035"
                                            style={{
                                                height: "32px",
                                                width: "32px",
                                            }}
                                        >
                                            <img
                                                style={{
                                                    maxWidth: "100%",
                                                }}
                                                src={`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${userData?.avatar}.jpg`}
                                                alt=""
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="fullPost036 fullPost024 fullPost042">
                                <div className="fullPost037">
                                    <div className="fullPost038">
                                        <span className="fullPost039">
                                            {userData?.username}
                                        </span>
                                        {post?.collab && (
                                            <>
                                                <span className="fullPost040">
                                                    {" "}
                                                    and{" "}
                                                </span>
                                                <span className="fullPost039">
                                                    Aniket
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fullPost041">
                            <div className="fullPost006 fullPost016">
                                <Options />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fullPost043 fullPost042 fullPost024">
                    <div className="fullPost044">
                        <div
                            style={{
                                marginLeft: "-8px",
                            }}
                        >
                            <div
                                ref={likeref}
                                onClick={handleLiked}
                                className="fullPost045 fullPost016 fullPost006 animeicon"
                            >
                                <Like liked={liked} size={24} />
                            </div>
                        </div>
                        <div>
                            <div className="fullPost045 fullPost016 fullPost006">
                                <Comment />
                            </div>
                        </div>
                        <div>
                            <div className="fullPost045 fullPost016 fullPost006">
                                <Share />
                            </div>
                        </div>
                        <div
                            style={{
                                marginLeft: "auto",
                                marginRight: "-10px",
                            }}
                        >
                            <div className="fullPost045 fullPost016 fullPost006">
                                <Share />
                            </div>
                        </div>
                    </div>
                    <div
                        className="fullPost046"
                        style={{
                            fontSize: "12px",
                        }}
                    >
                        <span
                            style={{
                                fontWeight: "600",
                            }}
                        >
                            {post?.likes} likes
                        </span>
                    </div>
                    <CommentsComponent
                    
                    />
                    
                    <div className="fullPost072">
                        <span className="fullPost073">1 day ago</span>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default PostDetailComponent;
