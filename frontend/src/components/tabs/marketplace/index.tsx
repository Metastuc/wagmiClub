"use client";

import { FC, useEffect, useRef, RefObject } from "react";
import { tabProps } from "..";
import "./index.scss";

export const MarketPlaceTabs: FC<tabProps> = ({
	group,
	onTabChange,
	tabIsActive,
}) => {
	// Create a ref for the indicator element
	const indicatorRef = useRef<HTMLDivElement>(null);
	// Create an array of refs for the button elements
	const buttonRefs: RefObject<HTMLButtonElement>[] = [];

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
			) as HTMLButtonElement;
			// Set the left position of the indicator element to match the offsetLeft of the active tab button
			indicatorRef.current &&
				(indicatorRef.current.style.left = activeTab.offsetLeft + "px");
			// Set the width of the indicator element to match the offsetWidth of the active tab button
			indicatorRef.current &&
				(indicatorRef.current.style.width =
					activeTab.offsetWidth + "px");
		}
		// Call the tabWidth function to initialize the indicator element
		tabWidth();
		/**
		 * Moves and resizes the indicator element based on the event target
		 * @param {Event} event - The click event object
		 */
		function indicator(event: Event) {
			const target = event.currentTarget as HTMLButtonElement;

			// Set the left position of the indicator element to match the offsetLeft of the event target
			indicatorRef.current &&
				(indicatorRef.current.style.left = target.offsetLeft + "px");
			// Set the width of the indicator element to match the offsetWidth of the event target
			indicatorRef.current &&
				(indicatorRef.current.style.width = target.offsetWidth + "px");
		}

		buttonRefs.forEach((button) => {
			// Add a click event listener to each button
			button.current?.addEventListener("click", indicator);
		});
	}, []); // Pass an empty array as the dependency array to run the effect only once

	return (
		<section className={`${group}__tabs`}>
			<div className={`${group}__tabs-wrapper`}>
				{/* Badge Tab Button */}
				<button
					className={`${tabIsActive("badges")} ${group}__tabs-button`}
					onClick={() => onTabChange("badges")}
					ref={(event) => buttonRefs.push({ current: event })}
				>
					<span>Badges</span>
				</button>

				{/* Trustscore Tab Button */}
				<button
					className={`${tabIsActive(
						"trustscore",
					)} ${group}__tabs-button`}
					onClick={() => onTabChange("trustscore")}
					ref={(event) => buttonRefs.push({ current: event })}
				>
					<span>Trustscore</span>
				</button>

				{/* Medal Tab Button */}
				<button
					className={`${tabIsActive("medals")} ${group}__tabs-button`}
					onClick={() => onTabChange("medals")}
					ref={(event) => buttonRefs.push({ current: event })}
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
