import React from "react";
import List from "../../Profile/ProfileHeader/SingleList/List";
import Arrow from "../../Icons/Arrow/Arrow";

const AccModal = ({ user }) => {
    return (
        <div className="user-photo-modal user-photo-modal-transition">
            <div
                style={{
                    display: "grid",
                    rowGap: "16px",
                    width: "max-content",
                    alignItems: "center",
                    gridTemplateRows: "64px 40px min-content",
                    backgroundColor: "white",
                    boxShadow: "0 5px 23px rgba(0,0,0,.2)",
                    borderRadius: "8px",
                    padding: "16px 0",
                }}
            >
                <div>
                    <div
                        style={{
                            padding: "0 16px",
                            width: "100%",
                        }}
                    >
                        <List loading={false} user={user} modalRequired={false} type="profile" />
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
                        {/* list */}
                        <div
                            style={{
                                padding: "0 8px",
                                textAlign: "center",
                            }}
                        >
                            <div>
                                <div
                                    style={{
                                        lineHeight: "18px",
                                        fontSize: "14px",
                                        fontWeight: 700,
                                    }}
                                >
                                    <span
                                        style={
                                            {
                                                //bf -3px, af -4
                                            }
                                        }
                                    >
                                        77
                                    </span>
                                </div>
                            </div>
                            <div
                                style={{
                                    marginTop: "4px",
                                }}
                            >
                                <div
                                    style={{
                                        lineHeight: "18px",
                                        fontSize: "14px",
                                        fontWeight: 400,
                                    }}
                                >
                                    <span
                                        style={
                                            {
                                                //bf -3px, af -4
                                            }
                                        }
                                    >
                                        posts
                                    </span>
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
