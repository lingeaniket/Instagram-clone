import React, { useEffect, useState, memo } from "react";

import { images } from "../data";

const Images = () => {
    const [image, setImage] = useState([]);
    const [timely, setTimely] = useState(1);

    const [timer, setTimer] = useState();

    useEffect(() => {
        setImage(() => images);
    }, []);

    useEffect(() => {
        if (timer) {
            clearTimeout(timer);
        }
        const time = setTimeout(() => {
            setTimely((prev) => {
                if (prev > -1 && prev < 3) {
                    return prev + 1;
                } else if (prev === 3) {
                    return 0;
                }
            });
        }, 4000);
        setTimer(() => time);
        // eslint-disable-next-line
    }, [timely]);

    return (
        <div className="acc_004">
            <div className="acc_005 acc_01">
                {image.map((val, index) => (
                    <img
                        key={val}
                        className={`acc_006 acc_07 ${
                            timely === index ? "opacity1 acc_anim_in" : timely - 1 === index || -1 ? "opacity0 acc_anim_out" : "opacity0"
                        }`}
                        src={val}
                        alt=""
                    />
                ))}
            </div>
        </div>
    );
};

export default memo(Images);
