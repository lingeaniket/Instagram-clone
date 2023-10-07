import React from "react";

const Stories = () => {
    return (
        <div
            style={{
                overflow: "visible",
                marginBottom: "8px",
            }}
        >
            <div>
                <div
                    style={{
                        padding: "8px 0",
                        overflowY: "hidden",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            height: "85px",
                            overflowY: "hidden",
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                position: "relative",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    height: "100%",
                                    overflowX: "auto",
                                    overflowY: "hidden",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                    }}
                                >
                                    <ul
                                        style={{
                                            padding: "0",
                                            margin: "0",
                                        }}
                                    >
                                        {/* list map stories */}
                                        <li
                                            style={{
                                                verticalAlign: "baseline",
                                                height: "100%",
                                                padding: "0",
                                                margin: "0",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: "66px",
                                                    height: "122px",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    padding: "0 4px",
                                                    position: "relative",
                                                    top: "2px",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        alignItems: "center",
                                                        textAlign: "center",
                                                        cursor: "pointer",
                                                        width: "64px",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            marginBottom: "8px",
                                                            marginTop: "4px",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                height: "56px",
                                                                width: "56px",
                                                                borderRadius:
                                                                    "50%",
                                                                overflow:
                                                                    "hidden",
                                                                border: "1px solid black",
                                                            }}
                                                        >
                                                            <img
                                                                src=""
                                                                alt=""
                                                                style={{
                                                                    height: "100%",
                                                                    width: "100%",
                                                                    verticalAlign:
                                                                        "middle",
                                                                    maxWidth:
                                                                        "100%",
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            color: "rgb(115,115,115)",
                                                            fontWeight: 400,
                                                            fontSize: "12px",
                                                            lineHeight: "12px",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                whiteSpace:
                                                                    "nowrap",
                                                                maxWidth:
                                                                    "74px",
                                                                padding:
                                                                    "0 2px",
                                                                overflow:
                                                                    "hidden",
                                                                textAlign:
                                                                    "center",
                                                            }}
                                                        >
                                                            username
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stories;
