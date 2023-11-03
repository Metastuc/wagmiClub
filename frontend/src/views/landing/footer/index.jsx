import React from "react";
import { Link } from "react-router-dom";
import {
	Discord,
	Instagram,
	Telegram,
	TikTok,
	X,
	Youtube,
} from "../../../assets/icons";
import { Logo } from "../../../components";
import "./index.scss";

/**
 * Footer component for the website.
 * @param {Object} props - Component props.
 * @param {string} props.group - CSS class prefix for styling.
 * @returns {JSX.Element} - Rendered Footer component.
 */
const Footer = ({ group }) => {
	// Array of text descriptions for the website footer
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

	// Object containing text and social media links for the footer
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

	/**
	 * Renders the text descriptions in the footer.
	 * @returns {JSX.Element} - Rendered text descriptions.
	 */
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

	/**
	 * Renders the textual links in the footer.
	 * @returns {JSX.Element} - Rendered textual links.
	 */
	function RenderTextLinks() {
		return (
			<>
				{links.textLinks.map((item, index) => {
					const { title, to } = item;

					return (
						<Link
							key={index}
							to={to}
						>
							<span>{title}</span>
						</Link>
					);
				})}
			</>
		);
	}

	/**
	 * Renders the social media links in the footer.
	 * @returns {JSX.Element} - Rendered social media links.
	 */
	function RenderSocialLinks() {
		return (
			<>
				{links.socialLinks.map((item, index) => {
					const { icon, to, title } = item;

					return (
						<Link
							to={to}
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

export default Footer;
