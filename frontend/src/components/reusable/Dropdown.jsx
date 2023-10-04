import { useToggle } from "../../hooks";
import { Dropdown as ButtonIcon } from "../../assets/icons";

const Dropdown = ({ group, options, onChange, selectedValue }) => {
	// Custom hook for managing dropdown visibility
	const { status, toggleStatus } = useToggle(),
		// Handle option click event and update form values
		handleOptionChange = (event) => {
			const selectedOption =
				event.currentTarget.getAttribute("data-value");
			onChange(selectedOption); // Call parent component's onChange handler
			toggleStatus(); // Close the dropdown after selection
		};

	// Render dropdown options based on the provided options
	const renderOptions = () => (
		<ul className={`${group}__dropdown-menu ${status ? "active" : null}`}>
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
		<section className={`${group}__dropdown`}>
			{/* Dropdown button to toggle options visibility */}
			<button
				type="button"
				onClick={toggleStatus}
				className={`${group}__dropdown-button`}
			>
				<span>{selectedValue ? selectedValue : "Choose One"}</span>

				<span>
					<ButtonIcon />
				</span>
			</button>

			{/* Render options if dropdown status is true */}
			{status && renderOptions()}
		</section>
	);
};

export default Dropdown;
