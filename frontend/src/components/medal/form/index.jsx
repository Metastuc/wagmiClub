import React from "react";
import { medalType, winningMetrics } from "../../../assets/data";
import { SelectField, TextField, TextareaField } from "../../reusable";
import "./index.scss";

/**
 * FormField component renders the input fields for adding/editing medal details.
 * @param {object} props - Component properties.
 * @param {string} props.group - Group identifier for form fields.
 * @param {object} props.errors - Formik errors object.
 * @param {object} props.touched - Formik touched object.
 * @param {object} props.formData - Form data object containing medal details.
 * @param {Function} props.handleBlur - Formik handleBlur function.
 * @param {Function} props.setFieldValue - Formik setFieldValue function.
 * @param {Function} props.handleFormChange - Handler for form field changes.
 * @returns {JSX.Element} FormField component JSX.
 */
const FormField = ({
	group,
	errors,
	touched,
	formData,
	handleBlur,
	setFieldValue,
	handleFormChange,
}) => {
	const { title, address, validator, additionalInfo } = formData;

	return (
		<>
			{/* Medal Title Field */}
			<TextField
				id="title"
				group={group}
				label="Medal Title"
				value={title}
				touched={touched.title}
				onBlur={handleBlur}
				error={errors.title}
				edit={false}
				onChange={handleFormChange}
			/>

			{/* Medal Type Dropdown */}
			<SelectField
				id="type"
				group={group}
				label="Medal Type"
				options={medalType}
				edit={false}
				onChange={handleFormChange}
				setFieldValue={setFieldValue}
				error={errors.type}
				touched={touched.type}
			/>

			{/* Contract Address Field */}
			<TextField
				id="address"
				group={group}
				label="Contract Address"
				value={address}
				touched={touched.address}
				onBlur={handleBlur}
				error={errors.address}
				edit={true}
				placeholder="0x636h821nb"
				onChange={handleFormChange}
			/>

			{/* Winning Metrics Dropdown */}
			<SelectField
				id="metrics"
				group={group}
				label="Eligibility Metrics"
				options={winningMetrics}
				edit={false}
				onChange={handleFormChange}
				setFieldValue={setFieldValue}
				error={errors.metrics}
				touched={touched.metrics}
			/>

			{/* Validator's Name & Position Field */}
			<TextField
				id="validator"
				group={group}
				label="Medal Validator's Name & Position in Organisation"
				value={validator}
				touched={touched.validator}
				onBlur={handleBlur}
				error={errors.validator}
				edit={false}
				onChange={handleFormChange}
			/>

			{/* Additional Information Textarea */}
			<TextareaField
				id="additionalInfo"
				group={group}
				label="Additional Information"
				value={additionalInfo}
				touched={touched.additionalInfo}
				onBlur={handleBlur}
				errors={errors.additionalInfo}
				onChange={handleFormChange}
			/>
		</>
	);
};

export default FormField;
