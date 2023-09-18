import { useEffect, useState } from "react";
import axios from "axios";
import "./timelineIn.css";
import Post from "../../Post/Post";

const TimelineIn = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("https://instagram-api-aniket.onrender.com/api/v1/posts/1")
            .then((response) => {
                setData(response.data.posts);
            });

            console.log('rendered parent')
    }, []);
    return (
        <div
            className="w_80"
            style={{ display: "flex", justifyContent: "center", }}
        >
            <div style={{
                maxWidth: '470px'
            }}>
                {data.map((post) => (
                    <Post post={post} id={1} />
                ))}
            </div>
        </div>
    );
};

export default TimelineIn;
