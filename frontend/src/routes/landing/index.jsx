import {
	PrimaryNavbar as Navbar,
	Hero,
	Club,
	PoweredBy,
	Questers,
	ReputationBoard,
	Footer,
	Vera,
	LeaderBoard,
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
							earn trustscores, <span>badges</span> & medals
						</p>
					</div>
				</section>

				{/* PoweredBy component */}
				<PoweredBy group={"landing"} />

				<Questers group={"landing"} />

				<ReputationBoard group={"landing"} />

				<LeaderBoard group={"landing"} />

				<Vera group={"landing"} />

				<footer className="landing__footer">
					<Footer group={"landing"} />
				</footer>
			</div>
		</section>
	);
};

export default Landing;
