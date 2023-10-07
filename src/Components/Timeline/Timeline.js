import { memo } from "react";

import TimelineIn from "./TtimelineIn/TimelineIn";
import { Outlet } from "react-router-dom";
import RightSideBar from "../RightSideBar/RightSideBar";
import Stories from "../Stories/Stories";

const Timeline = () => {
    return (
        <div
            style={{
                display: "flex",
                flexGrow: 1,
                flexDirection: "column",
            }}
        >
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    paddingTop: "22px",
                    justifyContent: "center",
                }}
            >
                <div
                    style={{
                        maxWidth: "630px",
                        width: "100%",
                    }}
                >
                    <div
                        style={{
                            marginTop: "16px",
                        }}
                    >
                        <Stories />
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <TimelineIn />
                        </div>
                    </div>
                </div>
                <RightSideBar />
                <Outlet />
            </div>
        </div>
    );
};

export default memo(Timeline);
