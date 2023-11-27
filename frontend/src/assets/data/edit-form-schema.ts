import * as yup from "yup";

/**
 * Validation schema for user profile form.
 */
export const EDIT_SCHEMA = yup.object().shape({
	/**
	 * Bio field validation.
	 * Must be a non-empty string.
	 */
	bio: yup.string().required("Bio is required"),

	/**
	 * Discord field validation.
	 * Can be a string.
	 */
	discord: yup.string(),

	/**
	 * Name field validation.
	 * Must be a non-empty string.
	 */
	name: yup.string().required("Name is required"),

	/**
	 * Occupation field validation.
	 * Must be a non-empty string.
	 */
	occupation: yup.string().required("Occupation is required"),

	/**
	 * Telegram field validation.
	 * Can be a string.
	 */
	telegram: yup.string(),

	/**
	 * Username field validation.
	 * Must be a string of 3 to 20 characters, containing only letters, numbers, and underscores.
	 */
	username: yup
		.string()
		.matches(
			/^[a-zA-Z0-9_]{3,20}$/,
			"Invalid username. Must be 3 to 20 characters and contain only letters, numbers, and underscores.",
		)
		.required("Username is required"),

	/**
	 * xDotCom field validation.
	 * Can be a string.
	 */
	xDotCom: yup.string(),

	/**
	 * Youtube field validation.
	 * Can be a string.
	 */
	youtube: yup.string(),
});
