import { Badge } from "../../assets/icons";
import { Profile } from "../../components";
import {
	PrimaryNavbar as Navbar,
	Hero,
	Club,
	PoweredBy,
	Questers,
} from "../../views";
import "./index.scss";

const Landing = () => {
	return (
		<section className="landing">
			<div className="landing__wrapper">
				{/* navbar-component */}
				<Navbar />

				<Hero group="landing" />

				{/* club component */}
				<Club group="landing" />

				<section className="landing__about">
					<div className="landing__about-wrapper">
						<p>
							build your social profile onchain <br />
							earn trustscores, <span>badges</span> & airdrop
						</p>
					</div>
				</section>

				{/* PoweredBy component */}
				<PoweredBy group={"landing"} />

				<Questers group={"landing"} />
			</div>
		</section>
	);
};

export default Landing;
