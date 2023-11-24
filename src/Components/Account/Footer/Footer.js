import React, { memo, useEffect, useState } from "react";

import { tabs, languages } from "../data";

import Arrow from "../../Icons/Arrow/Arrow";


const Footer = () => {
    const [data, setData] = useState([]);
    const [lang, setLang] = useState([]);

    useEffect(() => {
        setData(() => tabs);
        setLang(() => languages);
    }, []);

    return (
        <footer className="acc_042 acc_01">
            <div className="acc_043 acc_01">
                <div className="acc_013 acc_01">
                    <div className="acc_045 acc_024 acc_03">
                        {data.map((btn) => (
                            <div className="acc_046" style={{
                                lineHeight: '11px'
                            }} key={btn}>
                                <span className="acc_02">{btn}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="acc_048 acc_03">
                    <span className="acc_049">
                        <div className="acc_03 acc_04">
                            <span className="acc_02">English (UK)</span>
                            <div className="acc_052 acc_01 acc_03 acc_04">
                                <span className="acc_053">
                                    <Arrow />
                                </span>
                            </div>
                        </div>
                        <select name="" id="" className="acc_054 acc_07">
                            {lang.map((lng) => (
                                <option key={lng.value} value={lng.value}>
                                    {lng.name}
                                </option>
                            ))}
                        </select>
                    </span>
                    <div className="acc_055 acc_01">
                        <span className="acc_056 acc_02 acc_04" style={{
                            lineHeight: '12px'
                        }}>© 2023 Instagram from Meta</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default memo(Footer);
