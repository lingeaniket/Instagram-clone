import React, { memo, useEffect, useState } from "react";
import "./styles.css";
import AccModal from "./AccModal/AccModal";

const RoundedImage = ({ url, alt, modalRequired = true, user }) => {
    const [loading, setLoading] = useState(true);

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
                    <div
                        style={{
                            borderRadius: "50%",
                            border: "0.5px solid rgba(0, 0, 0, 0.4)",

                            width: "100%",
                            height: "100%",
                            cursor: "pointer",
                            overflow: "hidden",
                        }}
                    >
                        <img
                            style={{
                                maxWidth: "100%",
                                width: "100%",
                                verticalAlign: "middle",
                            }}
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
