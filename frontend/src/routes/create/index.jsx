import React from "react";
import { Helmet } from "react-helmet";
import {
	useBodyOverflow,
	useScrollReset,
	useTabSwitcher,
} from "../../hooks/index.js";
import { SecondaryNavbar as Navbar, Medal, Badge } from "../../views";
import { CreateTabs as Tab } from "../../components";
import "./index.scss";

/**
 * Create component represents the page for claiming profiles and creating badges/medals.
 * It uses various hooks and components to manage tabs and display corresponding content.
 * @component
 */
const Create = () => {
	// Reset body overflow and scroll position when the component mounts.
	useScrollReset();
	useBodyOverflow();

	// Use the useTabSwitcher hook to manage active tabs and handle tab clicks.
	const { activeTab, handleTabClick, tabIsActive } = useTabSwitcher("badge");

	// Define components corresponding to different tabs.
	const tabComponents = {
		badge: <Badge group={"badge"} />,
		medal: <Medal group={"medal"} />,
	};

	/**
	 * Renders the active tab's component.
	 * @returns {ReactNode} The component to be rendered inside the active tab.
	 */
	function renderTab() {
		return tabComponents[activeTab] || null;
	}

	return (
		<section className="create">
			{/* Helmet component for setting the page title */}
			<Helmet>
				<title>Claim Profile - WagmiClub</title>
			</Helmet>

			{/* Secondary navigation bar */}
			<Navbar />

			{/* Wrapper for the Create section */}
			<div className="create__wrapper">
				{/* Tabs for switching between badge and medal creation */}
				<Tab
					initialTab={activeTab}
					onTabChange={handleTabClick}
					tabIsActive={tabIsActive}
				/>
				{/* Container for displaying the content of the active tab */}
				<section className="create__tabs-display">
					{renderTab()}
				</section>
			</div>
		</section>
	);
};

export default Create;
