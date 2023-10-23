import React from "react";

import Reaction from "../../../Icons/Reaction/Reaction";
import MessageMoreOption from "../../../Icons/MessageMoreOption/MessageMoreOption";

import Reply from "../../../Icons/Reply/Reply";

const SingleMessage = ({ message, handleReplyMode }) => {
    const handleReply = () => {
        handleReplyMode("open", {
            toSelf: message?.messageType === "sent" ? true : false,
            toMessageId: "",
            message: message?.text,
        });
    };

    return (
        <div className="messageIn022">
            <div>
                <div className="messageIn099 messageIn107">
                    <div className="messageIn091"></div>
                    <div className="messageIn101">
                        <div className="messageIn102 messageIn107">
                            <div className="messageIn103">
                                <span className="messageIn104">img</span>
                            </div>
                        </div>
                        <div
                            className="messageIn105"
                            style={{
                                flexDirection: `${
                                    message?.messageType === "sent" ? "row-reverse" : "row"
                                }`,
                            }}
                        >
                            <div className="messageIn106 messageIn107">
                                <div className="messageIn107">
                                    <div
                                        className="messageIn108"
                                        style={{
                                            justifyContent: `${
                                                message?.messageType === "sent"
                                                    ? "flex-end"
                                                    : "flex-start"
                                            }`,
                                        }}
                                    >
                                        <div
                                            className="messageIn109"
                                            style={{
                                                backgroundColor: `${
                                                    message?.messageType === "sent"
                                                        ? "rgb(55, 151, 240)"
                                                        : "rgb(239,239,239)"
                                                }`,
                                            }}
                                        >
                                            <div
                                                className="messageIn110"
                                                style={{
                                                    color: `${
                                                        message?.messageType === "sent"
                                                            ? "white"
                                                            : "rgb(0,0,0)"
                                                    }`,
                                                }}
                                            >
                                                {message.text}
                                            </div>
                                        </div>
                                    </div>
                                    {message?.reactions?.length > 0 && (
                                        <div className="messageIn111 messageIn107">
                                            <div className="messageIn112">
                                                <div className="messageIn113">
                                                    <div className="messageIn114 messageIn067">
                                                        <span className="messageIn115 messageIn067">
                                                            <span>em1</span>
                                                        </span>
                                                        <span className="messageIn115 messageIn067">
                                                            <span>em2</span>
                                                        </span>
                                                        <div className="messageIn116">2</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="messageIn117 messageIn107">
                                <div
                                    className="messageIn118 messageIn107"
                                    style={{
                                        padding: 0,
                                    }}
                                >
                                    <div className="messageIn119">
                                        {/* reaction single div */}
                                        {message?.messageType === "sent" && (
                                            <div>
                                                <div className="messageIn120 messageIn067">
                                                    <div className="messageIn067">
                                                        <MessageMoreOption />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        <div onClick={handleReply}>
                                            <div className="messageIn120 messageIn067">
                                                <div className="messageIn067">
                                                    <Reply />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="messageIn120 messageIn067">
                                                <div className="messageIn067">
                                                    <Reaction />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="messageIn122 messageIn065 messageIn107">
                                <div className="messageIn123"></div>
                            </div>
                        </div>
                        <div>
                            <div className="messageIn124"></div>
                        </div>
                    </div>
                    <div className="messageIn125"></div>
                </div>
            </div>
        </div>
    );
};

export default SingleMessage;