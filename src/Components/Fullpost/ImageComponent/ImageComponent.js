import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";
import { apiSite } from "../../../Website/website";
import "react-lazy-load-image-component/src/effects/blur.css";
import ImageLike from "../../Icons/ImageLike/ImageLike";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ImageComponent = ({ handleImageLiked, imagelikeref }) => {
    const [searchParams] = useSearchParams();
    const postUser = searchParams.get("postUser");
    const postId = searchParams.get("postId");
    const [post, setPost] = useState({});

    useEffect(() => {
        const loadData = async () => {
            await axios
                .get(
                    `${apiSite}/posts/post?postUser=${postUser}&postId=${postId}`
                )
                .then((response) => {
                    setPost(() => response.data.post);
                });
        };
        loadData();
    }, [postUser, postId]);
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
                            onDoubleClick={handleImageLiked}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                            effect="blur"
                            src={`https://picsum.photos/id/${post.id}/500/500`}
                            alt=""
                        />
                        <div className="heartIconDiv">
                            <div ref={imagelikeref} className="heart_icon">
                                <ImageLike />
                            </div>
                        </div>
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
