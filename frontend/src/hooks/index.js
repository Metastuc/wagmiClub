import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const // toggle false/true hook
	useToggle = function () {
		const [status, setStatus] = useState(false);

		function toggleStatus() {
			setStatus((previous) => !previous);
		}

		return { status, toggleStatus };
	},
	// scroll to top on screen change
	useScrollReset = function () {
		const { pathname } = useLocation();

		useEffect(() => {
			window.scrollTo(0, 0);
		}, [pathname]);

		return null;
	},
	// change body overflow to scroll after page change
	useBodyOverflow = function () {
		useEffect(() => {
			document.body.style.overflowY = "visible";
			return () => {
				document.body.style.overflowY = "visible";
			};
		}, []);
	},
	// tab changer
	useTabSwitcher = function (initialTab) {
		const [activeTab, setActiveTab] = useState(initialTab),
			// function to handle tab change
			handleTabClick = (tab) => {
				setActiveTab(tab);
			},
			// function to set styles class to active on selected tab
			tabIsActive = (tab) => (activeTab === tab ? "active" : null);

		return {
			activeTab,
			handleTabClick,
			tabIsActive,
		};
	};
