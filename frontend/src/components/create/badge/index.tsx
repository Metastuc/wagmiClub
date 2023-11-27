import { ChangeEvent, FC, FocusEvent } from "react";
import { TextAreaField, TextField } from "@/components";
import { TimeStamp } from "..";
import "./index.scss";

interface props {
	group: string;
	formData: {
		title: string;
		description: string;
		receiver: string;
		startDate: Date;
		endDate: Date | null;
		working: boolean;
		validator: string;
		additionalInfo: string;
	};
	handleFormChange: (event: ChangeEvent<any>) => void;
	setFieldValue: (field: string, value: any) => void;
	handleBlur: (event: FocusEvent<any>) => void;
	errors: {
		title?: string;
		description?: string;
		receiver?: string;
		validator?: string;
		additionalInfo?: string;
	};
	touched: {
		title?: boolean;
		description?: boolean;
		receiver?: boolean;
		validator?: boolean;
		additionalInfo?: boolean;
	};
}

const FormField: FC<props> = ({
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
		<>
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
			<TextAreaField
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
				handleBlur={handleBlur}
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
			<TextAreaField
				id="additionalInfo"
				group={group}
				label="Additional information"
				value={additionalInfo}
				touched={touched.additionalInfo}
				onBlur={handleBlur}
				error={errors.additionalInfo}
				onChange={handleFormChange}
			/>
		</>
	);
};

export { FormField as BadgeForm };
