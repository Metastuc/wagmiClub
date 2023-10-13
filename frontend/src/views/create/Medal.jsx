import { useFormik } from "formik";
import medalSchema from "../../components/medal/validation";
import { FileUpload, FormField } from "../../components";
import "./index.scss";

/**
 * Medal Component
 * @param {string} group - The group identifier for the component (i.e., "badge", "medal").
 */
const Medal = ({ group }) => {
	// Initial form values
	const initialValues = {
		image: null,
		title: "",
		type: "",
		address: "",
		metrics: "",
		validator: "",
		additionalInfo: "",
	};

	// Formik form handling
	const {
		errors,
		values,
		touched,
		handleBlur,
		handleChange,
		handleSubmit,
		setFieldValue,
	} = useFormik({
		validationSchema: medalSchema,
		initialValues,
		onSubmit: (values) => {
			console.log("Formik data:", values);
			// Handle form submission logic here (e.g., API call)
		},
	});

	return (
		<section className="medal-tab">
			<form
				autoComplete="off"
				onSubmit={handleSubmit}
			>
				{/* File Upload component */}
				<FileUpload
					group={group}
					errors={errors}
					touched={touched}
					handleBlur={handleBlur}
					onImageChange={(image) => setFieldValue("image", image)}
				/>

				{/* Form Fields component */}
				<FormField
					group={group}
					errors={errors}
					touched={touched}
					formData={values}
					handleBlur={handleBlur}
					setFieldValue={setFieldValue}
					handleFormChange={handleChange}
				/>

				{/* Submit Button */}
				<div className={`${group}-submit`}>
					<button
						className={`${group}-submit__button`}
						type="submit"
					>
						<span>mint badge</span>
					</button>
				</div>
			</form>
		</section>
	);
};

export default Medal;
