import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div className="grid01">
            <Sidebar/>
            <Outlet/>
        </div>
    );
};

export default Home;