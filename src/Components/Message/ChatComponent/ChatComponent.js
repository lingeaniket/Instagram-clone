import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChatHeader from "./ChatHeader/ChatHeader";

import { apiSite } from "../../../Website/website";
import ChatMain from "./ChatMain/ChatMain";

const ChatComponent = () => {
    const [userData, setUserData] = useState({});

    const user = JSON.parse(localStorage.getItem("userId"));

    const { id } = useParams();

    useEffect(() => {
        const loadData = async () => {
            await axios.get(`${apiSite}/users/${id}`).then((response) => {
                setUserData(() => response.data);
            });
        };

        loadData();
    }, [id, user]);

    return (
        <div className="messageIn046 messageIn065 messageIn107">
            <div
                className="messageIn047 messageIn065 messageIn107"
                style={{
                    height: "100vh",
                }}
            >
                {/* converstation div */}
                <div className="messageIn048 messageIn065 messageIn107">
                    <div className="messageIn049 messageIn065 messageIn107">
                        <div className="messageIn050">
                            <div className="messageIn051 messageIn065 messageIn107">
                                <ChatHeader userData={userData} />
                                <ChatMain userData={userData} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* if no message is selected */}
            </div>
        </div>
    );
};

export default ChatComponent;
