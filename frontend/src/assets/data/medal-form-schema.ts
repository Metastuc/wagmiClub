import * as Yup from "yup";

export const MEDAL_SCHEMA = Yup.object().shape({
	image: Yup.mixed().required("Image is required"),
	title: Yup.string().required("Title is required"),
	type: Yup.string().required("Type is required"),
	address: Yup.string()
		.required("Address is required")
		.matches(/^(0x)?[a-fA-F0-9]{40}$/, "Invalid or incomplete address"),
	metrics: Yup.string().required("Metrics is required"),
	validator: Yup.string().required("Validator name is required"),
	additionalInfo: Yup.string(),
});
