import Account from "../../Icons/Account/Account";
import Arrow from "../../Icons/Arrow/Arrow";
import Options from "../../Icons/Options/Options";
import "./profileHeader.css";

const ProfileHeader = ({ userData, userPosts }) => {
    return (
        <div className="profHead001">
            <div className="profHead002">
                <div className="profHead003">
                    <img
                        className="post005"
                        src={`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${userData.avatar}.jpg`}
                        alt="title1"
                    />
                </div>
            </div>
            <div className="profHead004">
                <div className="profHead005">
                    <span className="profHead006">
                        <h2 className="profHead007">{userData.username}</h2>
                    </span>
                    <div className="profHead008">
                        <div className="profHead009">
                            <div className="profHead010">
                                <button className="profHead011">
                                    <div>
                                        <div className="profHead012">
                                            Following
                                            <div className="profHead013">
                                                <Arrow/>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className="profHead010">
                                <button className="profHead011">
                                    <div>
                                        <div className="profHead012">
                                            Message
                                        </div>
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
                        </div>
                    </div>
                </div>
                <div className="profHead016"></div>
                <ul className="profHead017">
                    <li className="profHead018">
                        <span className="profHead019">{userPosts.length}</span>{" "}
                        posts
                    </li>
                    <li className="profHead018">
                        <span className="profHead019">22</span> followers
                    </li>
                    <li className="profHead018">
                        <span className="profHead019">22</span> following
                    </li>
                </ul>
                <div>
                    <div className="profHead020">
                        {userData.first_name} {userData.last_name}
                    </div>
                    <div className="profHead021"></div>
                    <div>
                        <h1>{userData.bio}</h1>
                    </div>
                    <div>
                        <div className="profHead022">
                            <span className="profHead023">
                                Followed by{" "}
                                <span className="profHead024">
                                    nameofuser01,
                                </span>{" "}
                                <span className="profHead024">
                                    nameofuser02,
                                </span>{" "}
                                <span className="profHead024">
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
