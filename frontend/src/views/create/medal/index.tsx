import { useFormik } from "formik";
import { MEDAL_SCHEMA, DEPLOYMENT_CHAINS } from "@/assets/data";
import { ImageUpload, MedalForm, SelectField } from "@/components";
import "./index.scss";

export const Medal = ({ group }: { group: string }) => {
	const initialValues = {
		image: null,
		title: "",
		type: "",
		address: "",
		metrics: "",
		validator: "",
		deployChain: "Lukso",
		additionalInfo: "",
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
		validationSchema: MEDAL_SCHEMA,
		initialValues,
		onSubmit: (values) => {
			console.log("Formik data:", values);
			// Handle form submission logic here (e.g., API call)
		},
	});

	return (
		<section>
			<form
				autoComplete="off"
				onSubmit={handleSubmit}
				className={`${group}__form`}
			>
				<SelectField
					id="deployChain"
					group={`${group}__chain`}
					label="chain"
					options={DEPLOYMENT_CHAINS}
					edit={false}
					onChange={handleChange}
					setFieldValue={setFieldValue}
					error={errors.deployChain}
					touched={touched.deployChain}
					selectedValue="Lukso"
				/>

				{/* File Upload component */}
				<ImageUpload
					group={group}
					errors={errors}
					touched={touched}
					handleBlur={handleBlur}
					onImageChange={(image) => setFieldValue("image", image)}
				/>

				{/* Form Fields component */}
				<MedalForm
					group={group}
					errors={errors}
					touched={touched}
					formData={values}
					handleBlur={handleBlur}
					setFieldValue={setFieldValue}
					handleFormChange={handleChange}
				/>

				{/* Submit Button */}
				<div className={`${group}__submit`}>
					<button
						className={`${group}__submit-button`}
						type="submit"
					>
						<span>mint badge</span>
					</button>
				</div>
			</form>
		</section>
	);
};
