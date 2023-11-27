import * as yup from "yup";

/**
 * Validation schema for the badge form.
 */
export const BADGE_SCHEMA = yup.object().shape({
	// Validation for badge image field
	image: yup.mixed().required("Badge image is required"),

	// Validation for badge title field
	title: yup.string().required("Badge title is required"),

	// Validation for badge description field
	description: yup.string().required("Badge description is required"),

	// Validation for receiver address field
	receiver: yup
		.string()
		.required("Receiver address is required")
		.matches(/^(0x)?[a-fA-F0-9]{40}$/, "Invalid or incomplete address"),

	// Validation for working status field
	working: yup.boolean(),

	// Validation for start date field
	startDate: yup.date().required("Start date is required"),

	// Validation for end date field
	endDate: yup
		.date()
		.when("startDate", (startDate, schema) => {
			// End date should not be before the start date
			return schema.min(
				startDate,
				"The start date cannot be before the end date",
			);
		})
		.when("working", (working, schema) => {
			// Additional validation for end date if badge is not currently working
			if (!working) {
				return schema
					.min(yup.ref("startDate"))
					.required("End date is required if not currently working");
			}
			return schema;
		}),

	// Validation for badge validator's name & position field
	validator: yup
		.string()
		.required("Badge Validator's name & position is required"),

	// Validation for additional information field
	additionalInfo: yup.string(),

	// Validation for rating field
	rating: yup.number(),
});
