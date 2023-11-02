import axios from "axios";
import { useEffect, useState, memo } from "react";

import Post from "../../Post/Post";

import { apiSite } from "../../../Website/website";

import "./timelineIn.css";

const TimelineIn = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`${apiSite}/posts/1`).then((response) => {
            setData(response.data.posts);
        });
    }, []);

    return (
        <div className="timelineIn02">
            {data.map((post) => (
                <Post post={post} postId={post.id} id={1} />
            ))}
        </div>
    );
};

export default memo(TimelineIn);
