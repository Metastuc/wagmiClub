import React, { useEffect } from "react";
import { useFormik } from "formik";
import { Details, Socials } from "../../components";
import { schema } from "../../components/edit";
import "./index.scss";

/**
 * FormField component for rendering user details and socials forms based on active tab.
 * @param {string} activeTab - The active tab for which the form fields are displayed.
 * @returns {JSX.Element} FormField component JSX.
 */
export const FormField = ({ activeTab }) => {
	// Initial form values based on active tab
	const initialValues = {
		account: activeTab,
		bio: "",
		discord: "",
		name: "",
		occupation: "",
		telegram: "",
		username: "",
		xDotCom: "",
		youtube: "",
	};

	// Formik form handling logic
	const {
		errors,
		values,
		touched,
		handleBlur,
		handleChange,
		handleSubmit,
		setFieldValue,
	} = useFormik({
		validationSchema: schema, // Form validation schema
		initialValues, // Initial form values
		onSubmit: (values) => {
			console.table("Formik data:", values);
			// Handle form submission logic here (e.g., API call)
		},
	});

	// Update account field value when active tab changes
	useEffect(() => {
		setFieldValue("account", activeTab);
	}, [activeTab]);

	return (
		<form
			autoComplete="off"
			onSubmit={handleSubmit}
			className="form"
		>
			{/* User details form section */}
			<Details
				errors={errors}
				touched={touched}
				formData={values}
				activeTab={activeTab}
				handleBlur={handleBlur}
				setFieldValue={setFieldValue}
				handleFormChange={handleChange}
			/>

			{/* User socials form section */}
			<Socials
				errors={errors}
				touched={touched}
				formData={values}
				handleBlur={handleBlur}
				setFieldValue={setFieldValue}
				handleFormChange={handleChange}
			/>

			{/* Form submission button */}
			<div className="form__button">
				<button
					type="submit"
					className="form__button-wrapper"
				>
					<span className="form__button-label">Save</span>
				</button>
			</div>
		</form>
	);
};
