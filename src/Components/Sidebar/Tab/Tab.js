import axios from "axios";
import { apiSite } from "../../../Website/website";
import { useNavigate } from "react-router-dom";
import "./tab.css";
import { useEffect, useState } from "react";

const Tab = ({ tab, searchOpen, searchRef, id }) => {
    const navigate = useNavigate();
    const userId = JSON.parse(localStorage.getItem("userId"));
    const [userData, setUserData] = useState({});

    useEffect(() => {
        axios.get(`${apiSite}/users/${userId}`).then((response) => {
            setUserData(response.data);
        });
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
                    <div
                        style={{
                            height: "28px",
                            width: "28px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            overflow: "hidden",
                            borderRadius: "50%",
                        }}
                    >
                        <img
                            src={`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${userData.avatar}.jpg`}
                            alt=""
                            style={{
                                maxWidth: "100%",
                                verticalAlign: "middle",
                            }}
                        />
                    </div>
                ) : (
                    <>{tab.icon}</>
                )}
            </div>
            <div className="tab03">{tab.title}</div>
        </div>
    );
};

export default Tab;
