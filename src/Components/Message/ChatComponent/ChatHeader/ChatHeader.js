import React from "react";
import VideoCall from "../../../Icons/VideoCall/VideoCall";
import AudioCall from "../../../Icons/AudioCall/AudioCall";
import ConversationInfo from "../../../Icons/ConversationInfo/ConversationInfo";

const ChatHeader = ({ userData }) => {
    return (
        <div className="messageIn052">
            <div className="messageIn053">
                <div className="messageIn054">
                    <div className="messageIn055 messageIn107">
                        <div className="messageIn056">
                            <div className="messageIn057">
                                <img
                                    style={{
                                        maxWidth: "100%",
                                    }}
                                    src={`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${userData.avatar}.jpg`}
                                    alt=""
                                />
                            </div>
                            <div className="messageIn058"></div>
                        </div>
                    </div>
                    <div className="messageIn059 messageIn065 messageIn107">
                        <div className="messageIn060 messageIn107">
                            <div className="messageIn061">
                                <span className="messageIn062">{userData?.first_name} {userData?.last_name}</span>
                            </div>
                            <span className="messageIn063">
                                <div className="messageIn064">
                                    Active 3 minute sago
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="messageIn012">
                    <div className="messageIn066 messageIn067">
                        <div className="messageIn067">
                            <AudioCall />
                        </div>
                    </div>
                    <div className="messageIn066 messageIn067">
                        <div className="messageIn067">
                            <VideoCall />
                        </div>
                    </div>
                    <div className="messageIn068 messageIn067">
                        <div className="messageIn067">
                            <ConversationInfo />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatHeader;
