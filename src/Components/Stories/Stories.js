import React, { memo } from "react";

import RoundedImage from "../RoundedImage/RoundedImage";

import "./stories.css";

const Stories = () => {
    return (
        <div className="story001">
            <div>
                <div className="story002">
                    <div className="story003">
                        <div className="story004">
                            <div className="story005">
                                <div className="story006">
                                    <ul className="story007">
                                        {/* list map stories */}
                                        {[1, 2, 5, 9, 6, 3, 8, 7, 4].map((val) => (
                                            <li key={val} className="story008">
                                                <div className="story009">
                                                    <div className="story010">
                                                        <div className="story011">
                                                            <div className="story012">
                                                                <RoundedImage />
                                                            </div>
                                                        </div>
                                                        <div className="story014">
                                                            <div className="story015">username</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Stories);
