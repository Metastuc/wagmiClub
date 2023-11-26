import Link from "next/link";
import { Logo } from "@/components";
import {
    Discord,
	Instagram,
	Telegram,
	TikTok,
	X,
	Youtube,
} from "@/assets/icons";
import "./index.scss";

export const Footer = ({ group }: { group: string }) => {
	const texts = [
		`
    Wagmiclub is the update over traditional 
    networking means, with our onchain validation
    system.
    `,
		`
    Professional networking should be more social,
    and transparent! showcase your skillset and 
    credibility, earn the recognition you deserve. 
    `,
		`
    Discover top ranking professionals,
    recruiters can easily find the best talents
    based on their impressive badges & medals
    `,
	];

	const links = {
		textLinks: [
			{
				title: "Media Kit",
				to: "",
			},
			{
				title: "Contact",
				to: "",
			},
			{
				title: "Partner",
				to: "",
			},
			{
				title: "Feedback",
				to: "",
			},
		],
		socialLinks: [
			{
				icon: <X />,
				to: "",
				title: "X",
			},
			{
				icon: <TikTok />,
				to: "",
				title: "TikTok",
			},
			{
				icon: <Instagram />,
				to: "",
				title: "Instagram",
			},
			{
				icon: <Discord />,
				to: "",
				title: "Discord",
			},
			{
				icon: <Telegram />,
				to: "",
				title: "Telegram",
			},
			{
				icon: <Youtube />,
				to: "",
				title: "Youtube",
			},
		],
	};

	function RenderTexts() {
		return (
			<>
				{texts.map((text, index) => {
					return (
						<div
							key={index}
							className={`${group}__footer-text`}
						>
							<p>{text}</p>
						</div>
					);
				})}
			</>
		);
	}

	function RenderSocialLinks() {
		return (
			<>
				{links.socialLinks.map((item, index) => {
					const { icon, to, title } = item;

					return (
						<Link
							href={to}
							key={index}
							title={title}
						>
							<span>{icon}</span>
						</Link>
					);
				})}
			</>
		);
	}

	function RenderTextLinks() {
		return (
			<>
				{links.textLinks.map((item, index) => {
					const { title, to } = item;

					return (
						<Link
							key={index}
							href={to}
						>
							<span>{title}</span>
						</Link>
					);
				})}
			</>
		);
	}

	return (
		<section className={`${group}__footer-wrapper`}>
			<div className={`${group}__footer-top`}>
				<RenderTexts />
			</div>

			<div className={`${group}__footer-center`}>
				<div>
					<Logo />
				</div>

				<div>
					<p>
						we are focused on building a more trusted and
						transparent networking system for professionals &
						recruiters
					</p>
					<button>
						<span>Get Started</span>
					</button>
				</div>
			</div>

			<div className={`${group}__footer-bottom`}>
				<div className={`${group}__footer-bottom_left`}>
					<RenderTextLinks />
				</div>

				<div className={`${group}__footer-bottom_right`}>
					<RenderSocialLinks />
				</div>
			</div>
		</section>
	);
};
