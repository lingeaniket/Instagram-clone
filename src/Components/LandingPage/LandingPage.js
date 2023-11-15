import React, { useEffect, useState } from "react";
import Home from "../Home/Home";
import AccountPage from "../Account/AccountPage";
import LoadingPage from "../LoadingPage/LoadingPage";

const LandingPage = () => {
    const user = JSON.parse(localStorage.getItem("userId"));

    const [userId, setUserId] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            setUserId(user);
        }
    }, [user]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    if (loading) {
        return <LoadingPage />;
    } else {
        if (userId) {
            return <Home />;
        } else {
            return <AccountPage />;
        }
    }
};

export default LandingPage;
