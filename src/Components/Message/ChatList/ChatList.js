import React, { useEffect, useState } from "react";
import NewMessage from "../../Icons/NewMessage/NewMessage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { apiSite } from "../../../Website/website";
import SingleItem from "./SingleItem/SingleItem";

const ChatList = ({ id = 1 }) => {
    const [chatList, setChatList] = useState([]);
    const navigate = useNavigate();
    const handleChats = (id) => {
        navigate(`/direct/t/${id}`);
    };

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
                                            {chatList.map((chat, index) => (
                                                <SingleItem
                                                    chat={chat}
                                                    id={chat.receiverId}
                                                    handleChats={handleChats}
                                                />
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
