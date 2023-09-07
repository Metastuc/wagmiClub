import { Arrow, Options, Verified } from '../../assets/icons';
import './index.scss';

const Profile = () => {
    return (
        <section className="profile">
            <div className="profile-wrapper">

                <h2>create profile</h2>

                <div className="profile-ui-container">
                    <div className="top">
                        <div>
                            <button>
                                <Arrow />
                            </button>

                            <button>
                                <Options />
                            </button>
                        </div>

                        <span>
                            <img src="/defi_pfp.jpg" />
                        </span>
                    </div>

                    <div className="bottom">

                        <div className="follow-button">
                            <button>
                                <span>follow</span>
                            </button>
                        </div>

                        <section className="user">
                            {/* <div className="user-display"> */}
                            <div className="user-display">
                                <div className="top">
                                    <span className="display-name">
                                        jehee
                                    </span>

                                    <div className="badges">
                                        <span><Verified /></span>
                                        <span>badge</span>
                                    </div>
                                </div>

                                <div className="bottom">
                                    <span className="username">
                                        @defiprince_
                                    </span>
                                </div>
                            </div>
                            {/* </div> */}

                            <div className="user-bio">
                                <p>
                                    web3 products & contents -building @wagmiclub <br />
                                    contributor to creator economy 🪲🖇
                                </p>

                                <div className="top">
                                    <div className="user-location">
                                        <span>icon</span>
                                        <span>canada</span>
                                        <span>flag</span>
                                    </div>

                                    <div className="user-category">
                                        <span>icon</span>
                                        <span>creator</span>
                                    </div>
                                </div>

                                <div className="bottom">
                                    <div className="following">
                                        <b>450</b> following
                                    </div>

                                    <div className="followers">
                                        <b>1065</b> followers
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="badges">

                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;