import React from "react";
import { TextField } from "../../reusable";
import "./index.scss";

/**
 * Socials component for displaying and editing user's social media links.
 * @param {Object} props - Component properties.
 * @param {Object} props.errors - Form validation errors.
 * @param {Object} props.touched - Touched form fields.
 * @param {Object} props.formData - User's social media data.
 * @param {Function} props.handleBlur - Event handler for input blur.
 * @param {Function} props.handleFormChange - Event handler for form field changes.
 * @returns {JSX.Element} Socials component JSX.
 */
const Socials = ({
	errors,
	touched,
	formData,
	handleBlur,
	handleFormChange,
}) => {
	const { discord, telegram, xDotCom, youtube } = formData;
	const group = "socials";

	return (
		<div className={group}>
			{/* Section heading */}
			<h3 className="form__divider">
				Link to your other social accounts (optional)
			</h3>

			{/* Social media input fields */}
			<TextField
				id="xDotCom"
				group={group}
				label="X.com/"
				value={xDotCom}
				touched={touched.xDotCom}
				onBlur={handleBlur}
				error={errors.xDotCom}
				edit={false}
				onChange={handleFormChange}
				placeholder={"username"}
			/>

			<TextField
				id="discord"
				group={group}
				label="discord.com/"
				value={discord}
				touched={touched.discord}
				onBlur={handleBlur}
				error={errors.discord}
				edit={false}
				onChange={handleFormChange}
				placeholder={"username"}
			/>

			<TextField
				id="telegram"
				group={group}
				label="telegram.org/"
				value={telegram}
				touched={touched.telegram}
				onBlur={handleBlur}
				error={errors.telegram}
				edit={false}
				onChange={handleFormChange}
				placeholder={"username"}
			/>

			<TextField
				id="youtube"
				group={group}
				label="youtube.com/"
				value={youtube}
				touched={touched.youtube}
				onBlur={handleBlur}
				error={errors.youtube}
				edit={false}
				onChange={handleFormChange}
				placeholder={"username"}
			/>
		</div>
	);
};

export default Socials;
