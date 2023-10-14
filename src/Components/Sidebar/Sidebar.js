import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import Tab from "./Tab/Tab";
import SearchComponent from "./SearchComponent/SearchComponent";

import { socket } from "../../App";
import { tabArr } from "../ExtraData/extraData";

import "./sidebar.css";

const Sidebar = () => {
    const navigate = useNavigate();

    const [id, setId] = useState(0);
    const [searchDiv, setSearchDiv] = useState(false);

    const searchRef = useRef(null);

    const handleSearch = (clickevent) => {
        setSearchDiv(clickevent);
    };

    const handleCollapse = () => {
        setSearchDiv((prev) => !prev);
    };

    useEffect(() => {
        socket.on("notification", () => {
            setId((prev) => prev + 1);
        });
    }, []);

    return (
        <div className="w_15 side01">
            <div
                className="side02"
                style={{
                    marginTop: "10px",
                }}
            >
                <div
                    style={{
                        height: "100vh",
                        display: "flex",
                        alignItems: "flex-start",
                        flexDirection: "column",
                        position: "relative",
                    }}
                >
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
                            <Tab
                                id={id}
                                key={i}
                                tab={tab}
                                searchOpen={handleCollapse}
                                searchRef={searchRef}
                            />
                        ))}
                    </div>
                    <div>Options</div>
                    {/* serach div */}
                    <SearchComponent
                        searchDiv={searchDiv}
                        searchCloseFunc={handleSearch}
                        searchRef={searchRef}
                    />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
