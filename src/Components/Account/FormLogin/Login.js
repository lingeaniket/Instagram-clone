import axios from "axios";
import { useDispatch } from "react-redux";
import React, { memo, useState } from "react";

import { validate } from "./authFunctions";
import { apiSite } from "../../../Website/website";
import { handleUserLogin } from "../../../Features/authLogin";

const Login = () => {
    const dispatch = useDispatch();

    const [error, setError] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passReveal, setPassReveal] = useState(false);

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handlePassReveal = () => {
        setPassReveal((prev) => !prev);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async () => {
        setError(false);
        const user = await axios.get(`${apiSite}/users/findUser/${username}`);
        if (user.data) {
            const { id, email } = user.data;
            localStorage.setItem("userId", JSON.stringify(id));
            const valid = await validate(email, password);
            if (valid) {
                setTimeout(() => {
                    dispatch(handleUserLogin());
                }, 2000);
            } else {
                setError(true);
            }
        } else {
            setError(true);
        }
    };

    return (
        <div className="acc_007 acc_01">
            <div className="acc_008 acc_01 acc_04">
                <div className="acc_009 acc_01">
                    <div>
                        <i className="acc_010" role="img"></i>
                    </div>
                </div>
                <div className="acc_011">
                    <div className="acc_01">
                        <div className="acc_013 acc_01">
                            <div className="acc_014">
                                <div className="acc_015 acc_04">
                                    <label htmlFor="" className="acc_016 acc_024">
                                        <span className={`acc_017 ${username ? "acc_trf" : ""}`}>
                                            Phone number, username or email address
                                        </span>
                                        <input
                                            type="text"
                                            className={`acc_018 ${username ? "acc_012" : "acc_039"}`}
                                            value={username}
                                            required
                                            maxLength={75}
                                            onChange={handleUsername}
                                        />
                                    </label>
                                    <div className="acc_019 acc_04"></div>
                                </div>
                            </div>
                            <div className="acc_014">
                                <div className="acc_015 acc_04">
                                    <label htmlFor="" className="acc_016 acc_024">
                                        <span className={`acc_017 ${password ? "acc_trf" : ""}`}>Password</span>
                                        <input
                                            type={passReveal ? "text" : "password"}
                                            required
                                            className={`acc_018 ${password ? "acc_012" : "acc_039"}`}
                                            value={password}
                                            maxLength={75}
                                            onChange={handlePassword}
                                        />
                                    </label>
                                    <div className="acc_019">
                                        {password && (
                                            <div className="acc_034">
                                                <button onClick={handlePassReveal} className="acc_037">
                                                    {passReveal ? "Hide" : "Show"}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="acc_020">
                                <button
                                    className={`acc_021 acc_05 acc_06 ${password.length < 6 || username.length < 1 ? "acc_044" : ""}`}
                                    onClick={handleLogin}
                                    disabled={password.length < 6 || username.length < 1}
                                >
                                    <div className="acc_022 acc_01">Log in</div>
                                </button>
                            </div>
                            <div className="acc_023">
                                <div className="acc_024">
                                    <div className="acc_025"></div>
                                    <div className="acc_026">OR</div>
                                    <div className="acc_025"></div>
                                </div>
                            </div>
                            <div className="acc_027">
                                <button className="acc_028 acc_05 acc_06">
                                    <span className="acc_029"></span>
                                    <span className="acc_030">Log in with Facebook</span>
                                </button>
                            </div>
                        </div>
                        {error && (
                            <span>
                                <div className="acc_error">
                                    Sorry, your username/password was incorrect. Please double-check your username/password.
                                </div>
                            </span>
                        )}
                        <div className="acc_031">
                            <span className="acc_032">Forgotten your password?</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="acc_033 acc_01 acc_04">
                <span className="acc_02">
                    <p className="acc_035 acc_06">
                        Don't have an account? <span className="acc_036">Sign up</span>
                    </p>
                </span>
            </div>
            <div className="acc_01">
                <div className="acc_038 acc_06">
                    <span
                        className="acc_02"
                        style={{
                            fontSize: "14px",
                            color: "black",
                        }}
                    >
                        Get the app.
                    </span>
                </div>
                <div className="acc_040 acc_03">
                    <div className="acc_041">
                        <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" height={"40px"} alt="" />
                    </div>
                    <div>
                        <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" height={"40px"} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Login);
