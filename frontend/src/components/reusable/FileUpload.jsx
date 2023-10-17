import { useState } from "react";
import { UploadImage } from "../../assets/icons";

/**
 * FileUpload Component
 * @param {string} group - The group identifier for the component (e.g., "profile", "avatar").
 * @param {object} errors - Formik errors object.
 * @param {object} touched - Formik touched object.
 * @param {function} handleBlur - Formik handleBlur function.
 * @param {function} onImageChange - Function to handle image change and pass the image to the parent component.
 */
const FileUpload = ({ group, errors, touched, handleBlur, onImageChange }) => {
	// State to keep track of the selected image preview
	const [selected, setSelected] = useState(null);

	/**
	 * Event handler for when the user selects an image file
	 * @param {object} event - The file input change event.
	 */
	const handleImageChange = (event) => {
		const image = event.target.files[0]; // Get the selected image file
		const reader = new FileReader(); // Create a new FileReader to read the image file

		onImageChange(image); // Pass the selected image to the parent component

		// Callback function when the FileReader has successfully read the image
		reader.onload = () => {
			setSelected(reader.result); // Update the selected image preview
		};

		reader.readAsDataURL(image); // Read the image file as a data URL
	};

	/**
	 * Function to open the file input when the preview is clicked
	 */
	const openFileInput = () => {
		document.querySelector("#upload").click(); // Trigger the click event on the file input
	};

	return (
		<div className={`${group}__image`}>
			{/* File input element */}
			<input
				className={`${group}__image-input`}
				type="file"
				accept="image/*"
				id="upload"
				onChange={handleImageChange} // Handle file selection
				onBlur={() => handleBlur("image")}
			/>
			{/* Image preview or default upload icon */}
			<span
				onClick={openFileInput}
				className={`${group}__image-preview`}
			>
				{selected ? (
					<img
						src={selected}
						alt="Preview"
					/>
				) : (
					<UploadImage />
				)}
			</span>
			{/* Label text for the file input */}
			<label
				htmlFor={`${group}__image`}
				className={`${group}__image-label`}
			>
				{selected
					? `Tap image to change ${group}`
					: `Upload Nft ${group} image`}
			</label>
			{/* Display error message if there are errors related to the image */}
			{errors.image && touched.image && (
				<p className={`${group}__image-error`}>{errors.image}</p>
			)}
		</div>
	);
};

export default FileUpload;
