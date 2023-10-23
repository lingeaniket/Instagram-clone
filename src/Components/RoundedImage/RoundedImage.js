import React, { memo } from "react";

const RoundedImage = ({ url, alt }) => {
    return (
        <img
            style={{
                maxWidth: "100%",
                verticalAlign: "middle",
            }}
            src={`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${url}.jpg`}
            alt={alt}
        />
    );
};

export default memo(RoundedImage);
