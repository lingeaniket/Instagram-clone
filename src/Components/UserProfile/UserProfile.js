import React, { useEffect, useState } from "react";
import Profile from "../Profile/Profile";
import { useParams } from "react-router-dom";

const UserProfile = () => {
    const { id } = useParams();
    const [userId, setUserId] = useState();
    useEffect(() => {
        setUserId(Number(id));
        console.log(id)
    }, [id]);
    return <Profile id={userId} />;
};

export default UserProfile;
