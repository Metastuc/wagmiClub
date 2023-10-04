import { useFormik } from "formik";
import { FileUpload, FormField } from "../../components";
import medalSchema from "../../components/medal/validation";
import "./index.scss";

const Medal = ({ group }) => {
	const initialValues = {
			image: null,
			title: "",
			type: "",
			address: "",
			metrics: "",
			validator: "",
			additionalInfo: "",
		},
		{
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
				console.log("formik data ", values);
			},
		});

	console.table(values);

	return (
		<section className="medal-tab">
			<form
				autoComplete="off"
				onSubmit={handleSubmit}
			>
				<FileUpload
					group={group}
					errors={errors}
					touched={touched}
					handleBlur={handleBlur}
					onImageChange={(image) => setFieldValue("image", image)}
				/>

				<FormField
					group={group}
					errors={errors}
					touched={touched}
					formData={values}
					handleBlur={handleBlur}
					setFieldValue={setFieldValue}
					handleFormChange={handleChange}
				/>

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
