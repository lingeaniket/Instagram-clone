import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { postUpdates } from "../../../Features/newPostDetailsSlice";

const PostSuccess = () => {
    const dispath = useDispatch();

    const update = () => {
        dispath(postUpdates());
    };
    useEffect(() => {
        update();
        // eslint-disable-next-line
    }, []);
    return (
        <div className="posting_027">
            <div className="posting_028">
                <img
                    draggable="false"
                    height="100%"
                    width="100%"
                    alt=""
                    src="https://static.cdninstagram.com/rsrc.php/v3/yA/r/34QF6MIeoYt.gif"
                ></img>
            </div>
        </div>
    );
};

export default PostSuccess;
