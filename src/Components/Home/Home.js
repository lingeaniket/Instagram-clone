import { Suspense } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

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
