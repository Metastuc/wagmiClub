import { Line2 } from '../../assets/icons';
import { Club, Navbar } from '../../components';
import './index.scss';

const Landing = () => {
    return (
        <section className="landing">
            <Navbar />

            <section className="hero">
                <div className="hero-wrapper">
                    <h1>
                        the club with the magic door
                    </h1>

                    <p>
                        wagmi<span>club</span> is an onchain social platform
                        for web3 humans to build reputation
                    </p>
                </div>

                <div className="bg-container">
                    <figure>
                        <img src="/bg-1.svg" />
                    </figure>
                    <figure>
                        <img src="/bg-2.svg" />

                        {/* <Line2 /> */}
                    </figure>
                </div>
            </section>

            <Club />

            <section className='about'>
                <div className="about-wrapper">
                    <p>
                        build your social profile onchain <br />
                        earn trustscores, <span>badges</span> & airdrop
                    </p>

                    <button>
                        <span>
                            <img src="/defi_pfp.jpg" />
                        </span>
                        <span>
                            @defiprince_
                        </span>
                    </button>
                </div>
            </section>

        </section>
    );
};

export default Landing;