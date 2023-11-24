import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import ImageLike from "../../../../Icons/ImageLike/ImageLike";

import { apiSite } from "../../../../../Website/website";

import "react-lazy-load-image-component/src/effects/blur.css";

const ImageComponent = ({ handleImageLiked, imagelikeref }) => {
    const [searchParams] = useSearchParams();
    const postId = searchParams.get("postId");
    const postUser = searchParams.get("postUser");

    const [post, setPost] = useState({});
    const [loader, setLoader] = useState(false);

    const handleLike = () => {
        handleImageLiked();
    };

    useEffect(() => {
        setLoader(true);
        const loadData = async () => {
            await axios
                .get(`${apiSite}/posts/post?postUser=${postUser}&postId=${postId}`)
                .then((response) => {
                    setPost(() => response.data.post);
                    setLoader(false);
                });
        };
        loadData();
    }, [postUser, postId]);

    return (
        <div
            onDoubleClick={handleLike}
            className="fullPost023 fullPost062 fullPost024 fullPost042 fullPost079"
        >
            <div>
                {!loader && (
                    <div className="fullPost080">
                        <div className="fullPost081">
                            <LazyLoadImage
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    verticalAlign: "middle",
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
                )}
            </div>
            {/* <div className="fullPost025 fullPost016">
                <div className="fullPost026"></div>
                <div className="fullPost027"></div>
            </div> */}
        </div>
    );
};

export default ImageComponent;
