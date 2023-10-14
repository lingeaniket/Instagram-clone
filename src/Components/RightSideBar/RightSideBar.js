import React from "react";

import List from "../Profile/ProfileHeader/SingleList/List";

import "./rightSideBar.css";

const RightSideBar = () => {
    return (
        <div className="rsb001">
            <div className="rsb002">
                <List
                    loading={false}
                    user={{ username: "abc", avatar: 1 }}
                    type="timeline"
                />
                <div className="rsb003">
                    <div className="rsb004">
                        <div className="rsb005">
                            <div className="rsb006">
                                <div className="rsb007">Suggested for you</div>
                                <div>
                                    <span className="rsb008">See All</span>
                                </div>
                            </div>
                            <div className="rsb009">
                                <div className="rsb010">
                                    <div className="rsb011">
                                        <div className="rsb012">
                                            {/* acount list all products */}
                                            <div className="rsb013">
                                                <List
                                                    user={{
                                                        username: "aniket",
                                                        avatar: 12,
                                                    }}
                                                    type="timeline"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>logo and copyright</div>
            </div>
        </div>
    );
};

export default RightSideBar;
