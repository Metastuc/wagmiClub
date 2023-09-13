import { Arrow, Badge, Creator, Location, Options, Verified } from '../../assets/icons';
import './index.scss';

const Profile = () => {
    return (
        <section className="profile">
            <div className="profile-wrapper">

                <h2>create profile</h2>

                <div className="profile-ui-container">
                    <div>

                        <section className="profile-top-content">

                            <div className="profile-picture">
                                <span>
                                    <img src="/defi_pfp.jpg" />
                                </span>
                            </div>

                            <div className="profile-action-buttons">
                                <button>
                                    <span>status</span>
                                </button>

                                <button>
                                    <span>follow</span>
                                </button>
                            </div>

                        </section>

                        <section className="profile-middle-content">

                            <div className="username">
                                <div className="top">
                                    <span>
                                        jehee
                                    </span>

                                    <div className="verified">
                                        <span><Verified /></span>
                                        <span><Badge /></span>
                                    </div>
                                </div>

                                <div className="bottom">
                                    <span>
                                        @defiprince_
                                    </span>
                                </div>
                            </div>

                            <div className="userbio">
                                <p>
                                    web3 products & contents -building @wagmiclub <br />
                                    contributor to creator economy 🪲🖇
                                </p>

                                <div className="top">
                                    <div className="user-location">
                                        <span>
                                            <Location />
                                        </span>
                                        <span>canada</span>
                                        <span>
                                            <img src="https://flagsapi.com/CA/shiny/64.png" />
                                        </span>
                                    </div>

                                    <div className="user-category">
                                        <span>
                                            <Creator />
                                        </span>
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

                            {/* </section> */}
                        </section>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Profile;