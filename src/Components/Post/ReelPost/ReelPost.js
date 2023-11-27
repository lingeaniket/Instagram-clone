import React, { memo } from "react";

import Reel from "../../Icons/Reel/Reel";

const ReelPost = () => {
    return (
        <div className="explore005 explore007">
            <div>
                <div className="explore008 w_100">
                    <div className="w_100">
                        <div className="explore010">Reel image</div>
                    </div>
                </div>
                <div className="explore011">
                    <Reel />
                </div>
            </div>
        </div>
    );
};

export default memo(ReelPost);
