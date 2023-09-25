import React, { useEffect, useState } from "react";
import NewMessage from "../../Icons/NewMessage/NewMessage";
import axios from "axios";
import { apiSite } from "../../../Website/website";

const ChatList = ({ id = 1 }) => {
    const [chatList, setChatList] = useState([]);

    useEffect(() => {
        const loadChats = async () => {
            await axios.get(`${apiSite}/messages/${id}`).then((response) => {
                setChatList(() => response.data.chatList);
                console.log(response.data.chatList);
            });
        };

        loadChats();
    }, [id]);
    return (
        <div className="messageIn007 messageIn107">
            <div className="messageIn008 messageIn107">
                <div className="messageIn009">
                    <div className="messageIn010">
                        <span className="messageIn011">Username</span>
                    </div>
                    <div className="messageIn012">
                        <div>
                            <div className="messageIn013 messageIn067">
                                <NewMessage />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="messageIn014">
                    <div className="messageIn015">
                        <h1 className="messageIn016">Messages</h1>
                    </div>
                    <div className="messageIn017">Requests</div>
                </div>
                <div className="messageIn018 messageIn065 messageIn107">
                    <div className="messageIn019 messageIn002">
                        <div className="messageIn020 messageIn065 messageIn107">
                            <div className="messageIn020 messageIn065 messageIn107">
                                <div className="messageIn021 messageIn065 messageIn107">
                                    <div>
                                        <div className="messageIn022">
                                            {/* chat list map */}
                                            {chatList.map((chat) => (
                                                <div className="messageIn023">
                                                    <div className="messageIn024 messageIn065 messageIn107">
                                                        <div className="messageIn025 messageIn002">
                                                            <div className="messageIn026 messageIn107">
                                                                <div className="messageIn027">
                                                                    <div className="messageIn028">
                                                                        <span className="messageIn029">
                                                                            image
                                                                        </span>
                                                                        {/* onlinedot */}
                                                                        <div className="messageIn030"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="messageIn031">
                                                                <div className="messageIn032 messageIn107">
                                                                    <div className="messageIn033">
                                                                        <span className="messageIn034">
                                                                            Name
                                                                        </span>
                                                                        {/* if verified */}
                                                                        <div className="messageIn035">
                                                                            verified
                                                                        </div>
                                                                    </div>
                                                                    <div className="messageIn036"></div>
                                                                    <div className="messageIn037">
                                                                        <div className="messageIn038">
                                                                            <span className="messageIn039">
                                                                                Hii
                                                                            </span>
                                                                            <span className="messageIn040"></span>
                                                                            <div className="messageIn041">
                                                                                1m
                                                                            </div>
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
                                            ))}
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

export default ChatList;
