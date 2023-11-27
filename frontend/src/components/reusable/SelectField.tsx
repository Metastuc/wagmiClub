"use client";

import { ChangeEvent, FC, useState } from "react";
import { Dropdown } from ".";

interface props {
	id: string;
	label: string;
	group: string;
	options: any[];
	onChange: (selectedOption: string) => void;
	setFieldValue: (
		field: string,
		value: any,
		shouldValidate?: boolean,
	) => void;
	error: string | undefined;
	touched: boolean | undefined;
	edit: boolean;
	selectedValue?: string;
}

export const SelectField: FC<props> = ({
	id,
	label,
	group,
	options,
	onChange,
	setFieldValue,
	error,
	touched,
	selectedValue = "",
}) => {
	const [selected, setSelected] = useState<string>(selectedValue);

	const handleDropdownChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const selectedOption = event.toString();
		setSelected(selectedOption);
		console.log({ selectedOption }, { selected });
		setFieldValue(id, selectedOption);
		onChange(selectedOption);
	};

	return (
		<div className={`${group}__select-field`}>
			{/* Label for the select field */}
			<label
				htmlFor={id}
				className={`${group}__select-label`}
			>
				{label}
			</label>

			<div className={`${group}__select-wrapper`}>
				{/* Dropdown component */}
				<Dropdown
					group={group}
					options={options}
					selectedValue={selected}
					onChange={handleDropdownChange}
				/>
			</div>

			{/* Error Message (visible when there's an error and field is touched) */}
			{error && touched && (
				<p className={`${group}__text-error`}>{error}</p>
			)}
		</div>
	);
};
