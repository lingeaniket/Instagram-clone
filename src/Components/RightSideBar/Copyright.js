import React from "react";

const Copyright = () => {
    const buttons = ["About", "Help", "Press", "API", "Jobs", "Privacy", "Terms", "Locations", "Language", "Meta Verified"];

    return (
        <div className="rsb014">
            <div className="rsb015">
                <div className="rsb016">
                    <ul className="rsb017">
                        {buttons.map((button, index) => (
                            <li className="rsb018" key={index}>
                                <span className="rsb019 dotPoint">
                                    <span className="rsb020">{button}</span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="rsb019 rsb021">
                    <div className="rsb020">© 2023 Instagram from Meta</div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Copyright);
