import axios from "axios";
import { useEffect, useState } from "react";

import "./profile.css";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import Tabs from "./Tabs/Tabs";
import { apiSite } from "../../Website/website";
import PostList from "./PostList/PostList";
import { Outlet } from "react-router-dom";

const Profile = ({ id, module }) => {
    const [userData, setUserData] = useState({});
    const [type, setType] = useState("userProfile");
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        if (id) {
            axios.get(`${apiSite}/users/${id}`).then((response) => {
                setUserData(response.data);
            });
            axios.get(`${apiSite}/posts/${id}`).then((response) => {
                setUserPosts(response.data.posts);
            });

            if (id === JSON.parse(localStorage.getItem("userId"))) {
                setType("currentProfile");
            }
        }
    }, [id]);
    return (
        <div
            style={{
                width: "calc(100% - 40px)",
                padding: "35px 20px 0",
                margin: "0 auto 30px",
                maxWidth: "975px",
            }}
        >
            <ProfileHeader userData={userData} userPosts={userPosts} type={type} />
            <div
                style={{
                    marginBottom: "44px",
                    height: "130px",
                }}
            >
                <div
                    style={{
                        height: "100%",
                        display: "flex",
                    }}
                >
                    <ul
                        style={{
                            padding: 0,
                            display: "flex",
                            listStyleType: "none",
                        }}
                    >
                        <li
                            style={{
                                height: "100%",
                            }}
                        >
                            <div
                                style={{
                                    width: "125px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <div
                                    style={{
                                        cursor: "pointer",
                                        padding: "10px 15px",
                                        width: "115px",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "87px",
                                            height: "85px",
                                            border: "1px solid grey",
                                            borderRadius: "50%",
                                        }}
                                    ></div>
                                    <div
                                        style={{
                                            paddingTop: "15px",
                                            textAlign: "center",
                                            fontWeight: "600",
                                            fontSize: "12px",
                                        }}
                                    >
                                        heighlight
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <Tabs />
            <PostList userPosts={userPosts} userData={userData} modeId={id} module={module} />
            <Outlet />
        </div>
    );
};

export default Profile;
