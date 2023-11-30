import React, { memo, useCallback, useState } from "react";

import List from "../../Profile/ProfileHeader/SingleList/List";
import Arrow from "../../Icons/Arrow/Arrow";

import "./accModal.css";
import PostComponent from "./PostComponent";
import { Skeleton } from "@mui/material";

const Loading = ({ id }) => {
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
            }}
        >
            {id === 1 ? (
                <Skeleton
                    sx={{
                        width: "33%",
                    }}
                />
            ) : (
                <Skeleton
                    sx={{
                        width: "50%",
                    }}
                />
            )}
        </div>
    );
};

const AccModal = ({ user }) => {
    const [posts, setPosts] = useState(0);
    const [loading, setLoading] = useState(true);

    const handleNoOfPosts = useCallback((post) => {
        setLoading(false);
        setPosts(post);
    }, []);

    return (
        <div className="user-photo-modal user-photo-modal-transition">
            <div className="accModal001">
                <div>
                    <div className="w_100 accModal002">
                        <List loading={false} user={user} modalRequired={false} type="profile" />
                    </div>
                </div>
                <div>
                    <div className="accModal003">
                        {/* list */}
                        <div className="accModal004">
                            <div>
                                {loading ? (
                                    <Loading id={1} />
                                ) : (
                                    <div className="accModal005">
                                        <span className="accModal006">{posts}</span>
                                    </div>
                                )}
                            </div>
                            <div className="accModal007">
                                {loading ? (
                                    <Loading id={2} />
                                ) : (
                                    <div className="accModal008">
                                        <span className="accModal006">posts</span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="accModal004">
                            <div>
                                {user?.followers ? (
                                    <div className="accModal005">
                                        <span className="accModal006">{user?.followers?.length}</span>
                                    </div>
                                ) : (
                                    <Loading id={1} />
                                )}
                            </div>
                            <div className="accModal007">
                                {user?.followers ? (
                                    <div className="accModal008">
                                        <span className="accModal006">followers</span>
                                    </div>
                                ) : (
                                    <Loading id={2} />
                                )}
                            </div>
                        </div>
                        <div className="accModal004">
                            <div>
                                {user?.followings ? (
                                    <div className="accModal005">
                                        <span className="accModal006">{user?.followings?.length}</span>
                                    </div>
                                ) : (
                                    <Loading id={1} />
                                )}
                            </div>
                            <div className="accModal007">
                                {user?.followings ? (
                                    <div className="accModal008">
                                        <span className="accModal006">followings</span>
                                    </div>
                                ) : (
                                    <Loading id={2} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <PostComponent id={user?.id} setPost={handleNoOfPosts} />
                </div>
                <div>
                    <div className="accModal012">
                        <button className="accModal013">
                            <div className="accModal014">
                                <div className="accModal015">Following</div>
                                <div className="accModal016">
                                    <span className="accModal017">
                                        <Arrow />
                                    </span>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(AccModal);
