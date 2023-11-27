import React, { memo } from "react";

import List from "../../Profile/ProfileHeader/SingleList/List";
import Arrow from "../../Icons/Arrow/Arrow";

import "./accModal.css";
import PostComponent from "./PostComponent";

const AccModal = ({ user }) => {
    return (
        <div className="user-photo-modal user-photo-modal-transition">
            <div className="accModal001">
                <div>
                    <div className="w_100 accModal002">
                        <List loading={false} user={user} modalRequired={false} type="profile" />
                    </div>
                </div>
                <div>
                    <div className="accModal003">
                        {/* list */}
                        <div className="accModal004">
                            <div>
                                <div className="accModal005">
                                    <span className="accModal006">77</span>
                                </div>
                            </div>
                            <div className="accModal007">
                                <div className="accModal008">
                                    <span className="accModal006">posts</span>
                                </div>
                            </div>
                        </div>
                        <div className="accModal004">
                            <div>
                                <div className="accModal005">
                                    <span className="accModal006">{user?.followers?.length}</span>
                                </div>
                            </div>
                            <div className="accModal007">
                                <div className="accModal008">
                                    <span className="accModal006">followers</span>
                                </div>
                            </div>
                        </div>
                        <div className="accModal004">
                            <div>
                                <div className="accModal005">
                                    <span className="accModal006">{user?.followings?.length}</span>
                                </div>
                            </div>
                            <div className="accModal007">
                                <div className="accModal008">
                                    <span className="accModal006">followings</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <PostComponent />
                </div>
                <div>
                    <div className="accModal012">
                        <button className="accModal013">
                            <div className="accModal014">
                                <div className="accModal015">Following</div>
                                <div className="accModal016">
                                    <span className="accModal017">
                                        <Arrow />
                                    </span>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(AccModal);
