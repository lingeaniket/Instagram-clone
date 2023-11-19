import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div className="grid01">
            <Sidebar />
            <div
                style={{
                    marginLeft: "244px",
                    width: '100%'
                }}
            >
                <Outlet />
            </div>
        </div>
    );
};

export default Home;
