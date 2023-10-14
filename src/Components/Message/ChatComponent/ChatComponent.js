import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import Reaction from "../../Icons/Reaction/Reaction";
import AddPhoto from "../../Icons/AddPhoto/AddPhoto";
import Voice from "../../Icons/Voice/Voice";
import Like from "../../Icons/Like/Like";
import { useParams } from "react-router-dom";
import ChatHeader from "./ChatHeader/ChatHeader";
import SingleMessage from "./SingleMessage/SingleMessage";
import axios from "axios";
import { apiSite } from "../../../Website/website";
import { formatDate } from "./functions";
import { socket } from "../../../App";

const ChatComponent = () => {
    const user = JSON.parse(localStorage.getItem("userId"));

    const { id } = useParams();

    const [message, setMessage] = useState("");
    const [userData, setUserData] = useState({});

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

    const [chats, setChats] = useState([]); //[{ date, messages: [ { time,text,reactions,isReplied,repliedTo,repliedToIndex,seen}]}]

    useEffect(() => {
        socket.on("message", (data) => {
            const loadData = async () => {
                await axios
                    .get(
                        `${apiSite}/messages/getChats?sender=${user}&receiver=${id}`
                    )
                    .then((response) => {
                        setChats(() => response.data.day); // data = {receiverId, day [ { date, messages: [ { time,text,reactions,isReplied,repliedTo,repliedToIndex,seen,}]}]}
                    });
            };

            loadData();
        });
        // eslint-disable-next-line
    }, [socket]);

    useEffect(() => {
        const loadData = async () => {
            await axios
                .get(
                    `${apiSite}/messages/getChats?sender=${user}&receiver=${id}`
                )
                .then((response) => {
                    console.log(response.data);
                    setChats(() => response.data.day); // data = {receiverId, day [ { date, messages: [ { time,text,reactions,isReplied,repliedTo,repliedToIndex,seen,}]}]}
                });

            await axios.get(`${apiSite}/users/${id}`).then((response) => {
                setUserData(() => response.data);
            });
        };

        loadData();
    }, [id, user]);
    return (
        <div className="messageIn046 messageIn065 messageIn107">
            <div
                className="messageIn047 messageIn065 messageIn107"
                style={{
                    height: "100vh",
                }}
            >
                {/* converstation div */}
                <div className="messageIn048 messageIn065 messageIn107">
                    <div className="messageIn049 messageIn065 messageIn107">
                        <div className="messageIn050">
                            <div className="messageIn051 messageIn065 messageIn107">
                                <ChatHeader userData={userData} />
                                <div className="messageIn069">
                                    <div className="messageIn070">
                                        <div className="messageIn071 messageIn065 messageIn107">
                                            <div className="messageIn072 messageIn065 messageIn107">
                                                <div className="messageIn073 messageIn065 messageIn107">
                                                    <div className="messageIn074 messageIn065 messageIn107">
                                                        <div className="messageIn075 messageIn065 messageIn107">
                                                            <div className="messageIn076 messageIn065 messageIn107">
                                                                <div className="messageIn076 messageIn065 messageIn107">
                                                                    <div
                                                                        className="messageIn021 messageIn065 messageIn107"
                                                                        style={{
                                                                            height: "0px",
                                                                        }}
                                                                    >
                                                                        <ScrollToBottom className="newScroll">
                                                                            <div className="messageIn078 messageIn107">
                                                                                <div className="messageIn079"></div>
                                                                                <div className="messageIn080 messageIn077 messageIn107">
                                                                                    <div className="messageIn081">
                                                                                        <div className="messageIn082">
                                                                                            <div className="messageIn083">
                                                                                                <img
                                                                                                    style={{
                                                                                                        maxWidth:
                                                                                                            "100%",
                                                                                                    }}
                                                                                                    src={`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${userData.avatar}.jpg`}
                                                                                                    alt=""
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="messageIn084">
                                                                                        <div className="messageIn085">
                                                                                            <span className="messageIn086">
                                                                                                {
                                                                                                    userData.first_name
                                                                                                }{" "}
                                                                                                {
                                                                                                    userData.last_name
                                                                                                }
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="messageIn087">
                                                                                        <span className="messageIn088">
                                                                                            {
                                                                                                userData.username
                                                                                            }

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
                                                                                                {chat?.messages.map(
                                                                                                    //[ { time,text,reactions,isReplied,repliedTo,repliedToIndex,seen}]
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
                                                                                                                                        {formatDate(
                                                                                                                                            chat.date
                                                                                                                                        )}
                                                                                                                                    </span>
                                                                                                                                </span>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            )}
                                                                                                            {/* this is day message component */}
                                                                                                            <SingleMessage
                                                                                                                message={
                                                                                                                    message
                                                                                                                }
                                                                                                            />
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
                                                                        </ScrollToBottom>
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
                                                                    value={
                                                                        message
                                                                    }
                                                                    onChange={
                                                                        handleMessage
                                                                    }
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
                                                        {message.length > 0 ? (
                                                            <div
                                                                className="messageIn131"
                                                                style={{
                                                                    cursor: "pointer",
                                                                }}
                                                                onClick={
                                                                    handleSendMessage
                                                                }
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
                                                                        <Like
                                                                            size={
                                                                                24
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
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
