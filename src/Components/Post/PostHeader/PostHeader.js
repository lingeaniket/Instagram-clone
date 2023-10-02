import { useNavigate } from "react-router-dom";
import Options from "../../Icons/Options/Options";
import React, { useEffect, memo } from "react";
import { Skeleton } from "@mui/material";

const PostHeader = ({ userData, loading }) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/p/${userData.id}`);
    };

    useEffect(() => {}, [userData]);
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
                        <img
                            className="post005"
                            src={`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${userData.avatar}.jpg`}
                            alt="title1"
                        />
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
