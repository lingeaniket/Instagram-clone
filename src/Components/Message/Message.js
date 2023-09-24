import React from "react";
import "./message.css";
import NewMessage from "../Icons/NewMessage/NewMessage";
import VideoCall from "../Icons/VideoCall/VideoCall";
import AudioCall from "../Icons/AudioCall/AudioCall";
import ConversationInfo from "../Icons/ConversationInfo/ConversationInfo";
import Reaction from "../Icons/Reaction/Reaction";
import Reply from "../Icons/Reply/Reply";
import MessageMoreOption from "../Icons/MessageMoreOption/MessageMoreOption";
import AddPhoto from "../Icons/AddPhoto/AddPhoto";
import Voice from "../Icons/Voice/Voice";
import Like from "../Icons/Like/Like";
import Messenger from "../Icons/Messenger/Messenger";
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
                                <div className="messageIn007 messageIn107">
                                    <div className="messageIn008 messageIn107">
                                        <div className="messageIn009">
                                            <div className="messageIn010">
                                                <span className="messageIn011">
                                                    Username
                                                </span>
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
                                                <h1 className="messageIn016">
                                                    Messages
                                                </h1>
                                            </div>
                                            <div className="messageIn017">
                                                Requests
                                            </div>
                                        </div>
                                        <div className="messageIn018 messageIn065 messageIn107">
                                            <div className="messageIn019 messageIn002">
                                                <div className="messageIn020 messageIn065 messageIn107">
                                                    <div className="messageIn020 messageIn065 messageIn107">
                                                        <div className="messageIn021 messageIn065 messageIn107">
                                                            <div>
                                                                <div className="messageIn022">
                                                                    {/* chat list map */}
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* conversation */}
                                <div className="messageIn046 messageIn065 messageIn107">
                                    <div className="messageIn047 messageIn065 messageIn107">
                                        {/* converstation div */}
                                        <div className="messageIn048 messageIn065 messageIn107">
                                            <div className="messageIn049 messageIn065 messageIn107">
                                                <div className="messageIn050">
                                                    <div className="messageIn051 messageIn065 messageIn107">
                                                        <div className="messageIn052">
                                                            <div className="messageIn053">
                                                                <div className="messageIn054">
                                                                    <div className="messageIn055 messageIn107">
                                                                        <div className="messageIn056">
                                                                            <span className="messageIn057">
                                                                                Image
                                                                            </span>
                                                                            <div className="messageIn058"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="messageIn059 messageIn065 messageIn107">
                                                                        <div className="messageIn060 messageIn107">
                                                                            <div className="messageIn061">
                                                                                <span className="messageIn062">
                                                                                    Aniket
                                                                                </span>
                                                                            </div>
                                                                            <span className="messageIn063">
                                                                                <div className="messageIn064">
                                                                                    Active
                                                                                    3
                                                                                    minute
                                                                                    sago
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
                                                        <div className="messageIn069">
                                                            <div className="messageIn070">
                                                                <div className="messageIn071 messageIn065 messageIn107">
                                                                    <div className="messageIn072 messageIn065 messageIn107">
                                                                        <div className="messageIn073 messageIn065 messageIn107">
                                                                            <div className="messageIn074 messageIn065 messageIn107">
                                                                                <div className="messageIn075 messageIn065 messageIn107">
                                                                                    <div className="messageIn076 messageIn065 messageIn107">
                                                                                        <div className="messageIn076 messageIn065 messageIn107">
                                                                                            <div className="messageIn021 messageIn065 messageIn107">
                                                                                                <div className="messageIn078 messageIn107">
                                                                                                    <div className="messageIn079"></div>
                                                                                                    <div className="messageIn080 messageIn077 messageIn107">
                                                                                                        <div className="messageIn081">
                                                                                                            <div className="messageIn082">
                                                                                                                <span className="messageIn083">
                                                                                                                    imge
                                                                                                                </span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="messageIn084">
                                                                                                            <div className="messageIn085">
                                                                                                                <span className="messageIn086">
                                                                                                                    Aniket
                                                                                                                </span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="messageIn087">
                                                                                                            <span className="messageIn088">
                                                                                                                editzbyaniket
                                                                                                                .
                                                                                                                Instagram
                                                                                                            </span>
                                                                                                        </div>
                                                                                                        <div className="messageIn089">
                                                                                                            <div className="messageIn090 messageIn067">
                                                                                                                View
                                                                                                                Profile
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="messageIn091"></div>
                                                                                                </div>
                                                                                                <div>
                                                                                                    <div className="messageIn022">
                                                                                                        {/* chat day list */}
                                                                                                        <div>
                                                                                                            <div>
                                                                                                                <div className="messageIn093">
                                                                                                                    <div className="messageIn094">
                                                                                                                        <div className="messageIn095">
                                                                                                                            <span className="messageIn096">
                                                                                                                                <span className="messageIn097">
                                                                                                                                    18:45
                                                                                                                                </span>
                                                                                                                            </span>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            {/* this is day message component */}
                                                                                                            <div className="messageIn022">
                                                                                                                <div>
                                                                                                                    <div className="messageIn099 messageIn107">
                                                                                                                        <div className="messageIn091"></div>
                                                                                                                        <div className="messageIn101">
                                                                                                                            <div className="messageIn102 messageIn107">
                                                                                                                                <div className="messageIn103">
                                                                                                                                    <span className="messageIn104">
                                                                                                                                        img
                                                                                                                                    </span>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <div
                                                                                                                                className="messageIn105"
                                                                                                                                style={{
                                                                                                                                    // if sender
                                                                                                                                    flexDirection:
                                                                                                                                        "row-reverse",
                                                                                                                                }}
                                                                                                                            >
                                                                                                                                <div className="messageIn106 messageIn107">
                                                                                                                                    <div className="messageIn107">
                                                                                                                                        <div
                                                                                                                                            className="messageIn108"
                                                                                                                                            style={{
                                                                                                                                                // if sender
                                                                                                                                                justifyContent:
                                                                                                                                                    "flex-end",
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
                                                                                                                                                    Hii
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                        <div className="messageIn111 messageIn107">
                                                                                                                                            <div className="messageIn112">
                                                                                                                                                <div className="messageIn113">
                                                                                                                                                    <div className="messageIn114 messageIn067">
                                                                                                                                                        <span className="messageIn115 messageIn067">
                                                                                                                                                            <span>
                                                                                                                                                                em1
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                        <span className="messageIn115 messageIn067">
                                                                                                                                                            <span>
                                                                                                                                                                em2
                                                                                                                                                            </span>
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
                                                                                                        </div>

                                                                                                        {/* chat message 2 */}
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
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
                                                                                            placeholder="Message..."
                                                                                            style={{
                                                                                                width: "100%",
                                                                                            }}
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                {/* if message is typing... */}
                                                                                <div className="messageIn131">
                                                                                    Send
                                                                                </div>
                                                                                {/* if no message then show this div */}
                                                                                <div className="messageIn101">
                                                                                    <div className="messageIn066 messageIn067">
                                                                                        <div className="messageIn067">
                                                                                            <Voice />
                                                                                        </div>
                                                                                    </div>
                                                                                    <input
                                                                                        accept="audio/*,.mp4,.mov,.png,.jpg,.jpeg"
                                                                                        style={{
                                                                                            display:
                                                                                                "none",
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
                                                                                            <Like />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* if no message is selected */}
                                        <div className="messageIn135 messageIn065 messageIn107">
                                            <div className="messageIn136 messageIn065 messageIn107">
                                                <div className="messageIn137 messageIn077 messageIn107">
                                                    <Messenger />
                                                </div>
                                                <div className="messageIn138  messageIn077 messageIn107">
                                                    <span className="messageIn139">
                                                        Your messages
                                                    </span>
                                                </div>
                                                <div className="messageIn140 messageIn077 messageIn107">
                                                    <span className="messageIn141">
                                                        Send private photos and
                                                        messages to a friend or
                                                        group.
                                                    </span>
                                                </div>

                                                <div className="messageIn138  messageIn077 messageIn107">
                                                    <div className="messageIn143 messageIn067">
                                                        Send message
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
