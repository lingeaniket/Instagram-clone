import { useSelector } from "react-redux";
import React, { Suspense, lazy, useEffect, useState } from "react";

import Home from "../Home/Home";
import LoadingPage from "../LoadingPage/LoadingPage";

const AccountPage = lazy(() => import("../Account/AccountPage"));

const LandingPage = () => {
    const isLoggedIn = useSelector((state) => state.authLogin.isLoggedIn);

    const [user, setUser] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (isLoggedIn) {
            setUser(isLoggedIn);
        }
    }, [isLoggedIn]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    if (loading) {
        return <LoadingPage />;
    } else {
        if (user) {
            return <Home />;
        } else {
            return (
                <Suspense fallback={<></>}>
                    <AccountPage />
                </Suspense>
            );
        }
    }
};

export default LandingPage;
