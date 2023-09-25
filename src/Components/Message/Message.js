import React from "react";
import "./message.css";

import { Outlet } from "react-router-dom";
import ChatList from "./ChatList/ChatList";

// import { Outlet } from "react-router-dom";

const Message = () => {
    return (
        <div className="messageIn001 messageIn065 messageIn107">
            <div className="messageIn002">
                <div className="messageIn003">
                    <div className="messageIn004 messageIn107">
                        <div className="messageIn005">
                            <div className="messageIn006 messageIn002">
                                {/* chat list */}
                                <ChatList/>
                                {/* conversation */}
                                <Outlet/>
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
