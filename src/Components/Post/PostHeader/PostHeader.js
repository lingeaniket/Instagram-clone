import { useNavigate } from "react-router-dom";
import React, { useEffect, memo, useState } from "react";

import Options from "../../Icons/Options/Options";

import { Skeleton } from "@mui/material";
import RoundedImage from "../../RoundedImage/RoundedImage";

const PostHeader = ({ userData }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const handleNavigate = () => {
        navigate(`/p/${userData.id}`);
    };

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
                <div className="post004" onClick={handleNavigate}>
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
                    <div className="post007">
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
                            <>{userData.username}</>
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
