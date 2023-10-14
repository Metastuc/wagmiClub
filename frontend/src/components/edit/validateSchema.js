import * as yup from "yup";

export const schema = yup.object().shape({
	bio: yup.string().required("Bio is required"),
	discord: yup
		.string(),
	name: yup.string().required("Name is required"),
	occupation: yup.string().required("Occupation is required"),
	telegram: yup
		.string(),
	username: yup
		.string()
		.matches(/^[a-zA-Z0-9_]{3,20}$/, "Invalid username")
		.required("Username is required"),
	xDotCom: yup.string(),
	youtube: yup
		.string()
});
