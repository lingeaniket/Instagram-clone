import React, { memo } from "react";

import MediaIcon from "../../../Icons/MediaIcon/MediaIcon";

const LandPage = ({ handleStep }) => {
    return (
        <div className="new_post011">
            <div className="new_post012">
                <MediaIcon />
                <div className="new_post013">Drag photos and videos here</div>
                <div className="new_post014">
                    <div className="new_post015">
                        <button
                            className="new_post016"
                            onClick={() => {
                                handleStep(2);
                            }}
                        >
                            Select from data
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(LandPage);
