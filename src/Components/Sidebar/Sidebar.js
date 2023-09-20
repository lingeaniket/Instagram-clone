import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Tab from "./Tab/Tab";
import "./sidebar.css";

const tabStyle = {
    fontSize: 28,
};

const tabArr = [
    {
        title: "home",
        route: "/",
        icon: <HomeIcon sx={tabStyle} />,
    },
    {
        title: "search",

        icon: (
            <svg
                aria-label="Search"
                className="_ab6-"
                color="rgb(0, 0, 0)"
                fill="rgb(0, 0, 0)"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
            >
                <path
                    d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                ></path>
                <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="16.511"
                    x2="22"
                    y1="16.511"
                    y2="22"
                ></line>
            </svg>
        ),
    },
    {
        title: "explore",
        route: "/explore",
        icon: <ExploreOutlinedIcon sx={tabStyle} />,
    },
    {
        title: "messages",
        route: "/direct",
        icon: (
            <svg
                aria-label="Messenger"
                className="_ab6-"
                color="rgb(0, 0, 0)"
                fill="rgb(0, 0, 0)"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
            >
                <path
                    d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="1.739"
                ></path>
                <path
                    d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z"
                    fillRule="evenodd"
                ></path>
            </svg>
        ),
    },
    {
        title: "notifications",
        icon: <FavoriteBorderOutlinedIcon sx={tabStyle} />,
    },
    {
        title: "profile",
        route: "/profile",
    },
];

const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <div className="w_15 side01">
            <div
                className="side02"
                style={{
                    marginTop: "10px",
                }}
            >
                <div
                    style={{
                        height: "100vh",
                        display: "flex",
                        alignItems: "flex-start",
                        flexDirection: "column",
                        position: "relative",
                    }}
                >
                    <div
                        className="side03"
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        Instagram
                    </div>
                    <div className="side04">
                        {tabArr.map((tab, i) => (
                            <Tab key={i} tab={tab} />
                        ))}
                    </div>
                    <div>Options</div>
                    <div
                        style={{
                            position: "absolute",
                            left: "215px",
                            top: 0,
                            bottom: 0,
                            // background: "red",
                        }}
                    >
                        <div
                            style={{
                                boxShadow: "4px 0 24px rgba(var(0,0,0,.15)",
                                paddingBottom: "8px",
                                backgroundColor: "white",
                                borderRight: "1px solid rgb(219,219,219)",
                                borderRadius: 0,
                                borderTopRightRadius: "16px",
                                borderBottomRightRadius: "16px",
                                display: "flex",
                                flexDirection: "column",
                                width: "379px",
                                paddingTop: "8px",
                                height: "100vh",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                    width: "100%",
                                }}
                            >
                                <div
                                    style={{
                                        padding: "12px 14px 36px 24px",
                                        margin: "0 8px",
                                    }}
                                >
                                    <div>
                                        <span
                                            style={{
                                                fontWeight: "600",
                                                fontSize: "24px",
                                            }}
                                        >
                                            Search
                                        </span>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        flexGrow: 1,
                                        justifyContent: "flex-start",
                                        alignSelf: "auto",
                                        position: "relative",
                                        alignItems: "stretch",
                                        overflow: "visible",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            height: "100%",
                                        }}
                                    >
                                        <div
                                            style={{
                                                margin: "0 16px",
                                                display: "flex",
                                                flexDirection: "column",
                                                position: "relative",
                                                alignItems: "stretch",
                                                overflow: "visible",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    minWidth: "125px",
                                                    width: "100%",
                                                    marginBottom: "24px",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    position: "relative",
                                                }}
                                            >
                                                <input
                                                    type="text"
                                                    style={{
                                                        paddingTop: "3px",
                                                        fontSize: "16px",
                                                        zIndex: 2,
                                                        width: "100%",
                                                        paddingBottom: "3px",
                                                        height: "100%",
                                                        paddingLeft: "16px",
                                                        paddingRight: "16px",
                                                        border: 0,

                                                        backgroundColor:
                                                            "rgb(239,239,239)",
                                                        outline: "none",
                                                        borderRadius: "8px",
                                                        lineHeight: "18px",
                                                    }}
                                                />

                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        top: "50%",
                                                        transform:
                                                            "translateY(-50%)",
                                                        zIndex: 3,
                                                        right: "12px",
                                                        cursor: "pointer",
                                                        // textAlign: 'center',
                                                        height: "20px",
                                                        width: "20px",
                                                        fontSize: "10px",

                                                        display: "flex",
                                                        // alignItems: 'center',
                                                        justifyContent:
                                                            "center",
                                                        borderRadius: "50%",
                                                        backgroundColor:
                                                            "rgb(210,210,210)",
                                                    }}
                                                >
                                                    <div>x</div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr
                                            style={{
                                                width: "100%",
                                                height: "1px",
                                                backgroundColor:
                                                    "rgb(219,219,219)",
                                            }}
                                        />
                                        <div
                                            style={{
                                                width: "100%",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                height: "100%",
                                                overflowY: "auto",
                                                position: "relative",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    paddingTop: "12px",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    overflowX: "hidden",
                                                    overflowY: "auto",
                                                    flexGrow: 1,
                                                    width: "100%",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        height: "100%",
                                                        width: "100%",
                                                        position: "relative",
                                                        flexGrow: 1,
                                                        overflowY: "auto",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            margin: "6px 24px 8px",
                                                            display: "flex",
                                                            justifyContent:
                                                                "space-between",
                                                            alignItems:
                                                                "center",
                                                            paddingTop: "4px",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                lineHeight:
                                                                    "20px",
                                                                fontWeight: 600,
                                                            }}
                                                        >
                                                            recents
                                                        </span>
                                                        <div
                                                            style={{
                                                                fontWeight: 600,
                                                                color: "rgb(0,149,246)",
                                                                cursor: "pointer",
                                                            }}
                                                        >
                                                            btn
                                                        </div>
                                                    </div>
                                                    <ul
                                                        style={{
                                                            border: 0,
                                                            margin: "8px 0",
                                                            padding: 0,
                                                        }}
                                                    >
                                                        {/* list */}
                                                        <div>
                                                            <div
                                                                style={{
                                                                    padding:
                                                                        "8px 24px",
                                                                    display:
                                                                        "flex",
                                                                    flexDirection:
                                                                        "column",
                                                                    alignItems:
                                                                        "stretch",
                                                                    justifyContent:
                                                                        "flex-start",
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        display:
                                                                            "flex",
                                                                        justifyContent:
                                                                            "center",
                                                                        flexDirection:
                                                                            "column",
                                                                        flexGrow: 1,
                                                                        alignItems:
                                                                            "stretch",
                                                                        position:
                                                                            "relative",
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            flexWrap:
                                                                                "nowrap",
                                                                            display:
                                                                                "flex",
                                                                            alignItems:
                                                                                "center",
                                                                            justifyContent:
                                                                                "space-between",
                                                                            position:
                                                                                "relative",
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                marginRight:
                                                                                    "12px",
                                                                                display:
                                                                                    "flex",
                                                                                justifyContent:
                                                                                    "flex-start",
                                                                                alignItems:
                                                                                    "stretch",
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
                                                                                image
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            style={{
                                                                                flexShrink: 1,
                                                                                display:
                                                                                    "flex",
                                                                                alignItems:
                                                                                    "center",
                                                                                justifyContent:
                                                                                    "space-between",
                                                                                position:
                                                                                    "relative",
                                                                                flexGrow: 1,
                                                                            }}
                                                                        >
                                                                            <div
                                                                                style={{
                                                                                    maxWidth:
                                                                                        "100%",
                                                                                    flexGrow: 1,
                                                                                    display:
                                                                                        "flex",
                                                                                    flexDirection:
                                                                                        "column",
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
                                                                                        justifyContent:
                                                                                            "flex-start",
                                                                                        alignItems:
                                                                                            "flex-start",
                                                                                        flexGrow: 1,
                                                                                    }}
                                                                                >
                                                                                    <div
                                                                                        style={{
                                                                                            display:
                                                                                                "flex",
                                                                                            justifyContent:
                                                                                                "flex-start",
                                                                                            alignItems:
                                                                                                "center",
                                                                                        }}
                                                                                    >
                                                                                        <span
                                                                                            style={{
                                                                                                fontWeight: 600,
                                                                                            }}
                                                                                        >
                                                                                            user
                                                                                            name
                                                                                        </span>
                                                                                    </div>
                                                                                    <div
                                                                                        style={{
                                                                                            fontWeight: 400,
                                                                                        }}
                                                                                    >
                                                                                        full
                                                                                        name
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            style={{
                                                                                display:
                                                                                    "flex",
                                                                                alignItems:
                                                                                    "center",
                                                                                flexDirection:
                                                                                    "column",
                                                                                maxWidth:
                                                                                    "100%",
                                                                            }}
                                                                        >
                                                                            <div
                                                                                style={{
                                                                                    flexShrink: 1,
                                                                                    marginLeft:
                                                                                        "12px",
                                                                                    display:
                                                                                        "flex",
                                                                                    alignItems:
                                                                                        "stretch",
                                                                                    justifyContent:
                                                                                        "flex-start",
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
                                                                                        <title>
                                                                                            Close
                                                                                        </title>
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
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </ul>
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
    );
};

export default Sidebar;
