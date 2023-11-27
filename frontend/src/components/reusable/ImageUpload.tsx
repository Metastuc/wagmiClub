"use client";

import { UploadImage } from "@/assets/icons";
import React, { ChangeEvent, FC, useState } from "react";

interface props {
	group: string;
	errors: { image?: string };
	touched: { image?: boolean };
	handleBlur: (field: string) => void;
	onImageChange: (image: File) => void;
}
export const ImageUpload: FC<props> = ({
	group,
	errors,
	touched,
	handleBlur,
	onImageChange,
}) => {
	const [selected, setSelected] = useState<string | null>(null);

	const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
		const image = event.target.files?.[0];

		if (image) {
			onImageChange(image);
			const reader = new FileReader();
			reader.onload = () => {
				setSelected(reader.result as string);
			};
			reader.readAsDataURL(image);
		}

		const reader = new FileReader();
	};

	const openFileInput = () => {
		const fileInput = document.querySelector<HTMLInputElement>("#upload");
		fileInput?.click();
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
