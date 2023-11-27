import { useState, memo } from "react";

import Arrow from "../../Icons/Arrow/Arrow";
import Account from "../../Icons/Account/Account";
import Options from "../../Icons/Options/Options";
import Settings from "../../Icons/Settings/Settings";
import ListModal from "./ListModal/ListModal";
import RoundedImage from "../../RoundedImage/RoundedImage";

import "./profileHeader.css";

const ProfileHeader = ({ userData, userPosts, type }) => {
    const [open, setOpen] = useState(false);
    const [listType, setListType] = useState("followers");

    const handleFollowers = () => {
        setOpen(true);
        document.body.style.overflow = "hidden";
        setListType("followers");
    };

    const handleFollowings = () => {
        setOpen(true);
        document.body.style.overflow = "hidden";
        setListType("followings");
    };

    const handleClose = () => {
        document.body.style.overflow = "auto";
        setOpen(false);
    };

    return (
        <>
            <div className="profHead001">
                <div className="profHead002">
                    <div className="profHead003">
                        <RoundedImage url={userData.avatar} />
                    </div>
                </div>
                <div className="profHead004">
                    <div className="profHead005">
                        <span className="profHead006">
                            <h2 className="profHead007">{userData.username}</h2>
                        </span>
                        <div className="profHead008">
                            <div className="profHead009">
                                {type === "currentProfile" ? (
                                    <>
                                        <div className="profHead010">
                                            <button className="profHead011">
                                                <div>
                                                    <div className="profHead012">Edit Profile</div>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="profHead010">
                                            <div className="profHead010">
                                                <Settings />
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="profHead010">
                                            <button className="profHead011">
                                                <div>
                                                    <div className="profHead012">
                                                        Following
                                                        <div className="profHead013">
                                                            <Arrow />
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="profHead010">
                                            <button className="profHead011">
                                                <div>
                                                    <div className="profHead012">Message</div>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="profHead010">
                                            <button className="profHead014">
                                                <div>
                                                    <Account />
                                                </div>
                                            </button>
                                        </div>
                                        <div className="profHead015">
                                            <div className="profHead010">
                                                <Options />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="profHead016"></div>
                    <ul className="profHead017">
                        <li className="profHead018">
                            <span className="profHead019">{userPosts.length}</span> posts
                        </li>
                        <li
                            className="profHead018"
                            style={{
                                cursor: "pointer",
                            }}
                            onClick={handleFollowers}
                        >
                            <span className="profHead019">{userData?.followers?.length}</span> followers
                        </li>
                        <li
                            className="profHead018"
                            style={{
                                cursor: "pointer",
                            }}
                            onClick={handleFollowings}
                        >
                            <span className="profHead019">{userData?.followings?.length}</span> following
                        </li>
                    </ul>
                    <div className="userDetailDiv1">
                        <div className="profHead020">
                            {userData.first_name} {userData.last_name}
                        </div>
                        <div className="profHead021"></div>
                        <div>
                            <h1>{userData.bio}</h1>
                        </div>
                        {type === "userProfile" && (
                            <div>
                                <div className="profHead022">
                                    <span className="profHead023">
                                        Followed by <span className="profHead024">nameofuser01,</span>{" "}
                                        <span className="profHead024">nameofuser02,</span> <span className="profHead024">nameofuser03</span>{" "}
                                        + 7 more
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="mobileTabsHead">
                        {type === "currentProfile" ? (
                            <>
                                <div className="profHead010">
                                    <button className="profHead011">
                                        <div>
                                            <div className="profHead012">Edit Profile</div>
                                        </div>
                                    </button>
                                </div>
                                <div className="profHead010">
                                    <div className="profHead010">
                                        <Settings />
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="profHead010">
                                    <button className="profHead011">
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            padding: '0 4px'
                                        }}>
                                            <div className="profHead012">
                                                Following
                                                <div className="profHead013">
                                                    <Arrow />
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className="profHead010">
                                    <button className="profHead011">
                                        <div style={{
                                            minWidth: 0,
                                        }}>
                                            <div className="profHead012">Message</div>
                                        </div>
                                    </button>
                                </div>
                                <div className="profHead010">
                                    <button className="profHead014">
                                        <div>
                                            <Account />
                                        </div>
                                    </button>
                                </div>
                                <div className="profHead015">
                                    <div className="profHead010">
                                        <Options />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                {open && <ListModal listType={listType} handleClose={handleClose} userData={userData} />}
            </div>
            <div className="userDetailDiv2">
                <div className="profHead020">
                    {userData.first_name} {userData.last_name}
                </div>
                <div className="profHead021"></div>
                <div>
                    <h1>{userData.bio}</h1>
                </div>
                {type === "userProfile" && (
                    <div>
                        <div className="profHead022">
                            <span className="profHead023">
                                Followed by <span className="profHead024">nameofuser01,</span>{" "}
                                <span className="profHead024">nameofuser02,</span> <span className="profHead024">nameofuser03</span> + 7
                                more
                            </span>
                        </div>
                    </div>
                )}
            </div>
            <div className="profile002">
                <div className="profile003">
                    <ul className="profile004">
                        <li className="profile005">
                            <div className="profile006">
                                <div className="profile007">
                                    <div className="profile008"></div>
                                    <div className="profile009">heighlight</div>
                                </div>
                            </div>
                        </li>
                        <li className="profile005">
                            <div className="profile006">
                                <div className="profile007">
                                    <div className="profile008"></div>
                                    <div className="profile009">heighlight</div>
                                </div>
                            </div>
                        </li>
                        <li className="profile005">
                            <div className="profile006">
                                <div className="profile007">
                                    <div className="profile008"></div>
                                    <div className="profile009">heighlight</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <ul className="profHead017">
                <li className="profHead018">
                    <span className="profHead019">{userPosts.length}</span> posts
                </li>
                <li
                    className="profHead018"
                    style={{
                        cursor: "pointer",
                    }}
                    onClick={handleFollowers}
                >
                    <span className="profHead019">{userData?.followers?.length}</span> followers
                </li>
                <li
                    className="profHead018"
                    style={{
                        cursor: "pointer",
                    }}
                    onClick={handleFollowings}
                >
                    <span className="profHead019">{userData?.followings?.length}</span> following
                </li>
            </ul>
        </>
    );
};

export default memo(ProfileHeader);
