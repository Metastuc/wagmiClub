import React, { Fragment } from "react";
import { TextField, TextareaField } from "../../reusable";
import TimeStamp from "../timestamp";
import "./index.scss";

/**
 * FormField component for displaying and editing badge form fields.
 *
 * @component
 * @param {string} group - The group identifier for the form fields.
 * @param {Object} formData - The data containing badge form fields.
 * @param {Function} handleFormChange - Callback function for handling form field changes.
 * @param {Function} setFieldValue - Function to set form field values.
 * @param {Function} handleBlur - Callback function for handling field blur events.
 * @param {Object} errors - Object containing form validation errors.
 * @param {Object} touched - Object containing information about touched form fields.
 * @returns {JSX.Element} - A React component representing badge form fields.
 */
export const FormField = ({
	group,
	formData,
	handleFormChange,
	setFieldValue,
	handleBlur,
	errors,
	touched,
}) => {
	const {
		title,
		description,
		receiver,
		startDate,
		endDate,
		working,
		validator,
		additionalInfo,
	} = formData;

	return (
		<Fragment>
			{/* Text input for badge title */}
			<TextField
				id="title"
				group={group}
				label="Badge Title"
				value={title}
				touched={touched.title}
				onBlur={handleBlur}
				error={errors.title}
				edit={false}
				onChange={handleFormChange}
			/>

			{/* Textarea input for badge description */}
			<TextareaField
				id="description"
				group={group}
				label="Badge Description"
				value={description}
				touched={touched.description}
				onBlur={handleBlur}
				error={errors.description}
				onChange={handleFormChange}
			/>

			{/* Text input for receiver's wallet address */}
			<TextField
				id="receiver"
				group={group}
				label="Receivers wallet address"
				value={receiver}
				touched={touched.receiver}
				onBlur={handleBlur}
				error={errors.receiver}
				edit={true}
				onChange={handleFormChange}
				placeholder="0x636h821nb"
			/>

			{/* Timestamp component for start and end dates */}
			<TimeStamp
				group={group}
				startDate={startDate}
				endDate={endDate}
				working={working}
				onBlur={handleBlur}
				handleFormChange={handleFormChange}
				errors={errors}
				touched={touched}
				setFieldValue={setFieldValue}
			/>

			{/* Text input for validator's name and position */}
			<TextField
				id="validator"
				group={group}
				label="Badge validator's name & position in organisation"
				value={validator}
				touched={touched.validator}
				onBlur={handleBlur}
				error={errors.validator}
				edit={true}
				onChange={handleFormChange}
				placeholder="JeheeCTO"
			/>

			{/* Textarea input for additional information */}
			<TextareaField
				id="additionalInfo"
				group={group}
				label="Additional information"
				value={additionalInfo}
				touched={touched.additionalInfo}
				onBlur={handleBlur}
				error={errors.additionalInfo}
				onChange={handleFormChange}
			/>
		</Fragment>
	);
};
