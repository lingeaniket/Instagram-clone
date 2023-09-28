import { memo } from "react";

import TimelineIn from "./TtimelineIn/TimelineIn";
import { Outlet } from "react-router-dom";

const Timeline = () => {
    return (
        <div
            className="w_80 grid01"
            style={{
                marginTop: "35px",
            }}
        >
            <TimelineIn />
            <div className="w_20">rightSideBar</div>
            <Outlet/>
        </div>
    );
};

export default memo(Timeline);
