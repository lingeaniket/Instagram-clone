import React, { useEffect, useState } from "react";

import Reaction from "../../Icons/Reaction/Reaction";
import AddPhoto from "../../Icons/AddPhoto/AddPhoto";
import Voice from "../../Icons/Voice/Voice";
import Like from "../../Icons/Like/Like";
import { useParams } from "react-router-dom";
import ChatHeader from "./ChatHeader/ChatHeader";
import SingleMessage from "./SingleMessage/SingleMessage";
import axios from "axios";
import { apiSite } from "../../../Website/website";

const ChatComponent = ({ user = 1 }) => {
    const { id } = useParams();
    const [chats, setChats] = useState([]); //[{ date, messages: [ { time,text,reactions,isReplied,repliedTo,repliedToIndex,seen}]}]

    useEffect(() => {
        const loadData = async () => {
            await axios
                .get(
                    `${apiSite}/messages/getChats?sender=${user}&receiver=${id}`
                )
                .then((response) => {
                    // console.log(response.data.day)
                    setChats(() => response.data.day); // data = {receiverId, day [ { date, messages: [ { time,text,reactions,isReplied,repliedTo,repliedToIndex,seen,}]}]}
                });
        };

        loadData();
    }, [id, user]);
    return (
        <div className="messageIn046 messageIn065 messageIn107">
            <div className="messageIn047 messageIn065 messageIn107">
                {/* converstation div */}
                <div className="messageIn048 messageIn065 messageIn107">
                    <div className="messageIn049 messageIn065 messageIn107">
                        <div className="messageIn050">
                            <div className="messageIn051 messageIn065 messageIn107">
                                <ChatHeader />
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
                                                                                {chats?.map(
                                                                                    //[{ date, messages: [ { time,text,reactions,isReplied,repliedTo,repliedToIndex,seen}]}]
                                                                                    (
                                                                                        chat
                                                                                    ) => (
                                                                                        <>
                                                                                            {chat?.messages.map( //[ { time,text,reactions,isReplied,repliedTo,repliedToIndex,seen}]
                                                                                                (
                                                                                                    message,
                                                                                                    index
                                                                                                ) => (
                                                                                                    <div>
                                                                                                        {index ===
                                                                                                            0 && (
                                                                                                            <div>
                                                                                                                <div className="messageIn093">
                                                                                                                    <div className="messageIn094">
                                                                                                                        <div className="messageIn095">
                                                                                                                            <span className="messageIn096">
                                                                                                                                <span className="messageIn097">
                                                                                                                                    {
                                                                                                                                        chat.date
                                                                                                                                    }
                                                                                                                                </span>
                                                                                                                            </span>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        )}
                                                                                                        {/* this is day message component */}
                                                                                                        <SingleMessage message={message} />
                                                                                                    </div>
                                                                                                )
                                                                                            )}
                                                                                        </>
                                                                                    )
                                                                                )}
                                                                                {/* chat day list */}
                                                                                {/* <div>
                                                                                    <SingleMessage />
                                                                                </div> */}
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
                                                                        border: "none",
                                                                        outline:
                                                                            "none",
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
            </div>
        </div>
    );
};

export default ChatComponent;
