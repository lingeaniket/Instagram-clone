import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import { apiSite } from "../../../Website/website";

const PostComponent = ({ id, setPost }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (id) {
            const loadPosts = async () => {
                const data = await axios.get(`${apiSite}/posts/${id}`);
                setPost(data.data.posts.length);
                setPosts(data.data.posts.slice(0, 3));
            };
            loadPosts();
        }
        // eslint-disable-next-line
    }, [id]);
    return (
        <div className="accModal009">
            {/* list */}
            {posts.length === 0 ? (
                <>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div className="accModal010" key={index}></div>
                    ))}
                </>
            ) : (
                <>
                    {posts.map((post) => (
                        <div className="accModal010" key={post._id}>
                            <img src={`https://picsum.photos/id/${post.id}/500/500`} className="accModal011" alt="" />
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default memo(PostComponent);
