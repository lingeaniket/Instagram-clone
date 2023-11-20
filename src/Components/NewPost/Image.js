import axios from "axios";
import React, { useEffect, memo } from "react";

const Image = ({ id }) => {
    useEffect(() => {
        const getImage = () => {
            axios.get(`https://picsum.photos/id/${id}/500/500`).then((res) => {});
        };
        getImage();
    }, [id]);
    return (
        <div
            style={{
                aspectRatio: "1/1",
                cursor: 'pointer'
            }}
        >
            <img
                loading="lazy"
                src={`https://picsum.photos/id/${id}/500/500`}
                style={{
                    maxWidth: "100%",
                    verticalAlign: "middle",
                }}
                alt=""
                id={id}
            />
        </div>
    );
};

export default memo(Image);
