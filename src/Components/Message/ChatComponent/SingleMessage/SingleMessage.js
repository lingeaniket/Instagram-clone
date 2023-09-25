import React from "react";
import Reaction from "../../../Icons/Reaction/Reaction";
import Reply from "../../../Icons/Reply/Reply";
import MessageMoreOption from "../../../Icons/MessageMoreOption/MessageMoreOption";

const SingleMessage = ({ message }) => {
    // message = { time,text,reactions,isReplied,repliedTo,repliedToIndex,seen}
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
                                // if sender
                                flexDirection: "row-reverse",
                            }}
                        >
                            <div className="messageIn106 messageIn107">
                                <div className="messageIn107">
                                    <div
                                        className="messageIn108"
                                        style={{
                                            // if sender
                                            justifyContent: "flex-end",
                                            // else
                                            // justifyContent: 'flex-start'
                                        }}
                                    >
                                        <div
                                            className="messageIn109"
                                            style={{
                                                // backgroundColor:
                                                //     "rgb(239,239,239)",
                                                backgroundColor:
                                                    "rgb(55, 151, 240)",
                                            }}
                                        >
                                            <div
                                                className="messageIn110"
                                                style={{
                                                    color: "white", // if sent else black
                                                }}
                                            >
                                                {message.text}
                                            </div>
                                        </div>
                                    </div>
                                    
                                        <div className="messageIn111 messageIn107" style={{
                                          visibility: `${message?.reactions?.length >0 ? 'visible' : 'hidden'}`
                                        }}>
                                            <div className="messageIn112">
                                                <div className="messageIn113">
                                                    <div className="messageIn114 messageIn067">
                                                        <span className="messageIn115 messageIn067">
                                                            <span>em1</span>
                                                        </span>
                                                        <span className="messageIn115 messageIn067">
                                                            <span>em2</span>
                                                        </span>
                                                        <div className="messageIn116">
                                                            2
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                   
                                </div>
                            </div>
                            <div className="messageIn117 messageIn107">
                                <div className="messageIn118 messageIn107">
                                    <div className="messageIn119">
                                        {/* reaction single div */}
                                        <div>
                                            <div className="messageIn120 messageIn067">
                                                <div className="messageIn067">
                                                    <Reaction />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="messageIn120 messageIn067">
                                                <div className="messageIn067">
                                                    <Reply />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="messageIn120 messageIn067">
                                                <div className="messageIn067">
                                                    <MessageMoreOption />
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
