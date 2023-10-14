import { memo } from "react";
import { Outlet } from "react-router-dom";

import Stories from "../Stories/Stories";
import TimelineIn from "./TimelineIn/TimelineIn";
import RightSideBar from "../RightSideBar/RightSideBar";

import "./timeline.css";

const Timeline = () => {
    return (
        <div className="timeline001">
            <div className="timeline002">
                <div className="timeline003">
                    <div className="timeline004">
                        <Stories />
                        <div className="timeline005">
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
