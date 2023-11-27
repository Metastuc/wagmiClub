"use client";

import {
	ChangeEvent,
	FC,
	FocusEvent,
	useEffect,
} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import "./index.scss";

interface props {
	group: string;
	working: boolean;
	startDate: Date;
	endDate: Date | null;
	errors: Record<string, string>;
	touched: Record<string, boolean>;
	handleBlur: (event: FocusEvent<any>) => void;
	handleFormChange: (event: ChangeEvent<any>) => void;
	setFieldValue: (
		field: string,
		value: any,
		shouldValidate?: boolean,
	) => void;
}

export const TimeStamp: FC<props> = ({
	group,
	working,
	startDate,
	endDate,
	handleBlur,
	handleFormChange,
	errors,
	setFieldValue,
	touched,
}) => {
	const today = new Date();

	useEffect(() => {
		working && setFieldValue("endDate", today);
	}, [working]);

	return (
		<div className={`${group}__timestamp`}>
			<label
				htmlFor="timestamp"
				className={`${group}__timestamp-label`}
			>
				Time stamp
			</label>
			<div className={`${group}__timestamp-wrapper`}>
				<article className={`${group}__timestamp-date`}>
					<span className={`${group}__timestamp-date_title`}>
						start
					</span>
					<div className={`${group}__timestamp-date_wrapper`}>
						<DatePicker
							selected={startDate}
							onChange={(date) => {
								const syntheticEvent = {
									target: {
										name: "startDate",
										value: date,
									},
								} as ChangeEvent<any>;
								handleFormChange(syntheticEvent);
								setFieldValue("startDate", date);
							}}
							selectsStart
							startDate={startDate}
							endDate={endDate}
							dateFormat={"EEEE, MMMM d, yyyy"}
							placeholderText="Select a Date"
							showYearDropdown
							scrollableYearDropdown
							dropdownMode="select"
							onBlur={handleBlur}
						/>
					</div>
				</article>

				<article className={`${group}__timestamp-date`}>
					<span className={`${group}__timestamp-date_title`}>
						end
					</span>
					<div className={`${group}__timestamp-date_wrapper`}>
						<DatePicker
							selected={working ? today : endDate}
							onChange={(date) => {
								const syntheticEvent = {
									target: {
										name: "endDate",
										value: date,
									},
								} as ChangeEvent<any>;
								handleFormChange(syntheticEvent);
								setFieldValue("endDate", date || today);
							}}
							selectsEnd
							startDate={startDate}
							endDate={working ? today : endDate}
							dateFormat={"EEEE, MMMM d, yyyy"}
							placeholderText={
								working ? "Still working" : "Select a Date"
							}
							showYearDropdown
							scrollableYearDropdown
							dropdownMode="select"
							onBlur={handleBlur}
							readOnly={working}
							value={
								working
									? "Still working"
									: endDate
									? endDate.toLocaleDateString(undefined, {
											weekday: "long",
											year: "numeric",
											month: "long",
											day: "numeric",
									  })
									: ""
							}
						/>
					</div>
				</article>

				<div className={`${group}__timestamp-working`}>
					<label
						htmlFor="working"
						className={`${group}__timestamp-working_label`}
					>
						Still working
					</label>

					<input
						className={`${group}__timestamp-working_input`}
						type="checkbox"
						id="working"
						checked={working}
						onChange={handleFormChange}
						onBlur={handleBlur}
					/>

					<div
						className={`${group}__timestamp-working_toggle`}
						onClick={() => {
							document
								.querySelector<HTMLInputElement>("#working")
								?.click();
						}}
					></div>
				</div>
			</div>
			{errors.startDate && touched.startDate && (
				<p className={`${group}__timestamp-error`}>
					{errors.startDate}
				</p>
			)}
			{errors.endDate && touched.endDate && (
				<p className={`${group}__timestamp-error`}>{errors.endDate}</p>
			)}
		</div>
	);
};
