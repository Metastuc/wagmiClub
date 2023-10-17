import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Custom hook to toggle between true and false.
 * @returns {{ status: boolean, toggleStatus: () => void }}
 */
export const useToggle = function () {
	const [status, setStatus] = useState(false);

	// Function to toggle the status between true and false
	function toggleStatus() {
		setStatus((previous) => !previous);
	}

	return { status, toggleStatus };
};

/**
 * Custom hook to scroll to the top of the page when the route changes.
 */
export const useScrollReset = function () {
	const { pathname } = useLocation();

	useEffect(() => {
		// Scroll to the top of the window when route changes
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};

/**
 * Custom hook to change body overflow to scroll after page change.
 */
export const useBodyOverflow = function () {
	useEffect(() => {
		// Set body overflow to visible
		document.body.style.overflowY = "visible";
		// Reset body overflow to visible when the component unmounts
		return () => {
			document.body.style.overflowY = "visible";
		};
	}, []);
};

/**
 * Custom hook to manage tab switching functionality.
 * @param {string} initialTab - The initial active tab.
 * @returns {{ activeTab: string, handleTabClick: (tab: string) => void, tabIsActive: (tab: string) => string }}
 */
export const useTabSwitcher = function (initialTab) {
	const [activeTab, setActiveTab] = useState(initialTab);

	// Function to handle tab change
	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	// Function to set styles class to active on the selected tab
	const tabIsActive = (tab) => (activeTab === tab ? "active" : null);

	return {
		activeTab,
		handleTabClick,
		tabIsActive,
	};
};
