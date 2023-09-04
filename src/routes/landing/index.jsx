import { Navbar } from '../../components';
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
            </section>
        </section>
    );
};

export default Landing;