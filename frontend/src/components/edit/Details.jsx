import React from "react";
import { SelectField, TextField, TextareaField } from "../inputs";
import { personal, organisation } from "../../assets/data";
import "./index.scss"

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
	const { name, username, bio, occupation } = formData;
	console.log(activeTab);
	const occupationOptions =
		activeTab === "personal"
			? personal
			: activeTab === "organisation"
			? organisation
			: null;

	return (
		<>
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

			<SelectField
				id="occupation"
				group={group}
				label="What Do You Do?"
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
