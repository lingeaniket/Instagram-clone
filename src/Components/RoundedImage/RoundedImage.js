import React, { memo, useEffect, useState } from "react";
import "./styles.css";
import AccModal from "./AccModal/AccModal";
import { useNavigate } from "react-router-dom";

const RoundedImage = ({ url, alt, modalRequired = true, user }) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/p/${user.id}`);
    };

    useEffect(() => {
        if (url) {
            setLoading(false);
        }
    }, [url]);
    return (
        <>
            {loading ? (
                <span></span>
            ) : (
                <div className="user-photo">
                    <div className="rounded01" onClick={handleNavigate}>
                        <img
                            className="rounded02"
                            src={`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${url}.jpg`}
                            alt={`${alt}_image`}
                            height={"100%"}
                            width={"100%"}
                        />
                    </div>
                    {modalRequired && <AccModal user={user} />}
                </div>
            )}
        </>
    );
};

export default memo(RoundedImage);
