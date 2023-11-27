import axios from "axios";
import React, { useEffect, memo } from "react";

import "./newPost.css";

const Image = ({ id }) => {
    useEffect(() => {
        const getImage = () => {
            axios.get(`https://picsum.photos/id/${id}/500/500`).then((res) => {});
        };
        getImage();
    }, [id]);

    return (
        <div className="new_post019">
            <img loading="lazy" className="new_post020" src={`https://picsum.photos/id/${id}/500/500`} alt="" id={id} />
        </div>
    );
};

export default memo(Image);
