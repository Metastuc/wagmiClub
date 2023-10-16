import React from "react";

/**
 * TextareaField Component
 * @param {string} id - The unique ID for the textarea field.
 * @param {string} group - The CSS class or group identifier.
 * @param {string} label - The label text for the textarea field.
 * @param {string} error - The error message to display when there's an error.
 * @param {string} value - The current value of the textarea field.
 * @param {Function} onBlur - Event handler for onBlur event.
 * @param {boolean} touched - Boolean indicating whether the field has been touched.
 * @param {Function} onChange - Event handler for onChange event.
 */

const TextareaField = ({
	id,
	group,
	error,
	label,
	value,
	onBlur,
	touched,
	onChange,
}) => {
	return (
		<div className={`${group}__textarea-field`}>
			{/* Textarea Label */}
			<label
				htmlFor={id}
				className={`${group}__textarea-label`}
			>
				{label}
			</label>

			{/* Textarea Input */}
			<div className={`${group}__textarea-wrapper`}>
				<textarea
					id={id}
					value={value}
					onBlur={onBlur}
					onChange={onChange}
					className={`${group}__textarea-input textarea`}
				></textarea>
			</div>

			{/* Error Message (visible when there's an error and field is touched) */}
			{error && touched && (
				<p className={`${group}__textarea-error`}>{error}</p>
			)}
		</div>
	);
};

export default TextareaField;
