import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import React from "react";

const ImageComponent = ({ id }) => {
    return (
        <div className="fullPost022 fullPost024 fullPost042">
            <div className="fullPost023 fullPost062 fullPost024 fullPost042">
                <div className="fullPost016">
                    <span>
                        <div>
                            <LazyLoadImage
                                style={{
                                    maxWidth: "100%",
                                }}
                                effect="blur"
                                src={`https://picsum.photos/id/${id}/500/500`}
                                alt=""
                            />
                        </div>
                    </span>
                </div>
                <div className="fullPost025 fullPost016">
                    <div className="fullPost026"></div>
                    <div className="fullPost027"></div>
                </div>
            </div>
        </div>
    );
};

export default ImageComponent;
