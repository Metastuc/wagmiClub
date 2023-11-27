"use client"

import { useState } from "react";

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
