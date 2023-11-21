import React, { useEffect, useState } from "react";
import { apiSite } from "../../../Website/website";
import { useSelector } from "react-redux";
import RoundedImage from "../../RoundedImage/RoundedImage";
import axios from "axios";
import Emoji from "../../Icons/Emoji/Emoji";

const Posting = () => {
    const data = useSelector((state) => state.newPost);
    const userId = JSON.parse(localStorage.getItem("userId"));
    const [userData, setUserData] = useState({});

    useEffect(() => {
        if (userId) {
            axios.get(`${apiSite}/users/${userId}`).then((response) => {
                setUserData(response.data);
            });
        }
    }, [userId]);

    return (
        <div
            style={{
                width: "875px",
                maxHeight: "min(calc(100vw - 308px), 855px)",
                height: "calc(100vmin - 219px)",
                display: "flex",
            }}
        >
            <div
                style={{
                    height: "100%",
                    width: "calc(100% - 340px)",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <div
                    style={{
                        height: "448px",
                        width: "448px",
                        display: "flex",
                        flexDirection: "column",
                        margin: "auto",
                    }}
                >
                    <img src={`https://picsum.photos/id/${data.imageid}/500/500`} alt="" />
                </div>
            </div>
            <div
                style={{
                    width: "340px",
                    borderLeft: "1px solid rgb(219,219,219)",
                }}
            >
                <div
                    style={{
                        maxHeight: "100%",
                        minHeight: "99%",
                        overflow: "scroll",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <div
                            style={{
                                margin: "0 16px",
                            }}
                        >
                            <div
                                style={{
                                    margin: "18px 0 14px",
                                }}
                            >
                                <div
                                    style={{
                                        width: "100%",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <div
                                            style={{
                                                maxWidth: "100%",
                                                display: "flex",
                                                alignSelf: "center",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    marginRight: "12px",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        height: "28px",
                                                        width: "28px",
                                                        borderRadius: "50%",
                                                        overflow: "hidden",
                                                    }}
                                                >
                                                    <RoundedImage url={userData.avatar} />
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexGrow: 1,
                                            }}
                                        >
                                            <span
                                                style={{
                                                    lineHeight: "18px",
                                                    fontWeight: 600,
                                                    fontSize: "14px",
                                                }}
                                            >
                                                {userData.username}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <div
                                    style={{
                                        width: "100%",
                                        position: 'relative',
                                    }}
                                >
                                    <div
                                        style={{
                                            minHeight: "168px",
                                            padding: "0 16px",
                                            fontSize: "16px",
                                            lineHeight: "24px",
                                            maxHeight: "168px",
                                            userSelect: "text",
                                        }}
                                        contentEditable="true"
                                        //:focus-visible { outline: 'none'}
                                    ></div>
                                    <div style={{
                                        position: 'absolute',
                                        width: '100%',
                                        maxHeight: '168px',
                                        minHeight: '168px',
                                        pointerEvents: 'none',
                                        margin: '0 16px',
                                        fontSize: '16px',
                                        color: 'rgb(199,199,199)',
                                        lineHeight: '24px'
                                    }}>Write a caption...</div>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            padding: "4px 8px",
                                        }}
                                    >
                                        <button
                                            style={{
                                                lineHeight: "18px",
                                                outline: "none",
                                                border: "none",
                                                padding: "8px",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                background: "none",
                                            }}
                                        >
                                            <Emoji />
                                        </button>
                                    </div>
                                    <div
                                        style={{
                                            margin: "0 12px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <div
                                            style={{
                                                padding: "0 4px",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontWeight: 400,
                                                    lineHeight: "16px",
                                                    fontSize: "12px",
                                                    color: "rgb(199,199,199)",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "12px",
                                                        //bfr : -2, -3
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            fontSize: "12px",
                                                        }}
                                                    >
                                                        0
                                                    </span>
                                                    /{" "}
                                                    <span
                                                        style={{
                                                            fontSize: "12px",
                                                        }}
                                                    >
                                                        2,200
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Posting;
