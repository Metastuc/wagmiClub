import React from "react";
import { Helmet } from "react-helmet";
import { SecondaryNavbar as Navbar, MarketPlace, OnChain } from "../../views";
import { useBodyOverflow, useScrollReset, useTabSwitcher } from "../../hooks";
import { ExploreTabs as Tab } from "../../components";
import "./index.scss";

/**
 * Functional component representing the Explore page.
 *
 * @component
 * @returns {JSX.Element} Explore component JSX
 */
const Explore = () => {
	// Reset body overflow and scroll position when the component mounts.
	useScrollReset();
	useBodyOverflow();

	// Get active tab, handleTabClick function, and tabIsActive function from custom hook
	const { activeTab, handleTabClick, tabIsActive } =
		useTabSwitcher("marketplace");

	// Object mapping tab names to corresponding components
	const tabComponent = {
		marketplace: <MarketPlace group="marketplace" />,
		onchainMedals: <OnChain group="onchain" />,
	};

	/**
	 * Renders the active tab component.
	 *
	 * @returns {JSX.Element} Active tab component JSX
	 */
	function renderTab() {
		return tabComponent[activeTab];
	}

	return (
		<section className="explore">
			<Helmet>
				<title>Explore - WagmiClub</title>
			</Helmet>

			{/* Render the secondary navigation bar */}
			<Navbar />

			<div className="explore__wrapper">
				{/* Render the ExploreTabs component for tab navigation */}
				<Tab
					onTabChange={handleTabClick}
					tabIsActive={tabIsActive}
					group={"explore"}
				/>

				<section className="explore__tabs-display">
					{/* Render the active tab content */}
					{renderTab()}
				</section>
			</div>
		</section>
	);
};

export default Explore;
