import React, { useState, useEffect, memo } from "react";
import Options from "../../Icons/Options/Options";
import axios from "axios";
import { apiSite } from "../../../Website/website";
import Like from "../../Icons/Like/Like";
import Comment from "../../Icons/Comment/Comment";
import Share from "../../Icons/Share/Share";
import CommentsComponent from "../CommentsComponent/CommentsComponent";
import { useSearchParams } from "react-router-dom";
import { Skeleton } from "@mui/material";
import Save from "../../Icons/Save/Save";

const PostDetailComponent = ({ likeref, liked, handleLiked, post }) => {
    const [searchParams] = useSearchParams();
    const postUser = searchParams.get("postUser");
    const postId = Number(searchParams.get("postId"));
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        setLoading(true);
        const loadData = async () => {
            await axios.get(`${apiSite}/users/${postUser}`).then((response) => {
                setUserData(() => response.data);
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
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
                                                {loading ? (
                                                    <>
                                                        <Skeleton
                                                            variant="rectangle"
                                                            animation="wave"
                                                            sx={{
                                                                height: "100%",
                                                                width: "100%",
                                                            }}
                                                        />
                                                    </>
                                                ) : (
                                                    <img
                                                        style={{
                                                            maxWidth: "100%",
                                                        }}
                                                        src={`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${userData?.avatar}.jpg`}
                                                        alt=""
                                                    />
                                                )}
                                            </div>
                                            <div
                                                className="fullPost035"
                                                style={{
                                                    position: "absolute",
                                                    bottom: 0,
                                                    right: 0,
                                                }}
                                            >
                                                {loading ? (
                                                    <>
                                                        <Skeleton
                                                            variant="rectangle"
                                                            animation="wave"
                                                            sx={{
                                                                height: "100%",
                                                                width: "100%",
                                                            }}
                                                        />
                                                    </>
                                                ) : (
                                                    <img
                                                        style={{
                                                            maxWidth: "100%",
                                                        }}
                                                        src={`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${userData?.avatar}.jpg`}
                                                        alt=""
                                                    />
                                                )}
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
                                            {loading ? (
                                                <>
                                                    <Skeleton
                                                        variant="rectangle"
                                                        animation="wave"
                                                        sx={{
                                                            height: "100%",
                                                            width: "100%",
                                                        }}
                                                    />
                                                </>
                                            ) : (
                                                <img
                                                    style={{
                                                        maxWidth: "100%",
                                                    }}
                                                    src={`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${userData?.avatar}.jpg`}
                                                    alt=""
                                                />
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="fullPost036 fullPost024 fullPost042">
                                <div className="fullPost037">
                                    <div className="fullPost038">
                                        <span className="fullPost039">
                                            {
                                                loading ? <>
                                                <Skeleton variant="text" animation="wave" sx={{
                                                    fontSize: '16px',
                                                    width: '100px'
                                                }}/>
                                                </>
                                                :
                                                <>
                                                {userData?.username}
                                                </>

                                            }
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
                                {post.id !== postId ? (
                                    <Skeleton
                                        variant="rounded"
                                        sx={{
                                            width: "24px",
                                            height: "24px",
                                        }}
                                    />
                                ) : (
                                    <Like liked={liked} size={24} />
                                )}
                            </div>
                        </div>
                        <div>
                            <div className="fullPost045 fullPost016 fullPost006">
                                {post.id !== postId ? (
                                    <Skeleton
                                        variant="rounded"
                                        sx={{
                                            width: "24px",
                                            height: "24px",
                                        }}
                                    />
                                ) : (
                                    <Comment />
                                )}
                            </div>
                        </div>
                        <div>
                            <div className="fullPost045 fullPost016 fullPost006">
                                {post.id !== postId ? (
                                    <Skeleton
                                        variant="rounded"
                                        sx={{
                                            width: "24px",
                                            height: "24px",
                                        }}
                                    />
                                ) : (
                                    <Share />
                                )}
                            </div>
                        </div>
                        <div
                            style={{
                                marginLeft: "auto",
                                marginRight: "-10px",
                            }}
                        >
                            <div className="fullPost045 fullPost016 fullPost006">
                                {post.id !== postId ? (
                                    <Skeleton
                                        variant="rounded"
                                        sx={{
                                            width: "24px",
                                            height: "24px",
                                        }}
                                    />
                                ) : (
                                    <Save />
                                )}
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
                            {post.id !== postId ? (
                                <Skeleton
                                    variant="text"
                                    sx={{
                                        fontSize: "14px",
                                        width: "50px",
                                    }}
                                />
                            ) : (
                                <>{post?.likes} likes</>
                            )}
                        </span>
                    </div>
                    <CommentsComponent />

                    <div className="fullPost072">
                        <span className="fullPost073">1 day ago</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(PostDetailComponent);
