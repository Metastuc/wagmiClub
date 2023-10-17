import React, { useEffect, useState } from "react";
import { Dropdown } from "../reusable";

/**
 * SelectField Component - A reusable dropdown select component.
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.id - The unique ID for the select field.
 * @param {string} props.label - The label text for the select field.
 * @param {string} props.group - The CSS class or group identifier.
 * @param {Array} props.options - The list of options for the select field.
 * @param {Function} props.onChange - Event handler for onChange event.
 * @param {Function} props.setFieldValue - Function provided by Formik to set field value.
 * @param {string} props.error - The error message to display, if any.
 * @param {boolean} props.touched - A flag indicating whether the field has been touched.
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

	/**
	 * Event handler for dropdown option change.
	 * @param {string} selectedOption - The selected option value.
	 */
	const handleDropdownChange = (selectedOption) => {
		setSelected(selectedOption); // Update local state with selected option
		setFieldValue(id, selectedOption); // Update Formik field value
		onChange(selectedOption); // Call parent component's onChange handler if needed
	};

	// Reset the field value and selected state when options change
	useEffect(() => {
		setFieldValue(id, "");
		setSelected("");
	}, [options]);

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
