// "use client";

// import { SelectField, TextField, TextAreaField } from "@/components";
// import {
// 	PERSONAL_ACCOUNT_OPTIONS,
// 	ORGANIZATION_ACCOUNT_OPTIONS,
// } from "@/assets/data";
// import "./index.scss";
// import { FC, FocusEvent, useEffect, useState } from "react";

// interface props {
// 	group: string;
// 	errors: {
// 		title?: string;
// 		occupation?: string;
// 		type?: string;
// 		name?: string;
// 		address?: string;
// 		metrics?: string;
// 		validator?: string;
// 		additionalInfo?: string;
// 		username?: string;
// 		bio?: string;
// 	};
// 	touched: {
// 		title?: boolean;
// 		occupation?: boolean;
// 		type?: boolean;
// 		name?: boolean;
// 		address?: boolean;
// 		metrics?: boolean;
// 		validator?: boolean;
// 		additionalInfo?: boolean;
// 		username?: boolean;
// 		bio?: boolean;
// 	};
// 	formData: {
// 		title: string;
// 		address: string;
// 		validator: string;
// 		additionalInfo: string;
// 	};
// 	handleBlur: (event: FocusEvent<any>) => void;
// 	setFieldValue: (
// 		field: string,
// 		value: any,
// 		shouldValidate?: boolean,
// 	) => void;
// 	handleFormChange: (event: any) => void;
// 	activeTab: any;
// }

// export const Details: FC<props> = ({
// 	errors,
// 	touched,
// 	formData,
// 	activeTab,
// 	handleBlur,
// 	setFieldValue,
// 	handleFormChange,
// }) => {
// 	const group = "details";
// 	const { name, username, bio } = formData;
// 	const [options, setOptions] = useState<any[] | null>(
// 		PERSONAL_ACCOUNT_OPTIONS,
// 	);
// 	const occupationOptions = options;

// 	useEffect(() => {
// 		setOptions(
// 			activeTab === "personal"
// 				? PERSONAL_ACCOUNT_OPTIONS
// 				: activeTab === "organisation"
// 				? ORGANIZATION_ACCOUNT_OPTIONS
// 				: null,
// 		);
// 	}, [activeTab]);
// 	return (
// 		<>
// 			{/* Name Text Field */}
// 			<TextField
// 				id="name"
// 				group={group}
// 				label="Enter Name"
// 				value={name}
// 				touched={touched.name}
// 				onBlur={handleBlur}
// 				error={errors.name}
// 				edit={false}
// 				onChange={handleFormChange}
// 			/>

// 			{/* Username Text Field */}
// 			<TextField
// 				id="username"
// 				group={group}
// 				label="Enter Username"
// 				value={username}
// 				touched={touched.username}
// 				onBlur={handleBlur}
// 				error={errors.username}
// 				edit={false}
// 				onChange={handleFormChange}
// 			/>

// 			{/* Bio Textarea Field */}
// 			<TextAreaField
// 				id="bio"
// 				group={group}
// 				label="Bio"
// 				value={bio}
// 				touched={touched.bio}
// 				onBlur={handleBlur}
// 				error={errors.bio}
// 				edit={false}
// 				onChange={handleFormChange}
// 			/>

// 			{/* Occupation Select Field */}
// 			<SelectField
// 				id="occupation"
// 				group={group}
// 				label="What Describes You Best?"
// 				options={occupationOptions}
// 				edit={false}
// 				onChange={handleFormChange}
// 				setFieldValue={setFieldValue}
// 				error={errors.occupation}
// 				touched={touched.occupation}
// 			/>
// 		</>
// 	);
// };
