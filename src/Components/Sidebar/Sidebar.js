import { useNavigate } from "react-router-dom";
import { Fragment, useEffect, useRef, useState } from "react";

import Tab from "./Tab/Tab";
import SearchComponent from "./SearchComponent/SearchComponent";

import { socket } from "../../App";
import { tabArr } from "../ExtraData/extraData";

import "./sidebar.css";
import Instagram from "../Icons/Instagram/Instagram";
import InstagramTitle from "../Icons/InstagramTitle/InstagramTitle";
import MoreSettings from "../Icons/MoreSettings/MoreSettings";
import NewPost from "../NewPost/NewPost";

const Sidebar = () => {
    const navigate = useNavigate();

    const userId = JSON.parse(localStorage.getItem("userId"));

    const [id, setId] = useState(0);
    const [searchDiv, setSearchDiv] = useState(false);
    const [createOpen, setCreateOpen] = useState(false);

    const searchRef = useRef(null);

    const handleSearch = (clickevent) => {
        setSearchDiv(clickevent);
    };

    const handleCollapse = () => {
        setSearchDiv((prev) => !prev);
    };

    const handleCreate = () => {
        if (createOpen) {
            document.body.style.overflow = "auto";
        } else {
            document.body.style.overflow = "hidden";
        }
        setCreateOpen((prev) => !prev);
    };

    useEffect(() => {
        socket.on("notification", () => {
            setId((prev) => prev + 1);
        });
    }, []);

    return (
        <div className="side01">
            <div className="side02">
                <div className="side05">
                    <div
                        className="side03"
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        <div className="side08">
                            <div className="side09">
                                <span className="side06">
                                    <InstagramTitle />
                                </span>
                                <span className="side07">
                                    <Instagram />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="side04">
                        {tabArr.map((tab, i) => {
                            if (tab.title === "profile") {
                                if (userId) {
                                    return <Tab id={id} key={i} tab={tab} searchOpen={handleCollapse} searchRef={searchRef} />;
                                } else {
                                    return <></>;
                                }
                            } else if (tab.title === "create") {
                                return (
                                    <span key={i} onClick={handleCreate}>
                                        <Tab tab={tab} searchOpen={handleCollapse} searchRef={searchRef} />
                                    </span>
                                );
                            }
                            return <Tab id={id} key={i} tab={tab} searchOpen={handleCollapse} searchRef={searchRef} />;
                        })}
                    </div>
                    <div className="w_100">
                        <Tab
                            tab={{
                                title: "More",
                                icon: <MoreSettings />,
                            }}
                            searchRef={searchRef}
                        />
                    </div>
                    <SearchComponent searchDiv={searchDiv} searchCloseFunc={handleSearch} searchRef={searchRef} />
                    {createOpen && <NewPost setOpen={setCreateOpen} />}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
