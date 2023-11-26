import React from "react";

import { Skeleton } from "@mui/material";

import "./list.css";
import "../ListModal/listModal.css";
import "../../../Message/message.css";
import "../../../RoundedImage/styles.css";
import RoundedImage from "../../../RoundedImage/RoundedImage";
import AccModal from "../../../RoundedImage/AccModal/AccModal";

const List = ({ loading, user, type, userAcc = false, modalRequired, index = 0 }) => {
    return (
        <div
            className="listModal024"
            style={{
                position: "relative",
                zIndex: 10000 - index - index,
            }}
        >
            <div
                className="messageIn024 messageIn065 messageIn107"
                style={{
                    width: "100%",
                }}
            >
                <div className="messageIn025 messageIn002">
                    <div className="messageIn026 messageIn107">
                        <div className="messageIn027">
                            <div
                                className="messageIn028"
                                // style={{
                                //     height: "44px",
                                //     width: "44px",
                                // }}
                            >
                                <div className="sideList005 messageIn029">
                                    {loading ? (
                                        <>
                                            <Skeleton
                                                variant="rectangle"
                                                sx={{
                                                    height: "100%",
                                                    width: "100%",
                                                }}
                                            />
                                        </>
                                    ) : (
                                        <RoundedImage url={user?.avatar} user={user} modalRequired={modalRequired} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="messageIn031">
                        <div
                            className="messageIn032 messageIn107"
                            style={{
                                width: "100%",
                            }}
                        >
                            {loading ? (
                                <div className="sideList001">
                                    <Skeleton
                                        variant="rounded"
                                        animation="wave"
                                        sx={{
                                            width: "50%",
                                            height: "20px",
                                        }}
                                    />
                                    <Skeleton
                                        variant="rounded"
                                        animation="wave"
                                        sx={{
                                            width: "33%",
                                            height: "20px",
                                        }}
                                    />
                                </div>
                            ) : (
                                <>
                                    <div
                                        className="messageIn033"
                                        style={{
                                            width: "auto",
                                        }}
                                    >
                                        <span className="messageIn034 user-name">
                                            <span>{user?.username}</span>
                                            {modalRequired && <AccModal user={user} />}
                                        </span>
                                        {/* if verified */}
                                        {/* <div className="messageIn035">O</div> */}
                                    </div>
                                    <div className="messageIn037">
                                        <div className="messageIn038">
                                            <div
                                                className="messageIn041"
                                                style={{
                                                    fontSize: "14px",
                                                }}
                                            >
                                                {user?.first_name} {user?.last_name}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="messageIn042 messageIn107">
                        <div className="messageIn043">
                            {loading ? (
                                <>
                                    <Skeleton
                                        variant="rounded"
                                        sx={{
                                            width: "80px",
                                            height: "35px",
                                        }}
                                    />
                                </>
                            ) : (
                                <>
                                    {type === "timeline" ? (
                                        <div className="sideList002">
                                            <div className="sideList003">
                                                <span className="sideList004">{userAcc ? "Switch" : "Follow"}</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <>{modalRequired ? <div className="listModal025">Following</div> : <></>}</>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;
