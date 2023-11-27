"use client";

import { useState, useRef, useEffect, FC, ChangeEvent } from "react";
import { Dropdown as ButtonIcon } from "../../assets/icons";

interface props {
	group: string;
	options: any[];
	onChange: (event: any) => void;
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
		// const selectedOption = event.currentTarget.getAttribute("data-value");
		const selectedOption = event;
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
			{options.map((item) => {
				const {
					id,
					value: { title, utility, image, icon: Icon, bgColor },
				} = item;

				return (
					<li
						key={id}
						className={`${group}__dropdown-menu-item`}
						onClick={() => handleOptionChange(title)}
						data-value={title}
					>
						{image || Icon ? (
							<span style={{ backgroundColor: bgColor }}>
								{image && (
									<img
										src={image}
										alt={title}
									/>
								)}
								{Icon && <Icon />}
							</span>
						) : null}
						{utility && <span>{utility}</span>}
					</li>
				);
			})}
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
				{selectedValue &&
					options.map((item) => {
						const {
							id,
							value: { title, image, bgColor, icon: Icon },
						} = item;
						if (title === selectedValue && (image || Icon)) {
							return (
								<span
									key={id}
									style={{ backgroundColor: bgColor }}
									className={`${group}__dropdown-image`}
								>
									{image && (
										<img
											src={image}
											alt={selectedValue}
										/>
									)}
									{Icon && <Icon />}
								</span>
							);
						}
						return null;
					})}

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
