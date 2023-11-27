import axios from "axios";
import { useEffect, useState, memo, lazy, Suspense } from "react";

import { apiSite } from "../../../Website/website";

import "./timelineIn.css";

const Post = lazy(() => import("../../Post/Post"));

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
                <Suspense key={post.id} fallback={<></>}>
                    <Post key={post.id} post={post} postId={post.id} id={1} />
                </Suspense>
            ))}
        </div>
    );
};

export default memo(TimelineIn);
