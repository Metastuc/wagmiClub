"use client";

import { ReactNode } from "react";
import { useBodyOverflow, useScrollReset, useTabSwitcher } from "@/hooks";
// import { OnChain } from "@/views";
import { ExploreTabs, MarketPlace, OnChain } from "@/components";
import "./page.scss";

interface TabComponents {
	[key: string]: ReactNode;
}

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
	const tabComponents: TabComponents = {
		marketplace: <MarketPlace group="marketplace" />,
		onchainMedals: <OnChain group="onchain" />,
	};

	/**
	 * Renders the active tab component.
	 *
	 * @returns {JSX.Element} Active tab component JSX
	 */
	function renderTab() {
		return tabComponents[activeTab] || null;
	}

	return (
		<section className="explore">
			{/* Render the secondary navigation bar */}
			<div className="explore__wrapper">
				{/* Render the ExploreTabs component for tab navigation */}
				<ExploreTabs
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
