import React, { useEffect, useState } from "react";
import { apiSite } from "../../../../Website/website";
import { useSelector } from "react-redux";
import RoundedImage from "../../../RoundedImage/RoundedImage";
import CaptionText from "../CaptionText/CaptionText";
import axios from "axios";

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
                    <img src={`https://picsum.photos/id/${data.imageid}/500/500`} width={'100%'} alt="" />
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
                            <CaptionText/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Posting;
