import React from "react";
import { Skeleton } from "@mui/material";

const List = ({ loading, user, type }) => {
    return (
        <div className="listModal024">
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
                                style={{
                                    height: "44px",
                                    width: "44px",
                                }}
                            >
                                <div
                                    className="messageIn029"
                                    style={{
                                        height: "44px",
                                        width: "44px",
                                    }}
                                >
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
                                        <img
                                            style={{
                                                maxWidth: "100%",
                                            }}
                                            src={`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${user?.avatar}.jpg`}
                                            alt=""
                                        />
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
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        height: "44px",
                                    }}
                                >
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
                                        <span className="messageIn034">
                                            {user.username}
                                        </span>
                                        {/* if verified */}
                                        <div className="messageIn035">O</div>
                                    </div>
                                    <div className="messageIn037">
                                        <div className="messageIn038">
                                            <div
                                                className="messageIn041"
                                                style={{
                                                    fontSize: "14px",
                                                }}
                                            >
                                                {user?.first_name}{" "}
                                                {user?.last_name}
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
                                        <div
                                            style={{
                                                maxWidth: "100%",
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                        >
                                          <div style={{
                                            display: "flex",
                                          }}>
                                            <span style={{
                                              color: 'rgb(0,149,246)',
                                              textAlign: "center",
                                              fontSize: '12px',
                                              fontWeight: 600
                                            }}>Follow</span>
                                          </div>
                                        </div>
                                    ) : (
                                        <div className="listModal025">
                                            Following
                                        </div>
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