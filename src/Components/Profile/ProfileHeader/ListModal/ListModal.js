import React, { useEffect, useRef, useState } from "react";

import Close from "../../../Icons/Close/Close";
import Search from "../../../Icons/Search/Search";
import SingleList from "../SingleList/SingleList";

import "./listModal.css";

const ListModal = ({ listType, handleClose, userData }) => {
    const containerRef = useRef(null);
    
    const [follow, setFollow] = useState([]);

    const loadData = () => {
        setFollow(() => userData[listType]);
    };

    useEffect(() => {
        loadData();
        // eslint-disable-next-line
    }, [listType]);

    return (
        <div className="listModal001">
            <div className="listModal002">
                <div className="listModal003">
                    <div className="listModal004">
                        <div className="listModal005">
                            <div className="listModal006">
                                <div className="listModal007">
                                    <div className="listModal008">
                                        <div className="listModal009">
                                            <div className="listModal010">
                                                <div className="listModal011">
                                                    <div>Followers</div>
                                                </div>
                                            </div>
                                            <div className="listModal012">
                                                <div className="listModal013">
                                                    <div
                                                        className="listModal014"
                                                        onClick={handleClose}
                                                    >
                                                        <div>
                                                            <Close size={14} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listModal015">
                                        <div className="listModal016">
                                            <input
                                                type="text"
                                                className="listModal017"
                                            />
                                            <div className="listModal018">
                                                <div className="listModal019">
                                                    <Search />
                                                </div>
                                                <div className="listModal020">
                                                    Search
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listModal021">
                                        <div className="listModal022">
                                            <div ref={containerRef}>
                                                {follow?.map((followe) => (
                                                    <SingleList
                                                        followe={followe}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListModal;
