import axios from "axios";
import ScrollToBottom from "react-scroll-to-bottom";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect, memo, Fragment } from "react";

import ChatBottom from "./ChatBottom/ChatBottom";
import SingleMessage from "../SingleMessage/SingleMessage";

import { socket } from "../../../../App";
import { formatDate } from "../functions";
import { apiSite } from "../../../../Website/website";
import RoundedImage from "../../../RoundedImage/RoundedImage";

const ChatMain = ({ userData }) => {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("userId"));

    const { id } = useParams();
    const [chats, setChats] = useState([]); //[{ date, messages: [ { time,text,reactions,isReplied,repliedTo,repliedToIndex,seen}]}]

    const handleNavigateProfile = () => {
        navigate(`/p/${id}`);
    };

    const [replyMode, setReplyMode] = useState({
        isOn: false,
        toSelf: false,
        toMessageId: "",
        message: "",
    });

    const handleReplyMode = (mode, data) => {
        if (mode === "close") {
            setReplyMode((prev) => {
                return { ...prev, isOn: false };
            });
        } else {
            setReplyMode((prev) => {
                return { ...prev, isOn: true, ...data };
            });
        }
    };

    useEffect(() => {
        socket.on("message", (data) => {
            const loadData = async () => {
                await axios
                    .get(`${apiSite}/messages/getChats?sender=${user}&receiver=${id}`)
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
                .get(`${apiSite}/messages/getChats?sender=${user}&receiver=${id}`)
                .then((response) => {
                    console.log(response.data);
                    setChats(() => response.data.day);
                });
        };

        loadData();
    }, [id, user]);

    return (
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
                                                                        <RoundedImage url={userData?.avatar}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="messageIn084">
                                                                <div className="messageIn085">
                                                                    <span className="messageIn086">
                                                                        {userData.first_name}{" "}
                                                                        {userData.last_name}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="messageIn087">
                                                                <span className="messageIn088">
                                                                    {userData.username} | Instagram
                                                                </span>
                                                            </div>
                                                            <div className="messageIn089">
                                                                <div
                                                                    className="messageIn090 messageIn067"
                                                                    onClick={handleNavigateProfile}
                                                                >
                                                                    View Profile
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="messageIn091"></div>
                                                    </div>
                                                    <div>
                                                        <div className="messageIn022">
                                                            {chats?.map(
                                                                //[{ date, messages: [ ]}]
                                                                (chat, index) => (
                                                                    <Fragment key={index}>
                                                                        {chat?.messages.map(
                                                                            //[ { time,text,reactions,isReplied,repliedTo,repliedToIndex,seen}]
                                                                            (message, index) => (
                                                                                <div key={index}>
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
                                                                                        handleReplyMode={
                                                                                            handleReplyMode
                                                                                        }
                                                                                    />
                                                                                </div>
                                                                            )
                                                                        )}
                                                                    </Fragment>
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
                    <ChatBottom
                        userData={userData}
                        replyMode={replyMode}
                        handleReplyMode={handleReplyMode}
                    />
                </div>
            </div>
        </div>
    );
};

export default memo(ChatMain);
