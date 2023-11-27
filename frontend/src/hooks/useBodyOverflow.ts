"use client"

import { useEffect } from "react";

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
