// "use client";
import { useState, useEffect } from "react";
// import { useRouter } from "next/router";

import { usePathname } from "next/navigation";

export * from "./useToggle";
export * from "./useBodyOverflow";

/**
 * Custom hook to scroll to the top of the page when the route changes.
 */
export const useScrollReset = function () {
	const pathname = usePathname();

	useEffect(() => {
		// Scroll to the top of the window when route changes
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};

/**
 * Custom hook to manage tab switching functionality.
 * @param {string} initialTab - The initial active tab.
 * @returns {{ activeTab: string, handleTabClick: (tab: string) => void, tabIsActive: (tab: string) => string }}
 */
export const useTabSwitcher = function (initialTab: string) {
	const [activeTab, setActiveTab] = useState(initialTab);

	// Function to handle tab change
	const handleTabClick = (tab: string) => {
		setActiveTab(tab);
	};

	// Function to set styles class to active on the selected tab
	const tabIsActive = (tab: string) => (activeTab === tab ? "active" : null);

	return {
		activeTab,
		handleTabClick,
		tabIsActive,
	};
};
