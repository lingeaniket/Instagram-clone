import axios from "axios";
import { useEffect, useState } from "react";
import Options from "../Icons/Options/Options";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "./profile.css";
import Comment from "../Icons/Comment/Comment";
import Like from "../Icons/Like/Like";

const Profile = ({ id = 12 }) => {
    const [userData, setUserData] = useState({});
    const [userPosts, setUserPosts] = useState([]);
    useEffect(() => {
        axios
            .get("https://instagram-api-aniket.onrender.com/api/v1/users")
            .then((response) => {
                setUserData(
                    response.data.users.filter((user) => user.id === id)[0]
                );
            });
        axios
            .get(`https://instagram-api-aniket.onrender.com/api/v1/posts/${id}`)
            .then((response) => {
                setUserPosts(response.data.posts);
            });
    }, [id]);
    return (
        <div
            style={{
                width: "calc(100% - 40px)",
                padding: "35px 20px 0",
                margin: "0 auto 30px",
                maxWidth: "935px",
            }}
        >
            <div
                style={{
                    marginBottom: "44px",
                    display: "flex",
                }}
            >
                <div
                    style={{
                        marginRight: "30px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexGrow: "1",
                        flexBasis: "0",
                    }}
                >
                    <div
                        style={{
                            width: "150px",
                            height: "150px",
                            borderRadius: "50%",
                            border: "0.5px solid rgba(0, 0, 0, 0.4)",
                            overflow: "hidden",
                        }}
                    >
                        <img
                            style={{}}
                            className="post005"
                            src={`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${userData.avatar}.jpg`}
                            alt="title1"
                        />
                    </div>
                </div>
                <div
                    style={{
                        flexGrow: "2",
                        flexBasis: "30px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <span
                            style={{
                                cursor: "pointer",
                            }}
                        >
                            <h2
                                style={{
                                    lineHeight: "25px",
                                    fontWeight: "400",
                                    fontSize: "20px",
                                }}
                            >
                                {userData.username}
                            </h2>
                        </span>
                        <div
                            style={{
                                marginLeft: "20px",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "stretch",
                                }}
                            >
                                <div
                                    style={{
                                        marginLeft: "8px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <button
                                        style={{
                                            border: "none",
                                            backgroundColor: "rgb(239,239,239",
                                            borderRadius: "8px",
                                            padding: "7px 16px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                }}
                                            >
                                                Following
                                                <div
                                                    style={{
                                                        transform:
                                                            "rotate(180deg)",
                                                        marginLeft: "4px",
                                                    }}
                                                >
                                                    <svg
                                                        aria-label="Down Chevron Icon"
                                                        class="x1lliihq x1n2onr6"
                                                        color="rgb(0, 0, 0)"
                                                        fill="rgb(0, 0, 0)"
                                                        height="12"
                                                        role="img"
                                                        viewBox="0 0 24 24"
                                                        width="12"
                                                    >
                                                        <title>
                                                            Down Chevron Icon
                                                        </title>
                                                        <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div
                                    style={{
                                        marginLeft: "8px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <button
                                        style={{
                                            border: "none",
                                            backgroundColor: "rgb(239,239,239",
                                            borderRadius: "8px",
                                            padding: "7px 16px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                }}
                                            >
                                                Message
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div
                                    style={{
                                        marginLeft: "8px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <button
                                        style={{
                                            border: "none",
                                            backgroundColor: "rgb(239,239,239",
                                            borderRadius: "8px",
                                            padding: "8px",
                                            fontWeight: "600",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <div>
                                            <svg
                                                aria-label="Similar accounts"
                                                class="x1lliihq x1n2onr6"
                                                color="rgb(0, 0, 0)"
                                                fill="rgb(0, 0, 0)"
                                                height="16"
                                                role="img"
                                                viewBox="0 0 24 24"
                                                width="16"
                                            >
                                                <title>Similar accounts</title>
                                                <path
                                                    d="M19.006 8.252a3.5 3.5 0 1 1-3.499-3.5 3.5 3.5 0 0 1 3.5 3.5Z"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-miterlimit="10"
                                                    stroke-width="2"
                                                ></path>
                                                <path
                                                    d="M22 19.5v-.447a4.05 4.05 0 0 0-4.05-4.049h-4.906a4.05 4.05 0 0 0-4.049 4.049v.447"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                ></path>
                                                <line
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="2"
                                                    x1="5.001"
                                                    x2="5.001"
                                                    y1="7.998"
                                                    y2="14.003"
                                                ></line>
                                                <line
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="2"
                                                    x1="8.004"
                                                    x2="2.003"
                                                    y1="11"
                                                    y2="11"
                                                ></line>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                                <div
                                    style={{
                                        marginLeft: "5px",
                                    }}
                                >
                                    <div
                                        style={{
                                            padding: "8px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Options />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            marginBottom: "20px",
                        }}
                    ></div>
                    <ul
                        style={{
                            marginBottom: "20px",
                            display: "flex",
                            listStyleType: "none",
                            padding: 0,
                        }}
                    >
                        <li
                            style={{
                                fontSize: "16px",
                                marginRight: "40px",
                            }}
                        >
                            <span
                                style={{
                                    fontWeight: "600",
                                }}
                            >
                                {userPosts.length}
                            </span>{" "}
                            posts
                        </li>
                        <li
                            style={{
                                fontSize: "16px",
                                marginRight: "40px",
                            }}
                        >
                            <span
                                style={{
                                    fontWeight: "600",
                                }}
                            >
                                22
                            </span>{" "}
                            followers
                        </li>
                        <li
                            style={{
                                fontSize: "16px",
                                marginRight: "40px",
                            }}
                        >
                            <span
                                style={{
                                    fontWeight: "600",
                                }}
                            >
                                22
                            </span>{" "}
                            following
                        </li>
                    </ul>
                    <div>
                        <div
                            style={{
                                lineHeight: "18px",
                                fontSize: '14px',
                                fontWeight: '600'
                            }}
                        >
                            {userData.first_name} {userData.last_name}
                        </div>
                        <div
                            style={{
                                padding: "6px 0",
                            }}
                        ></div>
                        <div>
                            <h1>{userData.bio}</h1>
                        </div>
                        <div>
                            <div
                                style={{
                                    marginTop: "14px",
                                }}
                            >
                                <span
                                    style={{
                                        fontWeight: "500",
                                        fontSize: "12px",
                                        color: "rgb(115,115,115",
                                    }}
                                >
                                    Followed by{" "}
                                    <span
                                        style={{
                                            color: "black",
                                        }}
                                    >
                                        nameofuser01,
                                    </span>{" "}
                                    <span
                                        style={{
                                            color: "black",
                                        }}
                                    >
                                        nameofuser02,
                                    </span>{" "}
                                    <span
                                        style={{
                                            color: "black",
                                        }}
                                    >
                                        nameofuser03
                                    </span>{" "}
                                    + 7 more
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{
                    marginBottom: "44px",
                    height: "130px",
                }}
            >
                <div
                    style={{
                        height: "100%",
                        display: "flex",
                    }}
                >
                    <ul
                        style={{
                            padding: 0,
                            display: "flex",
                            listStyleType: "none",
                        }}
                    >
                        <li
                            style={{
                                height: "100%",
                            }}
                        >
                            <div
                                style={{
                                    width: "125px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <div
                                    style={{
                                        cursor: "pointer",
                                        padding: "10px 15px",
                                        width: "115px",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "87px",
                                            height: "85px",
                                            border: "1px solid grey",
                                            borderRadius: "50%",
                                        }}
                                    ></div>
                                    <div
                                        style={{
                                            paddingTop: "15px",
                                            textAlign: "center",
                                            fontWeight: "600",
                                            fontSize: "12px",
                                        }}
                                    >
                                        heighlight
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "600",
                    textAlign: "center",
                    color: "rgb(142,142,142",
                    borderTop: "1px solid rgb(219,219,219",
                }}
            >
                <div
                    style={{
                        marginRight: "60px",
                        display: "flex",
                        justifyContent: "center",
                        textTransform: "uppercase",
                        alignItems: "center",
                        height: "52px",
                        marginTop: "-1px",
                        borderTop: "1px solid black",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <svg
                            aria-label=""
                            class="_ab6-"
                            color="rgb(0, 0, 0)"
                            fill="rgb(0, 0, 0)"
                            height="12"
                            role="img"
                            viewBox="0 0 24 24"
                            width="12"
                        >
                            <rect
                                fill="none"
                                height="18"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                width="18"
                                x="3"
                                y="3"
                            ></rect>
                            <line
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                x1="9.015"
                                x2="9.015"
                                y1="3"
                                y2="21"
                            ></line>
                            <line
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                x1="14.985"
                                x2="14.985"
                                y1="3"
                                y2="21"
                            ></line>
                            <line
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                x1="21"
                                x2="3"
                                y1="9.015"
                                y2="9.015"
                            ></line>
                            <line
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                x1="21"
                                x2="3"
                                y1="14.985"
                                y2="14.985"
                            ></line>
                        </svg>
                        <span
                            style={{
                                marginLeft: "6px",
                                fontSize: "12px",
                                letterSpacing: "1px",
                                color: "black",
                            }}
                        >
                            Posts
                        </span>
                    </div>
                </div>
                <div
                    style={{
                        marginRight: "60px",
                        display: "flex",
                        justifyContent: "center",
                        textTransform: "uppercase",
                        alignItems: "center",
                        height: "52px",
                        // borderTop: "1px solid black",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <svg
                            aria-label=""
                            class="_ab6-"
                            color="rgb(115, 115, 115)"
                            fill="rgb(115, 115, 115)"
                            height="12"
                            role="img"
                            viewBox="0 0 24 24"
                            width="12"
                        >
                            <line
                                fill="none"
                                stroke="currentColor"
                                stroke-linejoin="round"
                                stroke-width="2"
                                x1="2.049"
                                x2="21.95"
                                y1="7.002"
                                y2="7.002"
                            ></line>
                            <line
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                x1="13.504"
                                x2="16.362"
                                y1="2.001"
                                y2="7.002"
                            ></line>
                            <line
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                x1="7.207"
                                x2="10.002"
                                y1="2.11"
                                y2="7.002"
                            ></line>
                            <path
                                d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                            ></path>
                            <path
                                d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
                                fill-rule="evenodd"
                            ></path>
                        </svg>
                        <span
                            style={{
                                marginLeft: "6px",
                                fontSize: "12px",
                                letterSpacing: "1px",
                            }}
                        >
                            reels
                        </span>
                    </div>
                </div>
                <div
                    style={{
                        marginRight: "60px",
                        display: "flex",
                        justifyContent: "center",
                        textTransform: "uppercase",
                        alignItems: "center",
                        height: "52px",
                        // borderTop: "1px solid black",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <svg
                            aria-label=""
                            class="_ab6-"
                            color="rgb(115, 115, 115)"
                            // color="rgb(0, 0, 0)"
                            fill="rgb(115, 115, 115)"
                            // fill="rgb(0, 0, 0)"
                            height="12"
                            role="img"
                            viewBox="0 0 24 24"
                            width="12"
                        >
                            <path
                                d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                            ></path>
                            <path
                                d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                            ></path>
                            <circle
                                cx="12.072"
                                cy="11.075"
                                fill="none"
                                r="3.556"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                            ></circle>
                        </svg>
                        <span
                            style={{
                                marginLeft: "6px",
                                fontSize: "12px",
                                letterSpacing: "1px",

                                // color: 'black'
                            }}
                        >
                            tagged
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <div
                    style={{
                        flexGrow: 1,
                        display: "flex",
                        flexWrap: "wrap",
                    }}
                    className="image-container"
                >
                    {userPosts.map((post) => (
                        <div
                            className="profPostsContainer"
                            style={{ cursor: "pointer" }}
                        >
                            <div>
                                <div
                                    style={{
                                        position: "relative",
                                    }}
                                >
                                    <div>
                                        <LazyLoadImage
                                            style={{
                                                maxWidth: "100%",
                                                padding: 0,
                                                margin: 0,
                                            }}
                                            effect="blur"
                                            src={`https://picsum.photos/id/${post.id}/500/500`}
                                            alt=""
                                        />
                                    </div>
                                    <div className="hoverIcons">
                                        {/* <div></div> */}
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    marginRight: "30px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    fontSize: "16px",
                                                    fontWeight: "700",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        marginRight: "7px",
                                                    }}
                                                >
                                                    <Like
                                                        liked={true}
                                                        white="white"
                                                    />
                                                </div>{" "}
                                                {post.likes}
                                            </div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    fontSize: "16px",
                                                    fontWeight: "700",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        marginRight: "7px",
                                                    }}
                                                >
                                                    <Comment
                                                        fill="white"
                                                        color="white"
                                                    />
                                                </div>{" "}
                                                {post.comments.length}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;
