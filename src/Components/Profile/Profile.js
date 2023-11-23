import axios from "axios";
import { Outlet } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";

import Tabs from "./Tabs/Tabs";
import PostList from "./PostList/PostList";
import ProfileHeader from "./ProfileHeader/ProfileHeader";

import { apiSite } from "../../Website/website";

import "./profile.css";

const Profile = ({ id, module }) => {
    const [userData, setUserData] = useState({});
    const [userPosts, setUserPosts] = useState([]);
    const [type, setType] = useState("userProfile");

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
        <div className="profile001">
            <ProfileHeader userData={userData} userPosts={userPosts} type={type} />
            <Tabs />
            <PostList userPosts={userPosts} userData={userData} modeId={id} module={module} />
            <Suspense fallback={<></>}>
                <Outlet />
            </Suspense>
        </div>
    );
};

export default Profile;
