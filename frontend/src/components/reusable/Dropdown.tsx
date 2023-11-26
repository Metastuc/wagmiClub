"use client";

import { useState, useRef, useEffect, FC } from "react";
import { Dropdown as ButtonIcon } from "../../assets/icons";

interface props {
	group: string;
	options: any[];
	onChange: (value: string) => void;
	selectedValue: string;
}

export const Dropdown: FC<props> = ({
	group,
	options,
	onChange,
	selectedValue,
}) => {
	// State to manage dropdown visibility
	const [isOpen, setIsOpen] = useState(false);

	// Ref for the dropdown element
	const dropRef = useRef(null);

	// Handle option click event and update form values
	const handleOptionChange = (event: any) => {
		const selectedOption = event.currentTarget.getAttribute("data-value");
		onChange(selectedOption); // Call parent component's onChange handler
		setIsOpen(false); // Close the dropdown after selection
	};

	// Handle click outside dropdown to close it
	const handleClickOutside = (event: any) => {
		if (
			dropRef.current &&
			!(dropRef.current as any).contains(event.target)
		) {
			setIsOpen(false);
		}
	};

	// Add event listener to handle click outside the dropdown
	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	// Toggle dropdown visibility
	const toggleDropdown = () => {
		setIsOpen((previous) => !previous);
	};

	// Render dropdown options based on the provided options
	const renderOptions = () => (
		<ul className={`${group}__dropdown-menu ${isOpen ? "active" : ""}`}>
			{options.map(({ id, value: { title, utility } }) => (
				<li
					key={id}
					className={`${group}__dropdown-menu-item`}
					onClick={handleOptionChange}
					data-value={title}
				>
					<span>{utility}</span>
				</li>
			))}
		</ul>
	);

	return (
		<section
			className={`${group}__dropdown`}
			ref={dropRef}
		>
			{/* Dropdown button to toggle options visibility */}
			<button
				type="button"
				onClick={toggleDropdown}
				className={`${group}__dropdown-button`}
			>
				<span>{selectedValue ? selectedValue : "Choose One"}</span>
				<span className={`${group}__dropdown-icon`}>
					<ButtonIcon />
				</span>
			</button>

			{/* Render options if dropdown status is true */}
			{isOpen && renderOptions()}
		</section>
	);
};
