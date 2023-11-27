import { Verified, Badge, Location, Creator } from "@/assets/icons";
import "./index.scss";

export const Bio = ({ group }: { group: string }) => {
	return (
		<section className={`${group}`}>
			<div className={`${group}__wrapper`}>
				<div className={`${group}__top`}>
					<h1>
						<span>Jehee</span>
						<i>
							<Badge />
						</i>
						<i>
							<Verified />
						</i>
					</h1>

					<p>@defiprince_</p>
				</div>

				<div className={`${group}__center`}>
					<p className={`${group}__center-text`}>
						web3 products & contents -building{" "}
						<span>@wagmiclub</span> <br />
						contributor to the creator economy
					</p>
					<div className={`${group}__center-buttons`}>
						<div className={`${group}__center-buttons-left`}>
							<i>
								<Location />
							</i>
							<p>United States</p>
							<picture>
								<source
									type="image/webp"
									srcSet="https://flagcdn.com/16x12/ca.webp,
                                        https://flagcdn.com/32x24/ca.webp 2x,
                                        https://flagcdn.com/48x36/ca.webp 3x"
								/>
								<source
									type="image/png"
									srcSet="https://flagcdn.com/16x12/ca.png,
                                        https://flagcdn.com/32x24/ca.png 2x,
                                        https://flagcdn.com/48x36/ca.png 3x"
								/>
								<img
									src="https://flagcdn.com/16x12/ca.png"
									width="16"
									height="12"
									alt="Ukraine"
								/>
							</picture>
						</div>

						<div className={`${group}__center-buttons-right`}>
							<i>
								<Creator />
							</i>
							<p>Creator</p>
						</div>
					</div>
				</div>

				<div className={`${group}__bottom`}>
					<div>
						<b>450</b>
						<span>following</span>
					</div>
					<div>
						<b>1065</b>
						<span>followers</span>
					</div>
				</div>
			</div>
		</section>
	);
};
