import React from "react";
import "./explore.css";
// import Reel from "../Icons/Reel/Reel";
const Explore = () => {

    return (
        <div
            style={{
                padding: "24px 20px 0",
                width: "calc(100% - 40px)",
                margin: "0 auto 30px",
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                maxWidth: "975px",
            }}
        >
            <div
                style={{
                    margin: "0 -28px 0 0",
                    flexDirection: "column",
                    display: "flex",
                    position: "relative",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingTop: 0,
                        position: "relative",
                    }}
                >
                    {/* main list five component div */}
                    <div
                        style={{
                            overflowY: "visible",
                            position: "relative",
                            flexShrink: 0,

                            overflowX: "visible",
                            alignSelf: "auto",
                            flexGrow: 0,
                        }}
                    >
                        {/* all list components */}
                        {/* reel component */}
                        {/* <div
                            style={{
                                width: "calc(33.3333% - 4px)",
                                marginBottom: "4px",
                                marginRight: "4px",
                                position: "relative",
                                float: "left",
                                verticalAlign: "baseline",
                            }}
                        >
                            <div>
                                <div
                                    style={{
                                        width: "100%",
                                        position: "relative",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "100%",
                                        }}
                                    >
                                        <div
                                            style={{
                                                overflow: "hidden",
                                            }}
                                        >
                                            Reel image
                                        </div>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        margin: "15px 15px 0 0",
                                        alignItems: "flex-end",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "flex-start",
                                        position: "absolute",
                                        inset: 0,
                                    }}
                                >
                                    <Reel />
                                </div>
                            </div>
                        </div> */}
                        
                        {/* post component */}
                        <div
                            style={{
                                width: "calc(33.3333% - 4px)",
                                marginBottom: "4px",
                                marginRight: "4px",
                                position: "relative",
                                float: "left",
                                verticalAlign: "baseline",
                            }}
                        >
                            <div
                                style={{
                                    width: "100%",
                                    overflow: "visible",
                                    position: "relative",
                                }}
                            >
                                <div>
                                    <div
                                        style={{
                                            width: "100%",
                                            position: "relative",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "100%",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    overflow: "hidden",
                                                }}
                                            >
                                                post 01
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                width: "calc(33.3333% - 4px)",
                                marginBottom: "4px",
                                marginRight: "4px",
                                position: "relative",
                                float: "left",
                                verticalAlign: "baseline",
                            }}
                        >
                            <div
                                style={{
                                    width: "100%",
                                    overflow: "visible",
                                    position: "relative",
                                }}
                            >
                                <div>
                                    <div
                                        style={{
                                            width: "100%",
                                            position: "relative",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "100%",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    overflow: "hidden",
                                                }}
                                            >
                                                post 02
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                width: "calc(33.3333% - 4px)",
                                marginBottom: "4px",
                                marginRight: "4px",
                                position: "relative",
                                float: "left",
                                verticalAlign: "baseline",
                            }}
                        >
                            <div
                                style={{
                                    width: "100%",
                                    overflow: "visible",
                                    position: "relative",
                                }}
                            >
                                <div>
                                    <div
                                        style={{
                                            width: "100%",
                                            position: "relative",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "100%",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    overflow: "hidden",
                                                }}
                                            >
                                                post 03
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                width: "calc(33.3333% - 4px)",
                                marginBottom: "4px",
                                marginRight: "4px",
                                position: "relative",
                                float: "left",
                                verticalAlign: "baseline",
                            }}
                        >
                            <div
                                style={{
                                    width: "100%",
                                    overflow: "visible",
                                    position: "relative",
                                }}
                            >
                                <div>
                                    <div
                                        style={{
                                            width: "100%",
                                            position: "relative",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "100%",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    overflow: "hidden",
                                                }}
                                            >
                                                post 04
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                width: "calc(33.3333% - 4px)",
                                marginBottom: "4px",
                                marginRight: "4px",
                                position: "relative",
                                float: "left",
                                verticalAlign: "baseline",
                            }}
                        >
                            <div
                                style={{
                                    width: "100%",
                                    overflow: "visible",
                                    position: "relative",
                                }}
                            >
                                <div>
                                    <div
                                        style={{
                                            width: "100%",
                                            position: "relative",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "100%",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    overflow: "hidden",
                                                }}
                                            >
                                                post 05
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                width: "calc(33.3333% - 4px)",
                                marginBottom: "4px",
                                marginRight: "4px",
                                position: "relative",
                                float: "left",
                                verticalAlign: "baseline",
                            }}
                        >
                            <div
                                style={{
                                    width: "100%",
                                    overflow: "visible",
                                    position: "relative",
                                }}
                            >
                                <div>
                                    <div
                                        style={{
                                            width: "100%",
                                            position: "relative",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "100%",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    overflow: "hidden",
                                                }}
                                            >
                                                post 06
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{
                    alignItems: "stretch",
                    border: 0,
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    flexShrink: 0,
                    font: "inherit",
                    fontSize: "100%",
                    height: "48px",
                    margin: 0,
                    marginTop: "40px",
                    padding: 0,
                    position: "relative",
                    verticalAlign: "baseline",
                }}
            >
                <div
                    style={{
                        height: "32px",
                        width: "32px",
                        top: "50%",
                        left: "50%",
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column",
                        transform: "translate(-50%,-50%)",
                        position: "absolute",
                    }}
                >
                    <svg
                        aria-label="Loading..."
                        className="loader001"
                        role="img"
                        viewBox="0 0 100 100"
                    >
                        <rect
                            class="loaderFill"
                            height="6"
                            opacity="0"
                            rx="3"
                            ry="3"
                            transform="rotate(-90 50 50)"
                            width="25"
                            x="72"
                            y="47"
                        ></rect>
                        <rect
                            class="loaderFill"
                            height="6"
                            opacity="0.08333333333333333"
                            rx="3"
                            ry="3"
                            transform="rotate(-60 50 50)"
                            width="25"
                            x="72"
                            y="47"
                        ></rect>
                        <rect
                            class="loaderFill"
                            height="6"
                            opacity="0.16666666666666666"
                            rx="3"
                            ry="3"
                            transform="rotate(-30 50 50)"
                            width="25"
                            x="72"
                            y="47"
                        ></rect>
                        <rect
                            class="loaderFill"
                            height="6"
                            opacity="0.25"
                            rx="3"
                            ry="3"
                            transform="rotate(0 50 50)"
                            width="25"
                            x="72"
                            y="47"
                        ></rect>
                        <rect
                            class="loaderFill"
                            height="6"
                            opacity="0.3333333333333333"
                            rx="3"
                            ry="3"
                            transform="rotate(30 50 50)"
                            width="25"
                            x="72"
                            y="47"
                        ></rect>
                        <rect
                            class="loaderFill"
                            height="6"
                            opacity="0.4166666666666667"
                            rx="3"
                            ry="3"
                            transform="rotate(60 50 50)"
                            width="25"
                            x="72"
                            y="47"
                        ></rect>
                        <rect
                            class="loaderFill"
                            height="6"
                            opacity="0.5"
                            rx="3"
                            ry="3"
                            transform="rotate(90 50 50)"
                            width="25"
                            x="72"
                            y="47"
                        ></rect>
                        <rect
                            class="loaderFill"
                            height="6"
                            opacity="0.5833333333333334"
                            rx="3"
                            ry="3"
                            transform="rotate(120 50 50)"
                            width="25"
                            x="72"
                            y="47"
                        ></rect>
                        <rect
                            class="loaderFill"
                            height="6"
                            opacity="0.6666666666666666"
                            rx="3"
                            ry="3"
                            transform="rotate(150 50 50)"
                            width="25"
                            x="72"
                            y="47"
                        ></rect>
                        <rect
                            class="loaderFill"
                            height="6"
                            opacity="0.75"
                            rx="3"
                            ry="3"
                            transform="rotate(180 50 50)"
                            width="25"
                            x="72"
                            y="47"
                        ></rect>
                        <rect
                            class="loaderFill"
                            height="6"
                            opacity="0.8333333333333334"
                            rx="3"
                            ry="3"
                            transform="rotate(210 50 50)"
                            width="25"
                            x="72"
                            y="47"
                        ></rect>
                        <rect
                            class="loaderFill"
                            height="6"
                            opacity="0.9166666666666666"
                            rx="3"
                            ry="3"
                            transform="rotate(240 50 50)"
                            width="25"
                            x="72"
                            y="47"
                        ></rect>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Explore;
