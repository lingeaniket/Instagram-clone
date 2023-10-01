import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import axios from "axios";
import { useEffect, useState, memo } from "react";
import { apiSite } from "../../../Website/website";

const Comment = ({ comment }) => {

    const [userData, setUserData] = useState({});
    useEffect(() => {
        axios.get(`${apiSite}/users/${comment.userId}`).then((response) => {
            setUserData(response.data);
        });
        // eslint-disable-next-line
    }, [comment]);
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
                </span>
                {"  "}
                {comment.text}
            </div>
            <div style={{ display: "flex", cursor: "pointer" }}>
                <FavoriteBorderRoundedIcon sx={{ fontSize: "16px" }} />
            </div>
        </div>
    );
};

export default memo(Comment);
