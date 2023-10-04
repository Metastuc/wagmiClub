import * as Yup from "yup";

const medalSchema = Yup.object().shape({
	image: Yup.mixed().required("Image is required"),
	title: Yup.string().required("Title is required"),
	type: Yup.string().required("Type is required"),
	address: Yup.string().required("Address is required"),
	metrics: Yup.string().required("Metrics is required"),
	validator: Yup.string().required("Validator name is required"),
	additionalInfo: Yup.string(),
});

export default medalSchema;
