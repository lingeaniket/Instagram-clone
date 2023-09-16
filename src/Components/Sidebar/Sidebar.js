import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Tab from "./Tab/Tab";
import "./sidebar.css";

const tabStyle = {
    fontSize: 28,
};

const tabArr = [
    {
        title: "home",
        route: "/",
        icon: <HomeIcon sx={tabStyle} />,
    },
    {
        title: "search",
        route: "/search",
        icon: <SearchIcon sx={tabStyle} />,
    },
    {
        title: "explore",
        route: "/explore",
        icon: <ExploreOutlinedIcon sx={tabStyle} />,
    },
    {
        title: "messages",
        route: "/direct",
        icon: <ChatBubbleOutlineOutlinedIcon sx={tabStyle} />,
    },
    {
        title: "notifications",
        route: "/notifications",
        icon: <FavoriteBorderOutlinedIcon sx={tabStyle} />,
    },
    {
        title: "profile",
        route: "/profile",
    },
];

const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <div className="w_15 side01">
            <div className="side02">
                <div
                    className="side03"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    Instagram
                </div>
                <div className="side04">
                    {tabArr.map((tab, i) => (
                        <Tab key={i} tab={tab} />
                    ))}
                </div>
                <div>Options</div>
            </div>
        </div>
    );
};

export default Sidebar;
