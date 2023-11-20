import React from "react";
import { useSelector } from "react-redux";

const ViewComponent = () => {
    const data = useSelector((state) => state.newPost);
    return (
        <div
            style={{
                height: "100%",
                width: "100%",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <img
                src={`https://picsum.photos/id/${data.imageid}/500/500`}
                style={{
                    maxWidth: "100%",
                    maxHeight: '100%',
                }}
                alt=""
            />
        </div>
    );
};

export default ViewComponent;
