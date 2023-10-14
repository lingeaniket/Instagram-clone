import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

import Profile from "../Profile/Profile";

const UserProfile = () => {
    const { id } = useParams();

    const [userId, setUserId] = useState();

    useEffect(() => {
        setUserId(Number(id));
    }, [id]);

    return (
        <>
            <Profile id={userId} module="userProfile" />
            <Outlet />
        </>
    );
};

export default UserProfile;
