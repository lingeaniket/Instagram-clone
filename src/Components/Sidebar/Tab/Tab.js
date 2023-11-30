import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, memo } from "react";

import { apiSite } from "../../../Website/website";

import RoundedImage from "../../RoundedImage/RoundedImage";

import "./tab.css";

const Tab = ({ tab, searchOpen, searchRef, id, selectedTab, index, handleTab }) => {
    const navigate = useNavigate();

    const userId = JSON.parse(localStorage.getItem("userId"));
    const [userData, setUserData] = useState({});

    const handleTabSelect = () => {
        console.log(index)
        handleTab(index);
    };

    useEffect(() => {
        if (userId) {
            axios.get(`${apiSite}/users/${userId}`).then((response) => {
                setUserData(response.data);
            });
        }
    }, [userId]);

    return (
        <div
            ref={tab.title === "search" ? searchRef : null}
            className={`tab01 ${selectedTab === index ? "selected" : ""}`}
            onClick={() => {
                handleTabSelect();
                if (tab?.route) {
                    navigate(`${tab?.route}`);
                } else if (tab?.title === "search") {
                    searchOpen();
                }
            }}
        >
            <div className="tab02">
                {tab.title === "profile" ? (
                    <div className="tab04">
                        <RoundedImage url={userData.avatar} />
                    </div>
                ) : (
                    <>{tab.icon}</>
                )}
            </div>
            <div className="tab03">{tab.title}</div>
        </div>
    );
};

export default memo(Tab);
