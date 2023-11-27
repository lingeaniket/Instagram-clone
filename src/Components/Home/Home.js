import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
    return (
        <div className="grid01">
            <Sidebar />
            <div className="span01">
                <Suspense fallback={<></>}>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    );
};

export default Home;
