import { FC, FocusEvent } from "react";
import { SelectField, TextField, TextAreaField } from "@/components";
import { MEDAL_TYPE, WINNING_METRICS } from "@/assets/data";
import "./index.scss";

interface props {
	group: string;
	errors: {
		title?: string;
		type?: string;
		address?: string;
		metrics?: string;
		validator?: string;
		additionalInfo?: string;
	};
	touched: {
		title?: boolean;
		type?: boolean;
		address?: boolean;
		metrics?: boolean;
		validator?: boolean;
		additionalInfo?: boolean;
	};
	formData: {
		title: string;
		address: string;
		validator: string;
		additionalInfo: string;
	};
	handleBlur: (event: FocusEvent<any>) => void;
	setFieldValue: (
		field: string,
		value: any,
		shouldValidate?: boolean,
	) => void;
	handleFormChange: (event: any) => void;
}

const FormField: FC<props> = ({
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
				options={MEDAL_TYPE}
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
				options={WINNING_METRICS}
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
			<TextAreaField
				id="additionalInfo"
				group={group}
				label="Additional Information"
				value={additionalInfo}
				touched={touched.additionalInfo}
				onBlur={handleBlur}
				error={errors.additionalInfo}
				onChange={handleFormChange}
			/>
		</>
	);
};

export { FormField as MedalForm };
