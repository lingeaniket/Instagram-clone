import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./explore.css";
import { generateRandomUsersAndPosts } from "./function";
// import Reel from '../Icons/Reel/Reel'
import Loader from "../Icons/Loader/Loader";
import ImagePost from "./ImagePost/ImagePost";
// import ReelPost from "./ReelPost/ReelPost";
import FullPost from "../Fullpost/FullPost";
const Explore = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedpost] = useState();
    const [userPost, setUserPost] = useState([]);
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        document.body.style.overflow = "auto";
        setOpen(() => false);
    };

    const handlePost = (mainIndex, index) => {
        handleClose();
        setSelectedpost(() => Number(index));
        setUserPost(() => posts[mainIndex]);
        setTimeout(() => {
            setOpen(() => true);
            document.body.style.overflow = "hidden";
        }, 250);
    };

    useEffect(() => {
        const generateRandom = async () => {
            const data1 = await generateRandomUsersAndPosts();
            const data2 = await generateRandomUsersAndPosts();

            setPosts((prev) => [...prev, data1, data2]);
        };

        generateRandom();
    }, []);

    return (
        <div className="explore001">
            <div className="explore002">
                <div className="explore003">
                    {/* main list five component div */}
                    <InfiniteScroll
                        style={{ overflow: "hidden" }}
                        dataLength={posts.length}
                        next={async () => {
                            const data = await generateRandomUsersAndPosts();

                            setPosts((prev) => [...prev, data]);
                        }}
                        hasMore={true}
                        loader={
                            <>
                                {/* <div className="explore013">
                                    <div className="explore014">
                                        <Loader />
                                    </div>
                                </div> */}
                                {/* <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        width: "100%",
                                        height: "100px",
                                        alignItems: "center",
                                    }}
                                >
                                    <div className="explore014">
                                        <Loader />
                                    </div>
                                </div> */}
                            </>
                        }
                    >
                        {posts.map((user, index) => (
                            <div className="explore004">
                                {user?.map((post, idx) => (
                                    <ImagePost
                                        post={post.post}
                                        handlePost={handlePost}
                                        mainDiv={index}
                                        index={idx}
                                    />
                                ))}
                            </div>
                        ))}
                    </InfiniteScroll>
                </div>
            </div>
            <div className="explore013">
                <div className="explore014">
                    <Loader />
                </div>
            </div>
            <FullPost
                post={selectedPost}
                open={open}
                handleClose={handleClose}
                userPosts={userPost}
                setSelectedpost={setSelectedpost}
                userData={userPost[selectedPost]?.account}
                explore={true}
            />
        </div>
    );
};

export default Explore;
