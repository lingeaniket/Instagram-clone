import Options from "../../Icons/Options/Options";

const ProfileHeader = ({ userData, userPosts }) => {
    return (
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
                                                    transform: "rotate(180deg)",
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
                                                strokeMiterlimit="10"
                                                strokeWidth="2"
                                            ></path>
                                            <path
                                                d="M22 19.5v-.447a4.05 4.05 0 0 0-4.05-4.049h-4.906a4.05 4.05 0 0 0-4.049 4.049v.447"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            ></path>
                                            <line
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeMiterlimit="10"
                                                strokeWidth="2"
                                                x1="5.001"
                                                x2="5.001"
                                                y1="7.998"
                                                y2="14.003"
                                            ></line>
                                            <line
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeMiterlimit="10"
                                                strokeWidth="2"
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
                            fontSize: "14px",
                            fontWeight: "600",
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
    );
};

export default ProfileHeader;
