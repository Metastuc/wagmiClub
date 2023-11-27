import Link from "next/link";
import { QUESTER_BADGE } from "@/assets/data";
import { Badge, Verified } from "@/assets/icons";
import "./index.scss";

const Badges = ({ group }: { group: string }) => {
	return (
		<section className={`${group}`}>
			<div className={`${group}__wrapper`}>
				<h4>Badges</h4>

				<div>
					{QUESTER_BADGE.slice(0, 4).map((item, index) => {
						const {
							id,
							value: { image, name, verified },
						} = item;

						return (
							<Link
								href={`/organizations/${id}`}
								key={id || index}
								className={`${group}__badge`}
							>
								<i>
									<Badge />
								</i>

								<img
									key={id || index}
									src={image}
									alt={name}
								/>

								<span>
									{name}
									{verified && (
										<i>
											<Verified />
										</i>
									)}
								</span>
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export { Badges as ProfileBadges };
