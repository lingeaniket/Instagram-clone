import React, { useState, memo } from "react";
import { socket } from "../../../../../App";

import Like from "../../../../Icons/Like/Like";
import AddPhoto from "../../../../Icons/AddPhoto/AddPhoto";
import Voice from "../../../../Icons/Voice/Voice";
import Reaction from "../../../../Icons/Reaction/Reaction";

import ReplyDiv from "../../ReplyDiv/ReplyDiv";
import { useParams } from "react-router-dom";

const ChatBottom = ({ userData, replyMode, handleReplyMode }) => {
    const user = JSON.parse(localStorage.getItem("userId"));

    const { id } = useParams();
    const [message, setMessage] = useState("");

    const handleMessage = (e) => {
        setMessage(e.target.value);
    };

    function formatDateToDDMMYY(date) {
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-based
        const year = String(date.getFullYear()).slice(-2); // Get the last two digits of the year
        return `${day}${month}${year}`;
    }

    const handleSendMessage = async () => {
        if (message.length > 0) {
            const date = new Date();
            socket.emit("message", {
                sender: user,
                receiver: id,
                date: formatDateToDDMMYY(date),
                message: {
                    time: date.getTime(),
                    messageType: "sent",
                    text: message,
                    reactions: [],
                    isReplied: false,
                    repliedTo: "self",
                    repliedToIndex: -1,
                    seen: false,
                },
            });
            setMessage("");
        }
    };
    return (
        <div>
            {replyMode.isOn && (
                <ReplyDiv
                    handleReplyMode={handleReplyMode}
                    replyMode={replyMode}
                    userData={userData}
                />
            )}
            <div className="messageIn126 messageIn107">
                <div className="messageIn127">
                    <div className="messageIn128">
                        <Reaction />
                    </div>
                    <div className="messageIn129">
                        <div className="messageIn130">
                            <input
                                type="text"
                                name=""
                                id=""
                                value={message}
                                onChange={handleMessage}
                                placeholder="Message..."
                                style={{
                                    width: "100%",
                                    border: "none",
                                    outline: "none",
                                }}
                            />
                        </div>
                    </div>
                    {message.length > 0 ? (
                        <div
                            className="messageIn131"
                            style={{
                                cursor: "pointer",
                            }}
                            onClick={handleSendMessage}
                        >
                            Send
                        </div>
                    ) : (
                        <div className="messageIn101">
                            <div className="messageIn066 messageIn067">
                                <div className="messageIn067">
                                    <Voice />
                                </div>
                            </div>
                            <input
                                accept="audio/*,.mp4,.mov,.png,.jpg,.jpeg"
                                style={{
                                    display: "none",
                                }}
                                multiple=""
                                type="file"
                            />
                            <div className="messageIn066 messageIn067">
                                <div className="messageIn067">
                                    <AddPhoto />
                                </div>
                            </div>
                            <div className="messageIn066 messageIn067">
                                <div className="messageIn067">
                                    <Like size={24} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default memo(ChatBottom);
