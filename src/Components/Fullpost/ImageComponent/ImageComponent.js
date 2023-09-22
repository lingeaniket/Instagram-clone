import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import React from "react";

const ImageComponent = ({ id }) => {
    return (
        <div
            className="fullPost023 fullPost062 fullPost024 fullPost042"
            style={{
                border: 0,
                fontSize: "100%",
            }}
        >
            <div>
                <div
                    style={{
                        width: "100%",
                        position: "relative",
                        maxHeight: "inherit",
                    }}
                >
                    <div
                        style={{
                            overflow: "hidden",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative",
                        }}
                    >
                        <LazyLoadImage
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                            effect="blur"
                            src={`https://picsum.photos/id/${id}/500/500`}
                            alt=""
                        />
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                        }}
                    ></div>
                </div>
            </div>
            <div className="fullPost025 fullPost016">
                <div className="fullPost026"></div>
                <div className="fullPost027"></div>
            </div>
        </div>
    );
};

export default ImageComponent;
