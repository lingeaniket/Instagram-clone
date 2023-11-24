import React, { memo } from "react";

import Login from "./FormLogin/Login";
import Footer from "./Footer/Footer";
import Images from "./Images/Images";

import "./accountPage.css";

const AccountPage = () => {
    return (
        <section className="acc_001 acc_01">
            <main className="acc_002 acc_01">
                <article className="acc_003 acc_03">
                    <Images />
                    <Login />
                </article>
            </main>
            <Footer />
        </section>
    );
};

export default memo(AccountPage);
