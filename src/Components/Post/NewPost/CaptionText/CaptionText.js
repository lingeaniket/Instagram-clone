import { useDispatch } from "react-redux";
import React, { useState, memo } from "react";

import { addCaptiion } from "../../../../Features/newPostDetailsSlice";

import Emoji from "../../../Icons/Emoji/Emoji";

const CaptionText = () => {
    const dispatch = useDispatch();

    const [timer, setTimer] = useState("");
    const [caption, setCaption] = useState("");

    const handleInput = (e) => {
        if (e.target.innerText.length < 2200) {
            setCaption(e.target.innerText);
            if (timer) {
                clearTimeout(timer);
            }
            setTimer(
                setTimeout(() => {
                    dispatch(addCaptiion(e.target.innerText));
                }, 500)
            );
        } else {
            e.target.innerText = caption;
        }
    };

    return (
        <div className="posting_015">
            <div className="posting_016">
                <div className="posting_017" contentEditable="true" onInput={handleInput}></div>
                {caption.length === 0 && <div className="posting_018">Write a caption...</div>}
            </div>
            <div className="posting_019">
                <div className="posting_020">
                    <button className="posting_021">
                        <Emoji />
                    </button>
                </div>
                <div className="posting_022">
                    <div className="posting_023">
                        <span className="posting_024">
                            <span className="posting_025">
                                <span className="posting_026">{caption.length}</span>/ <span className="posting_026">2,200</span>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(CaptionText);
