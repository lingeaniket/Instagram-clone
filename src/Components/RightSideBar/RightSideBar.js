import React from "react";
import List from "../Profile/ProfileHeader/SingleList/List";

const RightSideBar = () => {
    return (
        <div
            style={{
                width: "319px",
                paddingLeft: "64px",
                height: "100vh",
            }}
        >
            <div
                style={{
                    marginTop: "36px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <List
                    loading={false}
                    user={{ username: "abc", avatar: 1 }}
                    type="timeline"
                />
                <div
                    style={{
                        marginTop: "24px",
                        marginBottom: "8px",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div
                        style={{
                            margin: "0 16px",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <div
                            style={{
                                width: "calc(100% + 32px)",
                                display: "flex",
                                flexDirection: "column",
                                margin: "0 0 12px -16px",
                            }}
                        >
                            <div
                                style={{
                                    padding: "4px 16px",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexGrow: "1",
                                    }}
                                >
                                    Suggested for you
                                </div>
                                <div style={{}}>
                                    <span
                                        style={{
                                            fontWeight: 600,
                                            fontSize: "12px",
                                        }}
                                    >
                                        See All
                                    </span>
                                </div>
                            </div>
                            <div
                                style={{
                                    marginLeft: "4px",
                                }}
                            >
                                <div
                                    style={{
                                        padding: "8px 0",
                                    }}
                                >
                                    <div
                                        style={{
                                            height: "auto",
                                            overflow: "hidden auto",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                        >
                                            {/* acount list */}
                                            <div
                                                style={{
                                                    width: "100%",
                                                }}
                                            >
                                                <List
                                                    user={{
                                                        username: "aniket",
                                                        avatar: 12,
                                                    }}
                                                    type="timeline"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>logo and copyright</div>
            </div>
        </div>
    );
};

export default RightSideBar;
