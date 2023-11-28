import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";

// 1263 - side bar length to 72 , 1159 - right bar hide, 768px mobile view side bar to bottom and mobile nav should appear

import "./home.css";
const Home = () => {
    return (
        <div className="home_01">
            <div className="home_02">
                <div className="home_03">
                    <Sidebar />
                </div>
                <div className="home_04">
                    <div className="home_05">
                        <div className="home_06">
                            <Suspense fallback={<></>}>
                                <Outlet />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
