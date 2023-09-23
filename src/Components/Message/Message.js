import React from "react";
// import { Outlet } from "react-router-dom";

const Message = () => {
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                overflowX: "hidden",
                flexGrow: 1,
            }}
        >
            <div
                style={{
                    position: "relative",
                    zIndex: 0,
                }}
            >
                <div
                    style={{
                        maxHeight: "100%",
                        height: "100%",
                        flexGrow: 1,
                    }}
                >
                    <div
                        style={{
                            height: "100vh",
                            width: "100%",
                            overflowY: "visible",
                            alignContent: "stretch",
                            display: "flex",
                            flexDirection: "column",
                            flexShrink: 0,
                            alignItems: "stretch",
                            alignSelf: "auto",
                            justifyContent: "flex-start",
                            position: "relative",
                            overflowX: "visible",
                            flexGrow: 0,
                        }}
                    >
                        <div
                            style={{
                                display: "contents",
                            }}
                        >
                            <div
                                style={{
                                    flexWrap: "nowrap",
                                    display: "flex",
                                    height: "100%",
                                    flexShrink: 0,
                                    alignItems: "stretch",
                                    justifyContent: "flex-start",
                                    position: "relative",
                                    zIndex: 0,
                                    flexGrow: 1,
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        flexShrink: 0,
                                        zIndex: 0,
                                        maxWidth: "100%",
                                    }}
                                >
                                    <div
                                        style={{
                                            minHeight: "100%",
                                            position: "relative",
                                            borderRight:
                                                "1px solid rgb(219,219,219)",
                                            width: "max-content",
                                            display: "flex",
                                            flexDirection: "column",
                                            maxWidth: "398px",
                                            top: 0,
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                padding: "36px 24px 12px",
                                                height: "75px",
                                                width: "100%",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                minHeight: "75px",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    flexShrink: 1,
                                                    display: "flex",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        lineHeight: "25px",
                                                        fontWeight: 700,
                                                        fontSize: "20px",
                                                    }}
                                                >
                                                    Username
                                                </span>
                                            </div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    paddingLeft: "12px",
                                                    justifyContent: "flex-end",
                                                }}
                                            >
                                                <div>
                                                    <div
                                                        style={{
                                                            padding: "8px",
                                                            display: "flex",
                                                            justifyContent:
                                                                "center",
                                                            alignItems:
                                                                "center",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        <svg
                                                            aria-label="New message"
                                                            class="x1lliihq x1n2onr6"
                                                            color="rgb(0, 0, 0)"
                                                            fill="rgb(0, 0, 0)"
                                                            height="24"
                                                            role="img"
                                                            viewBox="0 0 24 24"
                                                            width="24"
                                                        >
                                                            <title>
                                                                New message
                                                            </title>
                                                            <path
                                                                d="M12.202 3.203H5.25a3 3 0 0 0-3 3V18.75a3 3 0 0 0 3 3h12.547a3 3 0 0 0 3-3v-6.952"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                            ></path>
                                                            <path
                                                                d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 0 1 2.004 0l1.224 1.225a1.417 1.417 0 0 1 0 2.004Z"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                            ></path>
                                                            <line
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                x1="16.848"
                                                                x2="20.076"
                                                                y1="3.924"
                                                                y2="7.153"
                                                            ></line>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                padding: "14px 24px 10px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "flex-start",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    flexGrow: 1,
                                                }}
                                            >
                                                <h1
                                                    style={{
                                                        fontSize: "16px",
                                                        fontWeight: 700,
                                                        margin: 0,
                                                    }}
                                                >
                                                    Messages
                                                </h1>
                                            </div>
                                            <div
                                                style={{
                                                    cursor: "pointer",
                                                }}
                                            >
                                                Requests
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                overflowX: "hidden",
                                                position: "relative",
                                                flexGrow: 1,
                                                overflowY: "hidden",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    flexShrink: 1,
                                                    flexBasis: "auto",
                                                    overflowX: "hidden",
                                                    alignItems: "stretch",
                                                    position: "relative",
                                                    zIndex: 0,
                                                    flexGrow: 1,
                                                    overflowY: "hidden",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        overflowX: "hidden",
                                                        flexGrow: 1,
                                                        overflowY: "hidden",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection:
                                                                "column",
                                                            overflowX: "hidden",
                                                            flexGrow: 1,
                                                            overflowY: "hidden",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                width: "100%",
                                                                overflowY:
                                                                    "scroll",
                                                                flexShrink: 1,
                                                                display: "flex",
                                                                flexDirection:
                                                                    "column",
                                                                overflowX:
                                                                    "hidden",
                                                                flexGrow: 1,
                                                            }}
                                                        >
                                                            <div>
                                                                <div
                                                                    style={{
                                                                        position:
                                                                            "relative",
                                                                    }}
                                                                >
                                                                    {/* chat list map */}
                                                                    <div
                                                                        style={{
                                                                            padding:
                                                                                "8px 24px",
                                                                            cursor: "pointer",
                                                                            position:
                                                                                "relative",
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                width: "350px",
                                                                                display:
                                                                                    "flex",
                                                                                justifyContent:
                                                                                    "center",
                                                                                alignItems:
                                                                                    "stretch",
                                                                                flexDirection:
                                                                                    "column",
                                                                                position:
                                                                                    "relative",
                                                                                flexGrow: 1,
                                                                            }}
                                                                        >
                                                                            <div
                                                                                style={{
                                                                                    display:
                                                                                        "flex",
                                                                                    justifyContent:
                                                                                        "space-between",
                                                                                    alignItems:
                                                                                        "center",
                                                                                    flexShrink: 0,
                                                                                    flexWrap:
                                                                                        "nowrap",
                                                                                    zIndex: 0,
                                                                                    position:
                                                                                        "relative",
                                                                                }}
                                                                            >
                                                                                <div
                                                                                    style={{
                                                                                        display:
                                                                                            "flex",
                                                                                        flexDirection:
                                                                                            "column",
                                                                                        flexShrink: 0,
                                                                                        maxWidth:
                                                                                            "100%",
                                                                                        position:
                                                                                            "relative",
                                                                                    }}
                                                                                >
                                                                                    <div
                                                                                        style={{
                                                                                            display:
                                                                                                "flex",
                                                                                            paddingRight:
                                                                                                "12px",
                                                                                            flexShrink: 0,
                                                                                        }}
                                                                                    >
                                                                                        <div
                                                                                            style={{
                                                                                                height: "56px",
                                                                                                width: "56px",
                                                                                                position:
                                                                                                    "relative",
                                                                                            }}
                                                                                        >
                                                                                            <span
                                                                                                style={{
                                                                                                    height: "56px",
                                                                                                    width: "56px",
                                                                                                    borderRadius:
                                                                                                        "50%",
                                                                                                    overflow:
                                                                                                        "hidden",
                                                                                                }}
                                                                                            ></span>
                                                                                            {/* onlinedot */}
                                                                                            <div
                                                                                                style={{
                                                                                                    height: "12px",
                                                                                                    width: "12px",
                                                                                                    backgroundColor:
                                                                                                        "rgb(28,209,79)",
                                                                                                    position:
                                                                                                        "absolute",
                                                                                                    bottom: 0,
                                                                                                    right: 0,
                                                                                                    borderRadius:
                                                                                                        "50%",
                                                                                                    border: "3px solid white",
                                                                                                }}
                                                                                            ></div>
                                                                                        </div>
                                                                                    </div>
                                                                                    image
                                                                                </div>
                                                                                <div
                                                                                    style={{
                                                                                        display:
                                                                                            "flex",
                                                                                        flexShrink: 1,
                                                                                        flexBasis:
                                                                                            "auto",
                                                                                        alignItems:
                                                                                            "center",
                                                                                        justifyContent:
                                                                                            "space-between",
                                                                                        flexWrap:
                                                                                            "wrap",
                                                                                        position:
                                                                                            "relative",
                                                                                        flexGrow: 1,
                                                                                    }}
                                                                                >
                                                                                    <div
                                                                                        style={{
                                                                                            display:
                                                                                                "flex",
                                                                                            flexDirection:
                                                                                                "column",
                                                                                            flexShrink: 0,
                                                                                            position:
                                                                                                "relative",
                                                                                            flexGrow: 0,
                                                                                            maxWidth:
                                                                                                "100%",
                                                                                        }}
                                                                                    >
                                                                                        <div
                                                                                            style={{
                                                                                                width: "245px",
                                                                                                display:
                                                                                                    "flex",
                                                                                                alignItems:
                                                                                                    "center",
                                                                                                flexGrow: 0,
                                                                                                justifyContent:
                                                                                                    "flex-start",
                                                                                            }}
                                                                                        >
                                                                                            <span
                                                                                                style={{
                                                                                                    fontWeight: 600,
                                                                                                }}
                                                                                            >
                                                                                                Name
                                                                                            </span>
                                                                                            {/* if verified */}
                                                                                            <div
                                                                                                style={{
                                                                                                    marginLeft:
                                                                                                        "4px",
                                                                                                }}
                                                                                            ></div>
                                                                                        </div>
                                                                                        <div
                                                                                            style={{
                                                                                                height: "8px",
                                                                                            }}
                                                                                        ></div>
                                                                                        <div
                                                                                            style={{
                                                                                                display:
                                                                                                    "flex",
                                                                                                alignItems:
                                                                                                    "center",
                                                                                            }}
                                                                                        >
                                                                                            <div
                                                                                                style={{
                                                                                                    height: "18px",
                                                                                                    display:
                                                                                                        "flex",
                                                                                                    width: "100%",
                                                                                                    alignItems:
                                                                                                        "center",
                                                                                                    justifyContent:
                                                                                                        "flex-start",
                                                                                                }}
                                                                                            >
                                                                                                <span
                                                                                                    style={{
                                                                                                        fontWeight: 700,
                                                                                                    }}
                                                                                                >
                                                                                                    Hii
                                                                                                </span>
                                                                                                <span
                                                                                                    style={{
                                                                                                        margin: "0 4px",
                                                                                                    }}
                                                                                                ></span>
                                                                                                <div
                                                                                                    style={{
                                                                                                        fontWeight: 400,
                                                                                                        fontSize:
                                                                                                            "12px",
                                                                                                        color: "rgb(115,115,115)",
                                                                                                    }}
                                                                                                >
                                                                                                    1m
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    style={{
                                                                                        display:
                                                                                            "flex",
                                                                                        flexDirection:
                                                                                            "column",
                                                                                        maxWidth:
                                                                                            "100%",
                                                                                    }}
                                                                                >
                                                                                    <div
                                                                                        style={{
                                                                                            display:
                                                                                                "flex",
                                                                                            paddingLeft:
                                                                                                "12px",
                                                                                        }}
                                                                                    >
                                                                                        <div
                                                                                            style={{
                                                                                                display:
                                                                                                    "flex",
                                                                                                justifyContent:
                                                                                                    "flex-end",
                                                                                                alignItems:
                                                                                                    "center",
                                                                                            }}
                                                                                        >
                                                                                            <span
                                                                                                style={{
                                                                                                    height: "8px",
                                                                                                    width: "8px",
                                                                                                    backgroundColor:
                                                                                                        "rgb(0, 149, 246)",
                                                                                                    display:
                                                                                                        "flex",
                                                                                                    justifyContent:
                                                                                                        "center",
                                                                                                    alignItems:
                                                                                                        "center",
                                                                                                    marginRight:
                                                                                                        "8px",
                                                                                                    borderRadius:
                                                                                                        "50%",
                                                                                                }}
                                                                                            ></span>
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        flexShrink: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                        flexGrow: 1,
                                        maxWidth: "100%",
                                    }}
                                >
                                    <div
                                        style={{
                                            flexDirection: "column",
                                            display: "flex",
                                            minHeight: "inherit",
                                            flexGrow: 1,
                                        }}
                                    >
                                        {/* converstation div */}
                                        <div
                                            style={{
                                                display: "flex",
                                                flexShrink: 1,
                                                flexDirection: "column",
                                                fontSize: ".9375rem",
                                                overflowY: "hidden",
                                                position: "relative",
                                                maxWidth: "100%",
                                                flexGrow: 1,
                                                flexBasis: "100%",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    position: "relative",
                                                    flexGrow: 1,
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        justifyContent:
                                                            "space-between",
                                                        alignItems: "stretch",
                                                        position: "relative",
                                                        flexGrow: 1,
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection:
                                                                "column",
                                                            flexShrink: 1,
                                                            overflow: "hidden",
                                                            flexGrow: 1,
                                                            maxWidth: "100%",
                                                            zIndex: 0,
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                zIndex: 1,
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display:
                                                                        "flex",
                                                                    height: "75px",
                                                                    width: "100%",
                                                                    alignItems:
                                                                        "center",
                                                                    minHeight:
                                                                        "75px",
                                                                    borderBottom:
                                                                        "1px solid rgb(219,219,219)",
                                                                    padding:
                                                                        "0 16px",
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        margin: "-6px",

                                                                        flexShrink:
                                                                            "1",
                                                                        flexWrap:
                                                                            "nowrap",
                                                                        display:
                                                                            "flex",
                                                                        alignItems:
                                                                            "center",
                                                                        flexBasis: 0,
                                                                        justifyContent:
                                                                            "space-between",
                                                                        flexGrow: 1,
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            padding:
                                                                                "6px",
                                                                            display:
                                                                                "flex",
                                                                            flexDirection:
                                                                                "column",
                                                                            maxWidth:
                                                                                "100%",
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                height: "44px",
                                                                                width: "44px",
                                                                                position:
                                                                                    "relative",
                                                                            }}
                                                                        >
                                                                            <span
                                                                                style={{
                                                                                    height: "44px",
                                                                                    width: "44px",
                                                                                    borderRadius:
                                                                                        "50%",
                                                                                    overflow:
                                                                                        "hidden",
                                                                                }}
                                                                            >
                                                                                Image
                                                                            </span>
                                                                            <div
                                                                                style={{
                                                                                    width: "9px",
                                                                                    height: "9px",
                                                                                    borderRadius:
                                                                                        "50%",
                                                                                    overflow:
                                                                                        "hidden",
                                                                                    position:
                                                                                        "absolute",
                                                                                    bottom: "0",
                                                                                    right: "0",
                                                                                    backgroundColor:
                                                                                        "rgb(28,209,79)",
                                                                                }}
                                                                            ></div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            padding:
                                                                                "6px",
                                                                            flexShrink:
                                                                                "1",
                                                                            display:
                                                                                "flex",
                                                                            flexDirection:
                                                                                "column",
                                                                            position:
                                                                                "relative",
                                                                            flexGrow: 1,
                                                                            maxWidth:
                                                                                "100%",
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                display:
                                                                                    "flex",
                                                                                flexDirection:
                                                                                    "column",
                                                                                width: "fit-content",
                                                                                alignItems:
                                                                                    "stretch",
                                                                                justifyContent:
                                                                                    "flex-end",
                                                                            }}
                                                                        >
                                                                            <div
                                                                                style={{
                                                                                    display:
                                                                                        "flex",
                                                                                    alignItems:
                                                                                        "flex-end",
                                                                                    justifyContent:
                                                                                        "flex-start",
                                                                                }}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontWeight: 600,
                                                                                        fontSize:
                                                                                            "16px",
                                                                                    }}
                                                                                >
                                                                                    Aniket
                                                                                </span>
                                                                            </div>
                                                                            <span
                                                                                style={{
                                                                                    fontWeight: 400,
                                                                                    lineHeight:
                                                                                        "18px",
                                                                                }}
                                                                            >
                                                                                <div
                                                                                    style={{
                                                                                        display:
                                                                                            "flex",
                                                                                        marginTop:
                                                                                            "4px",
                                                                                        fontSize:
                                                                                            "12px",
                                                                                    }}
                                                                                >
                                                                                    Active
                                                                                    3
                                                                                    minute
                                                                                    sago
                                                                                </div>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    style={{
                                                                        display:
                                                                            "flex",
                                                                        justifyContent:
                                                                            "flex-end",
                                                                        paddingLeft:
                                                                            "12px",
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            padding:
                                                                                "8px",
                                                                            display:
                                                                                "flex",
                                                                            justifyContent:
                                                                                "center",
                                                                            alignItems:
                                                                                "center",
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                display:
                                                                                    "flex",
                                                                                justifyContent:
                                                                                    "center",
                                                                                alignItems:
                                                                                    "center",
                                                                            }}
                                                                        >
                                                                            <svg
                                                                                aria-label="Audio Call"
                                                                                class="_ab6-"
                                                                                color="rgb(0, 0, 0)"
                                                                                fill="rgb(0, 0, 0)"
                                                                                height="24"
                                                                                role="img"
                                                                                viewBox="0 0 24 24"
                                                                                width="24"
                                                                            >
                                                                                <path d="M18.227 22.912c-4.913 0-9.286-3.627-11.486-5.828C4.486 14.83.731 10.291.921 5.231a3.289 3.289 0 0 1 .908-2.138 17.116 17.116 0 0 1 1.865-1.71 2.307 2.307 0 0 1 3.004.174 13.283 13.283 0 0 1 3.658 5.325 2.551 2.551 0 0 1-.19 1.941l-.455.853a.463.463 0 0 0-.024.387 7.57 7.57 0 0 0 4.077 4.075.455.455 0 0 0 .386-.024l.853-.455a2.548 2.548 0 0 1 1.94-.19 13.278 13.278 0 0 1 5.326 3.658 2.309 2.309 0 0 1 .174 3.003 17.319 17.319 0 0 1-1.71 1.866 3.29 3.29 0 0 1-2.138.91 10.27 10.27 0 0 1-.368.006Zm-13.144-20a.27.27 0 0 0-.167.054A15.121 15.121 0 0 0 3.28 4.47a1.289 1.289 0 0 0-.36.836c-.161 4.301 3.21 8.34 5.235 10.364s6.06 5.403 10.366 5.236a1.284 1.284 0 0 0 .835-.36 15.217 15.217 0 0 0 1.504-1.637.324.324 0 0 0-.047-.41 11.62 11.62 0 0 0-4.457-3.119.545.545 0 0 0-.411.044l-.854.455a2.452 2.452 0 0 1-2.071.116 9.571 9.571 0 0 1-5.189-5.188 2.457 2.457 0 0 1 .115-2.071l.456-.855a.544.544 0 0 0 .043-.41 11.629 11.629 0 0 0-3.118-4.458.36.36 0 0 0-.244-.1Z"></path>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            padding:
                                                                                "8px",
                                                                            display:
                                                                                "flex",
                                                                            justifyContent:
                                                                                "center",
                                                                            alignItems:
                                                                                "center",
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                display:
                                                                                    "flex",
                                                                                justifyContent:
                                                                                    "center",
                                                                                alignItems:
                                                                                    "center",
                                                                            }}
                                                                        >
                                                                            <svg
                                                                                aria-label="Video Call"
                                                                                class="_ab6-"
                                                                                color="rgb(0, 0, 0)"
                                                                                fill="rgb(0, 0, 0)"
                                                                                height="24"
                                                                                role="img"
                                                                                viewBox="0 0 24 24"
                                                                                width="24"
                                                                            >
                                                                                <rect
                                                                                    fill="none"
                                                                                    height="18"
                                                                                    rx="3"
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    width="16.999"
                                                                                    x="1"
                                                                                    y="3"
                                                                                ></rect>
                                                                                <path
                                                                                    d="m17.999 9.146 2.495-2.256A1.5 1.5 0 0 1 23 8.003v7.994a1.5 1.5 0 0 1-2.506 1.113L18 14.854"
                                                                                    fill="none"
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                ></path>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            padding:
                                                                                "0 0 0 8px",
                                                                            display:
                                                                                "flex",
                                                                            justifyContent:
                                                                                "center",
                                                                            alignItems:
                                                                                "center",
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                display:
                                                                                    "flex",
                                                                                justifyContent:
                                                                                    "center",
                                                                                alignItems:
                                                                                    "center",
                                                                            }}
                                                                        >
                                                                            <svg
                                                                                aria-label="Conversation information"
                                                                                class="x1lliihq x1n2onr6"
                                                                                color="rgb(0, 0, 0)"
                                                                                fill="rgb(0, 0, 0)"
                                                                                height="24"
                                                                                role="img"
                                                                                viewBox="0 0 24 24"
                                                                                width="24"
                                                                            >
                                                                                <title>
                                                                                    Conversation
                                                                                    information
                                                                                </title>
                                                                                <circle
                                                                                    cx="12.001"
                                                                                    cy="12.005"
                                                                                    fill="none"
                                                                                    r="10.5"
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                ></circle>
                                                                                <circle
                                                                                    cx="11.819"
                                                                                    cy="7.709"
                                                                                    r="1.25"
                                                                                ></circle>
                                                                                <line
                                                                                    fill="none"
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    x1="10.569"
                                                                                    x2="13.432"
                                                                                    y1="16.777"
                                                                                    y2="16.777"
                                                                                ></line>
                                                                                <polyline
                                                                                    fill="none"
                                                                                    points="10.569 11.05 12 11.05 12 16.777"
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                ></polyline>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div style={{
                                                          maxHeight: 'inherit',
                                                          justifyContent: 'inherit',
                                                          flexGrow: 'inherit',
                                                          minWidth: 'inherit',
                                                          minHeight: 'inherit',
                                                          width: 'inherit',
                                                          position: 'relative',
                                                          flexDirection: 'inherit',
                                                          alignItems: 'inherit',
                                                          flexShrink: 'inherit'
                                                        }}>
                                                          <div style={{
                                                            display: 'flex',
                                                            height: '100%',
                                                            flexGrow: 1,
                                                          }}>
                                                            <div style={{
                                                              display: 'flex',
                                                              flexDirection: 'column',
                                                              flexGrow: 1,
                                                              maxWidth: '100%',
                                                              position: 'relative',
                                                            }}>
                                                              <div style={{
                                                                display: 'flex',
                                                                maxHeight: '100%',
                                                                flexDirection: 'column',
                                                                overflow: 'hidden',
                                                                flexGrow: 1,
                                                              }}>
                                                                <div style={{
                                                                  display: 'flex',
                                                                  flexDirection: 'column',
                                                                  height: '100%',
                                                                  flexGrow: 1,
                                                                }}>
                                                                  <div style={{
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    overflow: 'hidden',
                                                                    borderRight: '2px solid white',
                                                                    borderLeft: '2px solid white',
                                                                    flexGrow: 1,
                                                                  }}>
                                                                    <div style={{
                                                                      display: 'flex',
                                                                      flexShrink: 1,
                                                                      flexDirection: 'column',
                                                                      overflow: 'hidden',
                                                                      flexGrow: 1,
                                                                      alignItems: 'stretch',
                                                                    }}>
                                                                      <div style={{
                                                                      display: 'flex',
                                                                      flexShrink: 1,
                                                                      flexDirection: 'column',
                                                                      overflow: 'hidden',
                                                                      flexGrow: 1,
                                                                      
                                                                    }}>
                                                                      <div style={{
                                                                      display: 'flex',
                                                                      flexShrink: 1,
                                                                      flexDirection: 'column',
                                                                      overflow: 'hidden',
                                                                      flexGrow: 1,
                                                                      
                                                                    }}>
                                                                      <div style={{
                                                                        flexShrink: 1,
                                                                        width: '100%',
                                                                        flexDirection: 'column',
                                                                        display: 'flex',
                                                                        overflowX: 'hidden',
                                                                        overflowY: 'scroll',
                                                                        flexGrow: 1,
                                                                      }}>
                                                                        <div style={{
                                                                          display: 'flex',
                                                                          flexDirection: 'column',
                                                                          justifyContent: 'flex-end',
                                                                          maxWidth: '100%',
                                                                          alignItems: 'inherit',

                                                                        }}>
                                                                          <div style={{
                                                                            height: '20px',
                                                                            width: '100%',
                                                                          }}></div>
                                                                          <div style={{
                                                                            display: 'flex',
                                                                            flexDirection: 'column',
                                                                            alignItems: 'center',
                                                                            textAlign: 'center',
                                                                          }}>
                                                                            <div style={{
                                                                              paddingTop: '16px',
                                                                              paddingBottom: '16px',
                                                                            }}>
                                                                              <div style={{
                                                                                width: '96px',
                                                                                height: '96px',
                                                                              position: 'relative',
                                                                              }}>
                                                                                <span style={{
                                                                                  height: '96px',
                                                                                  width: '96px',
                                                                                  borderRadius: '50%',
                                                                                  overflow: 'hidden',
                                                                                }}>imge</span>
                                                                              </div>
                                                                            </div>
                                                                            <div style={{
                                                                              width: '100%',
                                                                              padding: '0 14px'
                                                                            }}>
                                                                              <div style={{
                                                                                display: 'flex',
                                                                                justifyContent: 'center',

                                                                              }}>
                                                                                <span style={{
                                                                                  fontWeight: 600,
                                                                                  fontSize: '20px'
                                                                                }}>Aniket</span>
                                                                              </div>
                                                                            </div>
                                                                            <div style={{
                                                                              paddingTop: '12px',
                                                                            }}>
                                                                              <span style={{
                                                                                fontWeight: 400,
                                                                                color: 'rgb(115,115,115)'
                                                                              }}></span>
                                                                            </div>
                                                                            <div style={{
                                                                              padding: '24px 0 32px 0'
                                                                            }}>
                                                                              <div style={{
                                                                                borderRadius: '8px',
                                                                                fontWeight: 600,
                                                                                display: 'flex',
                                                                                justifyContent: 'center',
                                                                                backgroundColor: 'rgb(239,239,239)',
                                                                                fontSize: '0.875rem',
                                                                                height: '32px'
                                                                              }}></div>
                                                                            </div>
                                                                          </div>
                                                                          <div style={{
                                                                            height: '10px',
                                                                            width: '100%',
                                                                          }}></div>
                                                                        </div>
                                                                        <div>
                                                                          <div style={{
                                                                            position: 'relative',
                                                                          }}>
                                                                            {/* chat day list */}
                                                                            <div>
                                                                              <div>
                                                                                <div style={{
                                                                                  padding: '16px 20px'
                                                                                }}>
                                                                                  <div style={{
                                                                                    margin: 'auto',
                                                                                    maxWidth: '475px',
                                                                                    textAlign: 'center',
                                                                                  }}>
                                                                                    <div style={{
                                                                                      marginTop: '2px 0',
                                                                                      textAlign: 'center',
                                                                                    }}>
                                                                                      <span style={{
                                                                                        fontWeight: 400,
                                                                                        lineHeight: '1.3333',
                                                                                        fontSize: '0.75rem'
                                                                                      }}>
                                                                                        <span style={{
                                                                                          fontWeight: 500,
                                                                                        }}>18:45</span>
                                                                                      </span>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                              <div></div>
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
                                                            </div>
                                                          </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* if no message is selected */}
                                        {/* <div
                                            style={{
                                                flexShrink: 1,
                                                display: "flex",
                                                flexDirection: "column",
                                                position: "relative",
                                                flexGrow: 1,
                                                maxWidth: "100%",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    flexDirection: "column",
                                                    position: "relative",
                                                    flexGrow: 1,
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        alignItems: "center",
                                                        maxWidth: "100%",
                                                    }}
                                                >
                                                    <svg
                                                        aria-label=""
                                                        class="_ab6-"
                                                        color="rgb(0, 0, 0)"
                                                        fill="rgb(0, 0, 0)"
                                                        height="96"
                                                        role="img"
                                                        viewBox="0 0 96 96"
                                                        width="96"
                                                    >
                                                        <path d="M48 0C21.532 0 0 21.533 0 48s21.532 48 48 48 48-21.532 48-48S74.468 0 48 0Zm0 94C22.636 94 2 73.364 2 48S22.636 2 48 2s46 20.636 46 46-20.636 46-46 46Zm12.227-53.284-7.257 5.507c-.49.37-1.166.375-1.661.005l-5.373-4.031a3.453 3.453 0 0 0-4.989.921l-6.756 10.718c-.653 1.027.615 2.189 1.582 1.453l7.257-5.507a1.382 1.382 0 0 1 1.661-.005l5.373 4.031a3.453 3.453 0 0 0 4.989-.92l6.756-10.719c.653-1.027-.615-2.189-1.582-1.453ZM48 25c-12.958 0-23 9.492-23 22.31 0 6.706 2.749 12.5 7.224 16.503.375.338.602.806.62 1.31l.125 4.091a1.845 1.845 0 0 0 2.582 1.629l4.563-2.013a1.844 1.844 0 0 1 1.227-.093c2.096.579 4.331.884 6.659.884 12.958 0 23-9.491 23-22.31S60.958 25 48 25Zm0 42.621c-2.114 0-4.175-.273-6.133-.813a3.834 3.834 0 0 0-2.56.192l-4.346 1.917-.118-3.867a3.833 3.833 0 0 0-1.286-2.727C29.33 58.54 27 53.209 27 47.31 27 35.73 36.028 27 48 27s21 8.73 21 20.31-9.028 20.31-21 20.31Z"></path>
                                                    </svg>
                                                </div>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        alignItems: "center",
                                                        paddingTop: "20px",
                                                        maxWidth: "100%",
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            fontWeight: "400",
                                                            fontSize: "20px",
                                                        }}
                                                    >
                                                        Your messages
                                                    </span>
                                                </div>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        alignItems: "center",
                                                        paddingTop: "16px",
                                                        maxWidth: "100%",
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            maxWidth: "480px",
                                                            fontWeight: "400",
                                                        }}
                                                    >
                                                        Send private photos and
                                                        messages to a friend or
                                                        group.
                                                    </span>
                                                </div>

                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        alignItems: "center",
                                                        paddingTop: "20px",
                                                        maxWidth: "100%",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            fontWeight: 600,
                                                            display: "flex",
                                                            justifyContent:
                                                                "center",
                                                            alignItems:
                                                                "center",
                                                            color: "white",
                                                            borderRadius: "8px",
                                                            cursor: "pointer",
                                                            backgroundColor:
                                                                "rgb(0,149,246)",
                                                            padding: "0 16px",
                                                            height: "32px",
                                                            lineHeight: "18px",
                                                            fontSize:
                                                                "0.875rem",
                                                        }}
                                                    >
                                                        Send message
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            {/* <div>Chat list</div>
      <div>
        <Outlet/>
      </div> */}
        </div>
    );
};

export default Message;
