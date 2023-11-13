import React, { useEffect, useState } from "react";
import Home from "../Home/Home";
import AccountPage from "../Account/AccountPage";

const LandingPage = () => {
    const user = localStorage.getItem("userId");

    const [userId, setUserId] = useState("");

    useEffect(() => {
        if (user) {
            setUserId(user);
        }
    }, [user]);

    if (userId) {
        return <Home />;
    } else {
        return <AccountPage />;
    }
};

export default LandingPage;
