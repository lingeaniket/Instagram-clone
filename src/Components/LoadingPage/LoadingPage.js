import React from "react";

const LoadingPage = () => {
    return (
        <div
            style={{
                position: "fixed",
                zIndex: 100,
                backgroundColor: "white",
                height: "100%",
                width: "100%",
                top: 0,
                left: 0,
            }}
        >
            <img
                width={"80px"}
                height={"80px"}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    margin: "-40px 0 0 -40px",
                }}
                src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-png-full-colour-glyph-1200x1199.png"
                alt=""
            />
            <span
                style={{
                    position: "absolute",
                    bottom: "32px",
                    left: "50%",
                    margin: "-36px 0 0 -36px",
                }}
            >
                <img
                    height="37px"
                    width="72px"
                    src="data:image/png;base64,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"
                    alt=""
                />
            </span>
        </div>
    );
};

export default LoadingPage;
