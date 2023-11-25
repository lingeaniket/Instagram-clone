import axios from "axios";
import { useSearchParams } from "react-router-dom";
import React, { useEffect, useState, memo } from "react";

import Options from "../../../../Icons/Options/Options";
import RoundedImage from "../../../../RoundedImage/RoundedImage";

import { apiSite } from "../../../../../Website/website";

import { Skeleton } from "@mui/material";

const SkeletonDiv = () => {
    return (
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
    );
};

const PostDetailsHeader = ({ post, setLoading }) => {
    const [searchParams] = useSearchParams();
    const postUser = searchParams.get("postUser");
    const postId = Number(searchParams.get("postId"));

    const [loaded, setLoaded] = useState(false);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        setLoading(true);
        const loadData = async () => {
            await axios.get(`${apiSite}/users/${postUser}`).then((response) => {
                setUserData(() => response.data);
                setTimeout(() => {
                    setLoading(false);
                    setLoaded(true);
                }, 1000);
            });
        };

        loadData();
    }, [postUser, postId, setLoading]);

    return (
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
                                        {!loaded ? (
                                            <SkeletonDiv />
                                        ) : (
                                            <RoundedImage url={userData?.avatar} />
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
                                        {!loaded ? (
                                            <SkeletonDiv />
                                        ) : (
                                            <RoundedImage url={userData?.avatar} />
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
                                    {!loaded ? (
                                        <SkeletonDiv />
                                    ) : (
                                        <RoundedImage url={userData?.avatar} />
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="fullPost036 fullPost024 fullPost042">
                        <div className="fullPost037">
                            <div className="fullPost038">
                                <span className="fullPost039">
                                    {!loaded ? (
                                        <>
                                            <Skeleton
                                                variant="text"
                                                animation="wave"
                                                sx={{
                                                    fontSize: "16px",
                                                    width: "100px",
                                                }}
                                            />
                                        </>
                                    ) : (
                                        <>{userData?.username}</>
                                    )}
                                </span>
                                {post?.collab && (
                                    <>
                                        <span className="fullPost040"> and </span>
                                        <span className="fullPost039">Aniket</span>
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
    );
};

export default memo(PostDetailsHeader);
