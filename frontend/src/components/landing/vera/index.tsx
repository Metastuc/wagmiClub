import { Reputation } from "@/components";
import "./index.scss";

export const Vera = ({ group }: { group: string }) => {
	const clubs = {
		mobile: [
			{
				color: "#A1F294",
				title: "investors",
			},
			{
				color: "#FFFFFF",
				title: "founders",
			},
			{
				color: "#FFFFFF",
				title: "developers",
			},
		],
		desktop: [
			{
				color: "#FFFFFF",
				title: "founders",
			},
			{
				color: "#9BF593",
				title: "builders",
			},
			{
				color: "#E5F67A",
				title: "advisors",
			},
		],
	};

	function RenderMobileClubs() {
		return (
			<>
				{clubs.mobile.map((item, index) => {
					return (
						<Reputation
							{...item}
							key={index}
							id={index}
							group={`${group}__vera`}
						/>
					);
				})}
			</>
		);
	}

	function RenderDesktopClubs() {
		return (
			<>
				{clubs.desktop.map((item, index) => {
					return (
						<Reputation
							{...item}
							id={index}
							key={index}
							group={`${group}__vera`}
						/>
					);
				})}
			</>
		);
	}
	return (
		<section className={`${group}__vera`}>
			<div className={`${group}__vera-wrapper`}>
				<p>
					Our platform is a safe vault for your earned reputations,
					experience and achievements. It is tamper-proof and
					non-transferable!
				</p>

				<div className={`${group}__vera-dynamic`}>
					<div className={`${group}__vera-mobile`}>
						<RenderMobileClubs />
					</div>

					<div className={`${group}__vera-desktop`}>
						<RenderDesktopClubs />
					</div>
				</div>
			</div>
		</section>
	);
};
