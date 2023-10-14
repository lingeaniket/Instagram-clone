import React from "react";

import Messenger from "../../Icons/Messenger/Messenger";

const EmptyChatComponent = () => {
    return (
        <div className="messageIn135 messageIn065 messageIn107">
            <div className="messageIn136 messageIn065 messageIn107">
                <div className="messageIn137 messageIn077 messageIn107">
                    <Messenger />
                </div>
                <div className="messageIn138  messageIn077 messageIn107">
                    <span className="messageIn139">Your messages</span>
                </div>
                <div className="messageIn140 messageIn077 messageIn107">
                    <span className="messageIn141">
                        Send private photos and messages to a friend or group.
                    </span>
                </div>

                <div className="messageIn138  messageIn077 messageIn107">
                    <div className="messageIn143 messageIn067">
                        Send message
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmptyChatComponent;
