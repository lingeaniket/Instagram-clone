import axios from "axios";
import React, { useEffect, useState } from "react";

import { apiSite } from "../../../../Website/website";
import RoundedImage from "../../../RoundedImage/RoundedImage";

const SingleItem = ({ chat, handleChats, id }) => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        axios.get(`${apiSite}/users/${id}`).then((response) => {
            setUserData(() => response.data);
        });
    }, [id]);

    return (
        <div
            className="messageIn023"
            onClick={() => {
                handleChats(chat.receiverId);
            }}
        >
            <div className="messageIn024 messageIn065 messageIn107">
                <div className="messageIn025 messageIn002">
                    <div className="messageIn026 messageIn107">
                        <div className="messageIn027">
                            <div className="messageIn028">
                                <div className="messageIn029">
                                    <RoundedImage url={userData?.avatar} />
                                </div>
                                {/* onlinedot */}
                                <div className="messageIn030"></div>
                            </div>
                        </div>
                    </div>
                    <div className="messageIn031">
                        <div className="messageIn032 messageIn107">
                            <div className="messageIn033">
                                <span className="messageIn034">{userData.username}</span>
                                {/* if verified */}
                                <div className="messageIn035"></div>
                            </div>
                            <div className="messageIn036"></div>
                            <div className="messageIn037">
                                <div className="messageIn038">
                                    <span className="messageIn039"></span>
                                    <span className="messageIn040"></span>
                                    <div className="messageIn041"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="messageIn042 messageIn107">
                        <div className="messageIn043">
                            <div className="messageIn044">
                                <span className="messageIn045 messageIn067"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;
