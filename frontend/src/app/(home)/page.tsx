import {
	Club,
	Footer,
	Hero,
	LeaderBoard,
	PoweredBy,
	PrimaryNav,
	Questers,
	ReputationBoard,
	Vera,
} from "@/components";
import "./page.scss";

const Landing = () => {
	return (
		<section>
			<section className="landing">
				<div className="landing__wrapper">
					{/* navbar-component */}
					<PrimaryNav />

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
		</section>
	);
};

export default Landing;
