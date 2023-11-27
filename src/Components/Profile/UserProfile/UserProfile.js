import { Outlet, useParams } from "react-router-dom";
import React, { Suspense, useEffect, useState, memo } from "react";

import Profile from "../Profile";

const UserProfile = () => {
    const { id } = useParams();

    const [userId, setUserId] = useState();

    useEffect(() => {
        setUserId(Number(id));
    }, [id]);

    return (
        <>
            <Profile id={userId} module="userProfile" />
            <Suspense fallback={<></>}>
                <Outlet />
            </Suspense>
        </>
    );
};

export default memo(UserProfile);
