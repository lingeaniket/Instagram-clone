import React from "react";
import { useSelector } from "react-redux";
import Back from "../../Icons/Back/Back";


const Navigation = ({postIndex, handlePrev, prevBtnRef, handleNext, nextBtnRef }) => {
  const fullPostMode = useSelector((state) => state.fullPostData.mode);
  const fullPostData = useSelector((state) => state.fullPostData.postArray);

    return (
        <div>
            <div className="fullPost012 fullPost063">
                {(fullPostMode === "profile" ||
                    fullPostMode === "userProfile") && (
                    <div className="fullPost013 fullPost063">
                        {postIndex > 0 && (
                            // {index !== "first" && (
                            <div
                                className="fullPost014"
                                style={{
                                    left: 0,
                                }}
                                onClick={handlePrev}
                                ref={prevBtnRef}
                            >
                                <button className="fullPost015 fullPost016 fullPost006">
                                    <div className="fullPost016">
                                        <span className="fullPost017">
                                            <Back title="Go back" />
                                        </span>
                                    </div>
                                </button>
                            </div>
                        )}
                        {postIndex < fullPostData?.length - 1 && (
                            <div
                                className="fullPost014"
                                style={{
                                    right: 0,
                                }}
                                onClick={handleNext}
                                ref={nextBtnRef}
                            >
                                <button className="fullPost015 fullPost016 fullPost006">
                                    <div className="fullPost016">
                                        <span className="fullPost018">
                                            <Back title="Next" />
                                        </span>
                                    </div>
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navigation;
