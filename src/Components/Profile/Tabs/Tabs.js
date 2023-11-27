import React, { memo } from "react";

import Posts from "../../Icons/Posts/Posts";
import Reels from "../../Icons/Reels/Reels";
import Tagged from "../../Icons/Tagged/Tagged";

import "./tabs.css";

const Tabs = () => {
    return (
        <div className="profTabs001">
            <div className="profTabs002 profTabs003">
                <div className="profTabs004">
                    <span className="mobileTab01">
                        <Posts />
                    </span>
                    <span className="mobileTab02">
                        <Posts height="24" width="24" />
                    </span>
                    <span
                        className="profTabs005"
                        style={{
                            color: "black",
                        }}
                    >
                        Posts
                    </span>
                </div>
            </div>
            <div className="profTabs002">
                <div className="profTabs004">
                    <span className="mobileTab01">
                        <Reels />
                    </span>
                    <span className="mobileTab02">
                        <Reels height="24" width="24" />
                    </span>
                    <span className="profTabs005">reels</span>
                </div>
            </div>
            <div className="profTabs002">
                <div className="profTabs004">
                    <span className="mobileTab01">
                        <Tagged />
                    </span>
                    <span className="mobileTab02">
                        <Tagged height="24" width="24" />
                    </span>
                    <span className="profTabs005">tagged</span>
                </div>
            </div>
        </div>
    );
};

export default memo(Tabs);
