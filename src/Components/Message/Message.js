import React from "react";
import { Outlet } from "react-router-dom";

import ChatList from "./ChatList/ChatList";

import "./message.css";

const Message = () => {
    return (
        <div className="messageIn001 messageIn065 messageIn107">
            <div className="messageIn002">
                <div className="messageIn003">
                    <div className="messageIn004 messageIn107">
                        <div className="messageIn005">
                            <div className="messageIn006 messageIn002">
                                <ChatList />
                                <Outlet />
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;
