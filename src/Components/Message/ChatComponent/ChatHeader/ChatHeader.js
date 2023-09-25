import React from "react";
import VideoCall from "../../../Icons/VideoCall/VideoCall";
import AudioCall from "../../../Icons/AudioCall/AudioCall";
import ConversationInfo from "../../../Icons/ConversationInfo/ConversationInfo";

const ChatHeader = () => {
    return (
        <div className="messageIn052">
            <div className="messageIn053">
                <div className="messageIn054">
                    <div className="messageIn055 messageIn107">
                        <div className="messageIn056">
                            <span className="messageIn057">Image</span>
                            <div className="messageIn058"></div>
                        </div>
                    </div>
                    <div className="messageIn059 messageIn065 messageIn107">
                        <div className="messageIn060 messageIn107">
                            <div className="messageIn061">
                                <span className="messageIn062">Aniket</span>
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
