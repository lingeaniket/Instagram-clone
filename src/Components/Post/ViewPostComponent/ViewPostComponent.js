import React, {memo} from "react";

import FullPost from "../Fullpost/FullPost";
import ProfileScroll from "../../Profile/ProfileScroll/ProfileScroll";

import "./viewPostComponent.css";

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

export default memo(ViewPostComponent);
