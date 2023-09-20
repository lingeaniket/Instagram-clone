import { useEffect, useState } from "react";
import Like from "../../Icons/Like/Like";
import axios from "axios";
import { apiSite } from "../../../Website/website";

const Comment = ({ comment }) => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        // if (comment !== undefined && comment.userId !== undefined) {
        axios.get(`${apiSite}/users/${comment.userId}`).then((response) => {
            setUserData(response.data);
            // console.log(response.data);
        });
        // }
    }, [comment]);
    return (
        <div className="fullPost061">
            <div className="fullPost050">
                <div className="fullPost051">
                    <div className="fullPost052">
                        <div
                            style={{
                                height: "32px",
                                width: "32px",
                                borderRadius: "50%",
                                overflow: "hidden",
                            }}
                        >
                            <img
                                style={{
                                    maxWidth: "100%",
                                }}
                                src={`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${userData?.avatar}.jpg`}
                                alt=""
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="fullPost053">
                            <div className="fullPost054">
                                {userData?.username}
                            </div>
                        </h2>
                        <div className="fullPost055">
                            <h1 className="fullPost056">{comment?.text}</h1>
                        </div>
                        <div className="fullPost057">
                            <span className="fullPost058">
                                <span>
                                    <time
                                        className="fullPost059"
                                        dateTime="2023-09-10T08:34:19.000Z"
                                    >
                                        1 w
                                    </time>
                                </span>
                                <button className="fullPost065 fullPost071">
                                    {comment?.likes} likes
                                </button>
                                <button className="fullPost065 fullPost071">
                                    reply
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="fullPost066">
                    <Like size={12} />
                </div>
            </div>
        </div>
    );
};

export default Comment;
