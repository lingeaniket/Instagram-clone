import React from "react";

import Profile from "../Profile/Profile";

const CurrentProfile = () => {
    const userId = JSON.parse(localStorage.getItem("userId"));

    return <Profile id={userId} module="currentProfile" />;
};

export default CurrentProfile;
