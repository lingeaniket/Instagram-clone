import React from "react";
import { useNavigate } from "react-router-dom";

const ResultComponent = ({
    result,
    handleUserClick,
    recents = true,
    handleSearchHistory,
}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        handleUserClick(result.id);
        navigate(`/p/${result.id}`);
    };
    return (
        <div className="searchResults">
            <div
                style={{
                    padding: "8px 24px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                    justifyContent: "flex-start",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        flexGrow: 1,
                        alignItems: "stretch",
                        position: "relative",
                    }}
                >
                    <div
                        style={{
                            flexWrap: "nowrap",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            position: "relative",
                        }}
                    >
                        <div
                            onClick={handleClick}
                            style={{
                                marginRight: "12px",
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "stretch",
                            }}
                        >
                            <span
                                style={{
                                    height: "44px",
                                    width: "44px",
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                }}
                            >
                                <img
                                    src={`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${result.avatar}.jpg`}
                                    alt=""
                                />
                            </span>
                        </div>
                        <div
                            onClick={handleClick}
                            style={{
                                flexShrink: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                position: "relative",
                                flexGrow: 1,
                            }}
                        >
                            <div
                                style={{
                                    maxWidth: "100%",
                                    flexGrow: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    position: "relative",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "flex-start",
                                        alignItems: "flex-start",
                                        flexGrow: 1,
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "flex-start",
                                            alignItems: "center",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontWeight: 600,
                                            }}
                                        >
                                            {" "}
                                            {result.username}
                                        </span>
                                    </div>
                                    <div
                                        style={{
                                            fontWeight: 400,
                                        }}
                                    >
                                        {result.first_name} {result.last_name}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {recents && (
                            <div
                                onClick={() => {
                                    handleSearchHistory(result.id, "remove");
                                }}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    maxWidth: "100%",
                                }}
                            >
                                <div
                                    style={{
                                        flexShrink: 1,
                                        marginLeft: "12px",
                                        display: "flex",
                                        alignItems: "stretch",
                                        justifyContent: "flex-start",
                                    }}
                                >
                                    <div
                                        style={{
                                            padding: "8px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            cursor: "pointer",
                                        }}
                                    >
                                        <svg
                                            aria-label="Close"
                                            class="x1lliihq x1n2onr6"
                                            color="rgb(115, 115, 115)"
                                            fill="rgb(115, 115, 115)"
                                            height="16"
                                            role="img"
                                            viewBox="0 0 24 24"
                                            width="16"
                                        >
                                            <title>Close</title>
                                            <polyline
                                                fill="none"
                                                points="20.643 3.357 12 12 3.353 20.647"
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="3"
                                            ></polyline>
                                            <line
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="3"
                                                x1="20.649"
                                                x2="3.354"
                                                y1="20.649"
                                                y2="3.354"
                                            ></line>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultComponent;
