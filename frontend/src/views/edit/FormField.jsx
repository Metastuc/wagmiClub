import React from "react";
import { Details, Socials } from "../../components";
import { useFormik } from "formik";
import { useEffect } from "react";
import { schema } from "../../components/edit/validateSchema";
import "./index.scss";

const FormField = ({ activeTab }) => {
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

	const {
		errors,
		values,
		touched,
		handleBlur,
		handleChange,
		handleSubmit,
		setFieldValue,
	} = useFormik({
		validationSchema: schema,
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
			className="form"
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

			<div className="form__button">
				<button type="submit" className="form__button-wrapper">
					<span className="form__button-label">Save</span>
				</button>
			</div>
		</form>
	);
};

export default FormField;
