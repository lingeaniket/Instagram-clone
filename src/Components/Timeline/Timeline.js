import { Fragment, Suspense, lazy, memo } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { tabArr } from "../ExtraData/extraData";

import Stories from "../Stories/Stories";
import Instagram from "../Icons/Instagram/Instagram";
import TimelineIn from "./TimelineIn/TimelineIn";
import InstagramTitle from "../Icons/InstagramTitle/InstagramTitle";

import "./timeline.css";

const RightSideBar = lazy(() => import("../RightSideBar/RightSideBar"));
const MobileSearchComponent = lazy(() => import("../Sidebar/MobileSearchComponent/MobileSearchComponent"));

const Timeline = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="home_07">
                <div className="mobileNavView">
                    <div
                        className="side03"
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        <span className="side06">
                            <InstagramTitle />
                        </span>
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
                        <Suspense fallback={<></>}>
                            <MobileSearchComponent />
                        </Suspense>
                        {tabArr
                            .filter((tab) => tab.title === "notifications")
                            .map((item, index) => (
                                <Fragment key={index}>{item.icon}</Fragment>
                            ))}
                    </div>
                    {/* <Instagram/> */}
                </div>
                <div className="home_09">
                    <div className="home_10">
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "66px",
                                gridAutoFlow: "column",
                                columnGap: "8px",
                            }}
                        >
                            <Stories />
                        </div>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <TimelineIn />
                    </div>
                </div>
            </div>
            <div className="home_08">
                <Suspense fallback={<></>}>
                    <RightSideBar />
                </Suspense>
            </div>
            <Suspense fallback={<></>}>
                <Outlet />
            </Suspense>
        </>
        // <div className="timeline001">
        //     <div className="mobileNavView">
        //         <div
        //             className="side03"
        //             onClick={() => {
        //                 navigate("/");
        //             }}
        //         >
        //             <span className="side06">
        //                 <InstagramTitle />
        //             </span>
        //             <span className="side07">
        //                 <Instagram />
        //             </span>
        //         </div>
        //         <div
        //             className="timeline006"
        //             style={{
        //                 display: "flex",
        //             }}
        //         >
        //             <Suspense fallback={<></>}>
        //                 <MobileSearchComponent />
        //             </Suspense>
        //             {tabArr
        //                 .filter((tab) => tab.title === "notifications")
        //                 .map((item, index) => (
        //                     <Fragment key={index}>{item.icon}</Fragment>
        //                 ))}
        //         </div>
        //         {/* <Instagram/> */}
        //     </div>
        //     <div className="timeline002">
        //         <div className="timeline003">
        //             <div className="timeline004">
        //                 <Stories />
        //                 <div className="timeline005">
        //                     <TimelineIn />
        //                 </div>
        //             </div>
        //         </div>
        //         {window.innerWidth > 900 && (

        //         )}
        //         <Suspense fallback={<></>}>
        //             <Outlet />
        //         </Suspense>
        //     </div>
        // </div>
    );
};

export default memo(Timeline);
