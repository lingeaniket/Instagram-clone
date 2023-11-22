import React from "react";
import { useSelector } from "react-redux";

const ViewComponent = () => {
    const data = useSelector((state) => state.newPost);
    return (
        <div className="new_post017">
            <img src={`https://picsum.photos/id/${data.imageid}/500/500`} className="new_post018" alt="" />
        </div>
    );
};

export default ViewComponent;
