import "./fullPost.css";
import Close from "../Icons/Close/Close";
import Back from "../Icons/Back/Back";

import ImageComponent from "./ImageComponent/ImageComponent";
import PostDetailComponent from "./PostDetailComponent/PostDetailComponent";
import { useEffect, useState } from "react";

const FullPost = ({
    post,
    open,
    handleClose,
    userPosts,
    setSelectedpost,
    userData,
}) => {
    // console.log(post)
    const [selected, setSelected] = useState({});
    const handleNext = () => {
        setSelectedpost((prev) => prev + 1);
    };

    const handlePrev = () => {
        setSelectedpost((prev) => prev - 1);
    };

    useEffect(() => {
        setSelected(() => userPosts[post]);
    }, [post, userPosts]);
    return (
        <div
            className="fullPost001"
            style={{
                display: `${open ? "block" : "none"}`,
            }}
        >
            <div className="fullPost002">
                <div className="fullPost003">
                    <div className="fullPost004"></div>
                    <div className="fullPost005" onClick={handleClose}>
                        <div className="fullPost006 fullPost016">
                            <Close />
                        </div>
                    </div>
                    <div className="fullPost007">
                        <div className="fullPost008 fullPost042">
                            <div className="fullPost009">
                                <div className="fullPost010 fullPost063 fullPost016">
                                    <div className="fullPost011">
                                        <div>
                                            <div className="fullPost012 fullPost063">
                                                <div className="fullPost013 fullPost063">
                                                    {post > 0 && (
                                                        <div
                                                            className="fullPost014"
                                                            style={{
                                                                left: 0,
                                                            }}
                                                            onClick={handlePrev}
                                                        >
                                                            <button className="fullPost015 fullPost016 fullPost006">
                                                                <div className="fullPost016">
                                                                    <span className="fullPost017">
                                                                        <Back />
                                                                    </span>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    )}
                                                    {post <
                                                        userPosts.length -
                                                            1 && (
                                                        <div
                                                            className="fullPost014"
                                                            style={{ right: 0 }}
                                                            onClick={handleNext}
                                                        >
                                                            <button className="fullPost015 fullPost016 fullPost006">
                                                                <div className="fullPost016">
                                                                    <span className="fullPost018">
                                                                        <Back />
                                                                    </span>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="fullPost019">
                                            <div className="fullPost020 fullPost042">
                                                <div className="fullPost021">
                                                    <ImageComponent
                                                        id={selected?.id}
                                                    />
                                                    <PostDetailComponent
                                                        post={selected}
                                                        userData={userData}
                                                    />
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
        </div>
    );
};

export default FullPost;
