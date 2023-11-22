import React, { useEffect, useState } from "react";
import { apiSite } from "../../../Website/website";
import { useSelector } from "react-redux";
import RoundedImage from "../../RoundedImage/RoundedImage";
import axios from "axios";
import Emoji from "../../Icons/Emoji/Emoji";

import "./posting.css";

const Posting = () => {
    const userId = JSON.parse(localStorage.getItem("userId"));

    const data = useSelector((state) => state.newPost);
    
    const [userData, setUserData] = useState({});

    useEffect(() => {
        if (userId) {
            axios.get(`${apiSite}/users/${userId}`).then((response) => {
                setUserData(response.data);
            });
        }
    }, [userId]);

    return (
        <div className="posting_001">
            <div className="posting_002">
                <div className="posting_003">
                    <img src={`https://picsum.photos/id/${data.imageid}/500/500`} alt="" />
                </div>
            </div>
            <div className="posting_004">
                <div className="posting_005">
                    <div className="posting_006">
                        <div className="posting_007">
                            <div className="posting_008">
                                <div className="w_100">
                                    <div className="posting_009">
                                        <div className="posting_010">
                                            <div className="posting_011">
                                                <div className="posting_012">
                                                    <RoundedImage url={userData.avatar} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="posting_013">
                                            <span className="posting_014">{userData.username}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="posting_015">
                                <div className="posting_016">
                                    <div className="posting_017" contentEditable="true"></div>
                                    <div className="posting_018">Write a caption...</div>
                                </div>
                                <div className="posting_019">
                                    <div className="posting_020">
                                        <button className="posting_021">
                                            <Emoji />
                                        </button>
                                    </div>
                                    <div className="posting_022">
                                        <div className="posting_023">
                                            <span className="posting_024">
                                                <span className="posting_025">
                                                    <span className="posting_026">0</span>/ <span className="posting_026">2,200</span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Posting;
