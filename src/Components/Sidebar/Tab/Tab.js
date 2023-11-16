import axios from "axios";
import { useEffect, useState, memo } from "react";
import { useNavigate } from "react-router-dom";

import { apiSite } from "../../../Website/website";
import RoundedImage from "../../RoundedImage/RoundedImage";

import "./tab.css";

const Tab = ({ tab, searchOpen, searchRef, id }) => {
    const navigate = useNavigate();

    const userId = JSON.parse(localStorage.getItem("userId"));
    const [userData, setUserData] = useState({});

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
            className="tab01"
            onClick={() => {
                if (tab?.route) {
                    navigate(`${tab?.route}`);
                } else if (tab?.title === "search") {
                    searchOpen();
                }
            }}
        >
            {/* {tab.title === "messages" && <div>{id}</div>} */}
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
