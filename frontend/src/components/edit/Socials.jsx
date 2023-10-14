import React from "react";
import { TextField } from "../inputs";

const Socials = ({
	errors,
	touched,
	formData,
	activeTab,
	handleBlur,
	setFieldValue,
	handleFormChange,
}) => {
	const { discord, telegram, xDotCom, youtube } = formData;
	const group = "socials";

	return (
		<div className={group}>
			<h3 className="form__divider">
				Link to your other social accounts(optional)
			</h3>

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
