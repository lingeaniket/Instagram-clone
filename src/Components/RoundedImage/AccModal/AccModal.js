import React from "react";
import List from "../../Profile/ProfileHeader/SingleList/List";
import Arrow from "../../Icons/Arrow/Arrow";

import "./accModal.css";

const AccModal = ({ user }) => {
    return (
        <div className="user-photo-modal user-photo-modal-transition">
            <div className="accModal001">
                <div>
                    <div className="w_100 accModal002">
                        <List loading={false} user={user} modalRequired={false} type="profile" />
                    </div>
                </div>
                <div>
                    <div className="accModal003">
                        {/* list */}
                        <div className="accModal004">
                            <div>
                                <div className="accModal005">
                                    <span className="accModal006">77</span>
                                </div>
                            </div>
                            <div className="accModal007">
                                <div className="accModal008">
                                    <span className="accModal006">posts</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr 1fr",
                            columnGap: "3px",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                height: "120px",
                            }}
                        >
                            <img
                                src=""
                                style={{
                                    objectFit: "cover",
                                    height: "120px",
                                    width: "120px",
                                    aspectRatio: "auto 120/120",
                                }}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            padding: "0 16px",
                        }}
                    >
                        <button
                            style={{
                                width: "100%",
                                border: "none",
                                backgroundColor: "rgb(239,239,239)",
                                borderRadius: "8px",
                                textAlign: "center",
                                cursor: "pointer",
                                fontSize: "14px",
                                lineHeight: "18px",
                                padding: "7px 16px",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: "0 4px",
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        lineHeight: "18px",
                                    }}
                                >
                                    Following
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        marginLeft: "4px",
                                    }}
                                >
                                    <span
                                        style={{
                                            display: "inline-block",
                                            transform: "rotate(180deg)",
                                        }}
                                    >
                                        <Arrow />
                                    </span>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccModal;
