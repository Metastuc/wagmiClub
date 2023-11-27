import { ChangeEvent, FC, FocusEvent } from "react";

interface props {
	group: string;
	id: string;
	edit: boolean;
	label: string;
	error: string | undefined;
	value: string;
	onBlur: (
		event: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
	) => void;
	touched: boolean | undefined;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
}
export const TextField: FC<props> = ({
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
	const showEdit = edit && value === "";

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
				{showEdit && (
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
