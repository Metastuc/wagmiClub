import React from "react";
import { Details, Socials } from "../../components";
import { useFormik } from "formik";
import { useEffect } from "react";

const FormField = ({ activeTab }) => {
	const initialValues = {
		"account": activeTab,
		"bio": "",
		"discord": "",
		"name": "",
		"occupation": "",
		"telegram": "",
		"username": "",
		"x.com": "",
		"youtube": "",
	};

	const {
		errors,
		values,
		touched,
		handleBlur,
		handleChange,
		handleSubmit,
		setFieldValue,
	} = useFormik({
		// validationSchema,
		initialValues,
		onSubmit: (values) => {
			console.table("Formik data:", values);
			// Handle form submission logic here (e.g., API call)
		},
	});

	useEffect(() => {
		setFieldValue("account", activeTab);
	}, [activeTab]);

	return (
		<form
			autoComplete="off"
			onSubmit={handleSubmit}
		>
			{/* user details component */}
			<Details
				errors={errors}
				touched={touched}
				formData={values}
				activeTab={activeTab}
				handleBlur={handleBlur}
				setFieldValue={setFieldValue}
				handleFormChange={handleChange}
			/>

			{/* user socials component */}
			<Socials
				errors={errors}
				touched={touched}
				formData={values}
				handleBlur={handleBlur}
				setFieldValue={setFieldValue}
				handleFormChange={handleChange}
			/>

			{/* submit form */}
			<button>save</button>
		</form>
	);
};

export default FormField;
