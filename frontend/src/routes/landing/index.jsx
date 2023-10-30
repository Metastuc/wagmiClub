import { Badge } from "../../assets/icons";
import { Profile } from "../../components";
import { PrimaryNavbar as Navbar, Hero, Club } from "../../views";
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

						{/* <button>
							<span>
								<img src="/defi_pfp.jpg" />
							</span>
							<span>@defiprince_</span>
						</button> */}
					</div>
				</section>

				{/* profile component */}
				<Profile />

				<section className="reputation">
					<h2>
						Earn reputation <span>badge</span> onchain <Badge />
					</h2>

					<div>badges</div>

					<p>
						Reputation badge is an icon of expertise, <br />
						achievemenrs, award of honour or recognition given{" "}
						<br />
						to merited people by organisations, DAOs.
					</p>
				</section>

				<section className="quest">
					<h2>
						Earn <span>quest</span> medals onchain {`{icon}`}
					</h2>

					<p>
						Quest medals are earned and claimed by <br />
						completing tasks, projects, contests, or hackathons{" "}
						<br />
						organised by DAOs or organisations
					</p>
				</section>
			</div>
		</section>
	);
};

export default Landing;
