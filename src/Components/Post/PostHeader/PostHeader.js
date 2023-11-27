import React, { useEffect, memo, useState } from "react";

import Options from "../../Icons/Options/Options";

import { Skeleton } from "@mui/material";
import RoundedImage from "../../RoundedImage/RoundedImage";
import AccModal from "../../RoundedImage/AccModal/AccModal";

const PostHeader = ({ userData }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (userData.id) {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    }, [userData]);

    return (
        <div className="post002">
            <div className="post003">
                <div className="post004">
                    {loading ? (
                        <Skeleton
                            variant="rectangle"
                            animation="wave"
                            sx={{
                                height: "100%",
                                width: "100%",
                            }}
                        />
                    ) : (
                        <RoundedImage url={userData?.avatar} user={userData} />
                    )}
                </div>
                <div className="post006">
                    <div className="post007 user-name">
                        {loading ? (
                            <Skeleton
                                variant="text"
                                animation="wave"
                                sx={{
                                    fontSize: "14px",
                                    width: "100px",
                                }}
                            />
                        ) : (
                            <>
                                <span>{userData.username}</span>
                                <AccModal user={userData} />
                            </>
                        )}
                    </div>
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
    );
};

export default memo(PostHeader);
