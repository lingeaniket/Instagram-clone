import React, { memo } from "react";

import Profile from "../Profile";

const CurrentProfile = () => {
    const userId = JSON.parse(localStorage.getItem("userId"));

    return <Profile id={userId} module="currentProfile" />;
};

export default memo(CurrentProfile);
