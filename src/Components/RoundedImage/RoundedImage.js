import React, { memo, useEffect, useState } from "react";

const RoundedImage = ({ url, alt }) => {
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
            )}
        </>
    );
};

export default memo(RoundedImage);
