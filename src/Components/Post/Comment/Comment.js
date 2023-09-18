import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import axios from "axios";
import { useEffect, useState } from "react";

const Comment = ({ comment }) => {
    // console.log(comment)

    const [userData, setUserData] = useState({});
    useEffect(() => {
        axios
            .get("https://instagram-api-aniket.onrender.com/api/v1/users")
            .then((response) => {
                setUserData(
                    response.data.users.filter(
                        (user) => user.id === comment.useId
                    )[0]
                );
            });
        console.log("rendered");
    }, []);
    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                margin: "6px 0",
                justifyContent: "space-between",
            }}
        >
            <div style={{ fontSize: "14px" }}>
                <span
                    style={{
                        fontWeight: "600",
                        cursor: "pointer",
                    }}
                >
                    {userData.username}
                </span>{" "}
                {comment.text}
            </div>
            <div style={{ display: "flex",cursor: 'pointer' }}>
                <FavoriteBorderRoundedIcon sx={{ fontSize: "16px" }} />
                {/* {comment.likes} */}
            </div>
        </div>
    );
};

export default Comment;
