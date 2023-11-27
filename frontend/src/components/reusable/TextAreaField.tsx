import { ChangeEvent, FC, FocusEvent } from "react";

interface props {
	id: string;
	group: string;
	error: string | undefined;
	label: string;
	value: string;
	onBlur: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => void;
	touched: boolean | undefined;
	onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextAreaField: FC<props> = ({
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
