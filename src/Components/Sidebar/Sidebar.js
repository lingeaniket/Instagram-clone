import { useLocation, useNavigate } from "react-router-dom";
import { Suspense, lazy, useEffect, useRef, useState, memo, useCallback } from "react";

import { socket } from "../../App";
import { tabArr } from "../ExtraData/extraData";

import Tab from "./Tab/Tab";
import Instagram from "../Icons/Instagram/Instagram";
import MoreSettings from "../Icons/MoreSettings/MoreSettings";
import InstagramTitle from "../Icons/InstagramTitle/InstagramTitle";
import SearchComponent from "./SearchComponent/SearchComponent";

import "./sidebar.css";

const NewPost = lazy(() => import("../Post/NewPost/NewPost"));
const NewPostMobile = lazy(() => import("../Post/NewPost/NewPostMobile"));

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const userId = JSON.parse(localStorage.getItem("userId"));

    const [id, setId] = useState(0);
    const [searchDiv, setSearchDiv] = useState(false);
    const [createOpen, setCreateOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState(0);
    const [lastSelection, setLastSelection] = useState(0);

    const searchRef = useRef(null);

    const handleSearch = (clickevent) => {
        setSearchDiv(clickevent);
    };

    const handleCollapse = () => {
        setSearchDiv((prev) => !prev);
    };

    const handleCreate = () => {
        setLastSelection(selectedTab);
        document.body.style.overflow = "hidden";
        setSelectedTab(4);
        setCreateOpen((prev) => !prev);
    };

    const handleCloseCreate = () => {
        setSelectedTab(lastSelection);
        document.body.style.overflow = "auto";
        setCreateOpen(false);
    };
    const handleSelectedTab = useCallback((id) => {
        setSelectedTab(id);
    }, []);

    useEffect(() => {
        console.log(location.pathname);
        if (location.pathname.includes("explore")) {
            setSelectedTab(2);
        } else if (location.pathname.includes("profile")) {
            setSelectedTab(5);
        } else if(location.pathname.length === 1 && location.pathname.includes("/")) {
            setSelectedTab(0);
        } else {
            setSelectedTab(-1)
        }
    }, [location]);

    useEffect(() => {
        socket.on("notification", () => {
            setId((prev) => prev + 1);
        });
    }, []);

    return (
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
                            return (
                                <Tab
                                    selectedTab={selectedTab}
                                    index={i}
                                    id={id}
                                    key={i}
                                    tab={tab}
                                    searchOpen={handleCollapse}
                                    searchRef={searchRef}
                                    handleTab={handleSelectedTab}
                                />
                            );
                        } else {
                            return <></>;
                        }
                    } else if (tab.title === "create") {
                        return (
                            <div key={i} className={`tab01 ${selectedTab === i ? "selected" : ""}`} onClick={handleCreate}>
                                <div className="tab02">{tab.icon}</div>
                                <div className="tab03">{tab.title}</div>
                            </div>
                        );
                    }
                    return (
                        <Tab
                            id={id}
                            handleTab={handleSelectedTab}
                            selectedTab={selectedTab}
                            index={i}
                            key={i}
                            tab={tab}
                            searchOpen={handleCollapse}
                            searchRef={searchRef}
                        />
                    );
                })}
            </div>
            <div className="w_100">
                <Tab
                    tab={{
                        title: "More",
                        icon: <MoreSettings />,
                    }}
                    selectedTab={selectedTab}
                    index={6}
                    handleTab={handleSelectedTab}
                    searchRef={searchRef}
                />
            </div>
            {searchDiv && <SearchComponent searchDiv={searchDiv} searchCloseFunc={handleSearch} searchRef={searchRef} />}
            {createOpen && (
                <div>
                    <span className="switchView01">
                        <Suspense fallback={<></>}>
                            <NewPost setOpen={handleCloseCreate} />
                        </Suspense>
                    </span>
                    <span className="switchView02">
                        <Suspense fallback={<></>}>
                            <NewPostMobile />
                        </Suspense>
                    </span>
                </div>
            )}
        </div>
        // <div className="side01">
        //     <div className="side02">
        //     </div>
        // </div>
    );
};

export default memo(Sidebar);
