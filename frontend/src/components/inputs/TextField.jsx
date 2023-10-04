/**
 * TextField Component
 * @param {string} id - The unique ID for the input field.
 * @param {boolean} edit - Boolean indicating whether the field is in edit mode.
 * @param {string} label - The label text for the input field.
 * @param {string} error - The error message to display when there's an error.
 * @param {string} group - The CSS class or group identifier.
 * @param {string} value - The current value of the input field.
 * @param {Function} onBlur - Event handler for onBlur event.
 * @param {boolean} touched - Boolean indicating whether the field has been touched.
 * @param {Function} onChange - Event handler for onChange event.
 * @param {string} placeholder - The placeholder text for the input field.
 */

const TextField = ({
	id,
	edit,
	label,
	error,
	group,
	value,
	onBlur,
	touched,
	onChange,
	placeholder,
}) => {
	// Determines whether to display the edit button
	const showEditButton = edit && value === "";

	return (
		<div className={`${group}__text-field`}>
			{/* Input Label */}
			<label
				htmlFor={id}
				className={`${group}__text-label`}
			>
				{label}
			</label>

			{/* Input Field and Edit Button */}
			<div className={`${group}__text-wrapper`}>
				<input
					id={id}
					type="text"
					value={value}
					onBlur={onBlur}
					onChange={onChange}
					placeholder={placeholder}
					className={`${group}__text-input input`}
				/>
				{/* Edit Button (visible when in edit mode and input is empty) */}
				{showEditButton && (
					<span className={`${group}__text-edit`}>edit</span>
				)}
			</div>

			{/* Error Message (visible when there's an error and field is touched) */}
			{error && touched && (
				<p className={`${group}__text-error`}>{error}</p>
			)}
		</div>
	);
};

export default TextField;
