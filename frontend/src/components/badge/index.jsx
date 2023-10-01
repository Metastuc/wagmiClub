import { useFormik } from "formik";
import { badgeSchema } from "./validation";
import ImageUpload from "./imageUpload";
import FormField from "./form";
import Rating from "./rating";
import "./index.scss";

const Badge = () => {
	const initialValues = {
			additionalInfo: "",
			description: "",
			endDate: null,
			image: null,
			rating: 0,
			receiver: "",
			startDate: new Date(),
			title: "",
			validator: "",
			working: false,
		},
		{
			values,
			handleSubmit,
			setFieldValue,
			handleChange,
			handleBlur,
			errors,
			touched,
		} = useFormik({
			validationSchema: badgeSchema,
			initialValues,
			onSubmit: (values) => {
				console.log("formik data", values);
			},
		});

	return (
		<section className="badge-tab">
			<form
				onSubmit={handleSubmit}
				autoComplete="off"
			>
				<ImageUpload
					onImageChange={(image) => setFieldValue("image", image)}
					handleBlur={handleBlur}
					errors={errors}
					touched={touched}
				/>

				<FormField
					formData={values}
					handleFormChange={handleChange}
					setFieldValue={setFieldValue}
					handleBlur={handleBlur}
					errors={errors}
					touched={touched}
				/>

				<Rating
					rating={values.rating}
					handleRatingChange={(newRating) =>
						setFieldValue("rating", newRating)
					}
				/>

				<div className="badge-submit">
					<button
						className="badge-submit__button"
						type="submit"
					>
						<span>mint badge</span>
					</button>
				</div>
			</form>
		</section>
	);
};

export default Badge;
