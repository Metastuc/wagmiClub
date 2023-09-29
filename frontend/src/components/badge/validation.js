import * as yup from "yup";

export const badgeSchema = yup.object().shape({
	image: yup.mixed().required("Badge image is required"),
	title: yup.string().required("Badge title is required"),
	description: yup.string().required("Badge description is required"),
	receiver: yup
		.string()
		.required("Receiver address is required")
		.matches(/^(0x)?[a-fA-F0-9]{40}$/, "Invalid or incomplete address"),
	working: yup.boolean(),
	startDate: yup
		.date()
		.required("Start date is required"),
	endDate: yup
		.date()
		.required("End date is required")
		.min(yup.ref("startDate"), "End date must be after start date"),
	validator: yup
		.string()
		.required("Badge Validator's name & position is required"),
	additionalInfo: yup.string(),
	rating: yup.number(),
});