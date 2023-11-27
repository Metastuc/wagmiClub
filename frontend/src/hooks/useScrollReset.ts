"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

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
