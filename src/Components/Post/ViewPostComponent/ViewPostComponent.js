import React from "react";
import FullPost from "../Fullpost/FullPost";
import "./viewPostComponent.css";
import ProfileScroll from "../../Profile/ProfileScroll/ProfileScroll";

const ViewPostComponent = () => {
    return (
        <div>
            <div className="appSwitch01">
                <FullPost />
            </div>
            <div className="appSwitch02">
                <ProfileScroll />
            </div>
        </div>
    );
};

export default ViewPostComponent;
