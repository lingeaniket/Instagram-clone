import { memo } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Stories from "../Stories/Stories";
import TimelineIn from "./TimelineIn/TimelineIn";
import RightSideBar from "../RightSideBar/RightSideBar";

import "./timeline.css";
import Instagram from "../Icons/Instagram/Instagram";
import { tabArr } from "../ExtraData/extraData";
import MobileSearchComponent from "../Sidebar/MobileSearchComponent/MobileSearchComponent";

const Timeline = () => {
    const navigate = useNavigate();
    return (
        <div className="timeline001">
            <div className="mobileNavView">
                <div
                    className="side03"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    <span className="side06">Instagram</span>
                    <span className="side07">
                        <Instagram />
                    </span>
                </div>
                <div
                    className="timeline006"
                    style={{
                        display: "flex",
                    }}
                >
                    <MobileSearchComponent />
                    {tabArr
                        .filter((tab) => tab.title === "notifications")
                        .map((item) => (
                            <>{item.icon}</>
                        ))}
                </div>
                {/* <Instagram/> */}
            </div>
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
