import { useState } from "react";
import { Dropdown } from "../reusable";

/**
 * SelectField Component
 * @param {string} id - The unique ID for the select field.
 * @param {string} label - The label text for the select field.
 * @param {string} group - The CSS class or group identifier.
 * @param {Array} options - The list of options for the select field.
 * @param {Function} onChange - Event handler for onChange event.
 * @param {Function} setFieldValue - Function provided by Formik to set field value.
 */

const SelectField = ({
	id,
	label,
	group,
	options,
	onChange,
	setFieldValue,
	error,
	touched,
}) => {
	const [selected, setSelected] = useState(""); // Local state to store selected option

	// Event handler for dropdown option change
	const handleDropdownChange = (selectedOption) => {
		setSelected(selectedOption); // Update local state with selected option
		setFieldValue(id, selectedOption); // Update Formik field value
		onChange(selectedOption); // Call parent component's onChange handler if needed
	};

	return (
		<div className={`${group}__select-field`}>
			{/* Label for the select field */}
			<label
				htmlFor={id}
				className={`${group}__select-label`}
			>
				{label}
			</label>

			<div className={`${group}__select-wrapper`}>
				{/* Dropdown component */}
				<Dropdown
					group={group}
					options={options}
					selectedValue={selected}
					setFieldValue={setFieldValue}
					onChange={handleDropdownChange}
				/>
			</div>

			{/* Error Message (visible when there's an error and field is touched) */}
			{error && touched && (
				<p className={`${group}__text-error`}>{error}</p>
			)}
		</div>
	);
};

export default SelectField;
