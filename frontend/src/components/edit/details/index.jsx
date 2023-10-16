import React, { useEffect, useState } from "react";
import { SelectField, TextField, TextareaField } from "../../reusable";
import { personal, organisation } from "../../../assets/data";
import "./index.scss";

/**
 * Details Component - A form component requesting user details.
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.errors - Object containing form validation errors.
 * @param {Object} props.touched - Object indicating if form fields have been touched.
 * @param {Object} props.formData - Object containing form field values.
 * @param {string} props.activeTab - The active tab (personal or organisation).
 * @param {Function} props.handleBlur - Event handler for onBlur event.
 * @param {Function} props.setFieldValue - Function provided by Formik to set field value.
 * @param {Function} props.handleFormChange - Event handler for form field changes.
 */
const Details = ({
	errors,
	touched,
	formData,
	activeTab,
	handleBlur,
	setFieldValue,
	handleFormChange,
}) => {
	const group = "details";
	const { name, username, bio } = formData;
	const [options, setOptions] = useState(personal);
	const occupationOptions = options;

	/**
	 * Update options based on the active tab (personal or organisation).
	 */
	useEffect(() => {
		setOptions(
			activeTab === "personal"
				? personal
				: activeTab === "organisation"
				? organisation
				: null,
		);
	}, [activeTab]);

	return (
		<>
			{/* Name Text Field */}
			<TextField
				id="name"
				group={group}
				label="Enter Name"
				value={name}
				touched={touched.name}
				onBlur={handleBlur}
				error={errors.name}
				edit={false}
				onChange={handleFormChange}
			/>

			{/* Username Text Field */}
			<TextField
				id="username"
				group={group}
				label="Enter Username"
				value={username}
				touched={touched.username}
				onBlur={handleBlur}
				error={errors.username}
				edit={false}
				onChange={handleFormChange}
			/>

			{/* Bio Textarea Field */}
			<TextareaField
				id="bio"
				group={group}
				label="Bio"
				value={bio}
				touched={touched.bio}
				onBlur={handleBlur}
				error={errors.bio}
				edit={false}
				onChange={handleFormChange}
			/>

			{/* Occupation Select Field */}
			<SelectField
				id="occupation"
				group={group}
				label="What Describes You Best?"
				options={occupationOptions}
				edit={false}
				onChange={handleFormChange}
				setFieldValue={setFieldValue}
				error={errors.occupation}
				touched={touched.occupation}
			/>
		</>
	);
};

export default Details;
