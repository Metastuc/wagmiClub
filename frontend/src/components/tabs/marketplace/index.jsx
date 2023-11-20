import React, { useEffect, useRef } from "react";
import "./index.scss";

/**
 * MarketPlaceTabs component provides buttons to switch between Badge and Medal tabs.
 * It also includes a background indicator for the active tab.
 * @component
 * @param {Object} props - The properties of the MarketPlaceTabs component.
 * @param {Function} props.onTabChange - Function to handle tab changes.
 * @param {Function} props.tabIsActive - Function to check if a tab is active.
 */
const MarketPlaceTabs = ({ group, onTabChange, tabIsActive }) => {
	// Create a ref for the indicator element
	const indicatorRef = useRef();
	// Create an array of refs for the button elements
	const buttonRefs = [];

	/**
	 * A custom hook that runs after the component renders
	 * @param {React.RefObject} indicatorRef - A reference to the indicator element
	 * @param {Array<React.RefObject>} buttonRefs - An array of references to the button elements
	 * @param {string} group - A class name that identifies the group of tabs
	 */
	useEffect(() => {
		/**
		 * A function that sets the initial position and size of the indicator element
		 */
		function tabWidth() {
			// Select the active tab button using the group class and the active class
			const activeTab = document.querySelector(
				`.active.${group}__tabs-button`,
			);
			// Set the left position of the indicator element to match the offsetLeft of the active tab button
			indicatorRef.current.style.left = activeTab.offsetLeft + "px";
			// Set the width of the indicator element to match the offsetWidth of the active tab button
			indicatorRef.current.style.width = activeTab.offsetWidth + "px";
		}
		// Call the tabWidth function to initialize the indicator element
		tabWidth();
		/**
		 * Moves and resizes the indicator element based on the event target
		 * @param {Event} event - The click event object
		 */
		function indicator(event) {
			// Set the left position of the indicator element to match the offsetLeft of the event target
			indicatorRef.current.style.left = event.offsetLeft + "px";
			// Set the width of the indicator element to match the offsetWidth of the event target
			indicatorRef.current.style.width = event.offsetWidth + "px";
		}

		// Loop through the array of button refs
		buttonRefs.forEach((button) => {
			// Add a click event listener to each button
			button.addEventListener("click", (event) => {
				// Call the indicator function with the event object as the argument
				indicator(event.target);
			});
		});
	}, []); // Pass an empty array as the dependency array to run the effect only once

	return (
		<section className={`${group}__tabs`}>
			<div className={`${group}__tabs-wrapper`}>
				{/* Badge Tab Button */}
				<button
					className={`${tabIsActive("badges")} ${group}__tabs-button`}
					onClick={() => onTabChange("badges")}
					ref={(event) => buttonRefs.push(event)}
				>
					<span>Badges</span>
				</button>

				{/* Trustscore Tab Button */}
				<button
					className={`${tabIsActive(
						"trustscore",
					)} ${group}__tabs-button`}
					onClick={() => onTabChange("trustscore")}
					ref={(event) => buttonRefs.push(event)}
				>
					<span>Trustscore</span>
				</button>

				{/* Medal Tab Button */}
				<button
					className={`${tabIsActive("medals")} ${group}__tabs-button`}
					onClick={() => onTabChange("medals")}
					ref={(event) => buttonRefs.push(event)}
				>
					<span>Medals</span>
				</button>

				{/* Background Indicator for Active Tab */}
				<div
					className={`${tabIsActive("badge")} ${group}__tabs-bg`}
					ref={indicatorRef}
				></div>
			</div>
		</section>
	);
};

export default MarketPlaceTabs;
