import { useState } from "react";
import { UploadImage } from "../../assets/icons";

const ImageUpload = ({ onImageChange, handleBlur, errors, touched }) => {
	const [selected, setSelected] = useState(null),
		handleImageChange = function (event) {
			const image = event.target.files[0],
				reader = new FileReader();

			onImageChange(image);

			reader.onload = () => {
				setSelected(reader.result);
			};

			reader.readAsDataURL(image);
		};

	return (
		<div className="badge-image">
			<input
				className="badge-image__input"
				type="file"
				accept="image/*"
				id="upload"
				onChange={handleImageChange}
				onBlur={handleBlur}
			/>

			<span
				onClick={() => {
					document.querySelector("#upload").click();
				}}
				className="badge-image__preview"
			>
				{selected ? <img src={selected} /> : <UploadImage />}
			</span>

			<label
				htmlFor="badge-image"
				className="badge-image__label"
			>
				{selected
					? "Tap image to change badge"
					: "Upload Nft badge image"}
			</label>
			{errors.image && touched.image && (
				<p className="badge-image__error">{errors.image}</p>
			)}
		</div>
	);
};

export default ImageUpload;
