import React from "react";
import Posts from "../../Icons/Posts/Posts";
import Reels from "../../Icons/Reels/Reels";
import Tagged from "../../Icons/Tagged/Tagged";
import "./tabs.css";

const Tabs = () => {
    return (
        <div className="profTabs001">
            <div className="profTabs002 profTabs003">
                <div className="profTabs004">
                    <Posts />
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
                    <Reels />
                    <span
                        className="profTabs005"
                        style={
                            {
                                // color: 'black'
                            }
                        }
                    >
                        reels
                    </span>
                </div>
            </div>
            <div className="profTabs002">
                <div className="profTabs004">
                    <Tagged />
                    <span
                        className="profTabs005"
                        style={
                            {
                                // color: 'black'
                            }
                        }
                    >
                        tagged
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Tabs;
