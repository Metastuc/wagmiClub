import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";

const FormField = ({
	formData,
	handleFormChange,
	setFieldValue,
	handleBlur,
	errors,
	touched,
}) => {
	const {
		title,
		description,
		receiver,
		startDate,
		endDate,
		working,
		validator,
		additionalInfo,
	} = formData;

	return (
		<>
			<div className="badge-title">
				<label
					htmlFor="title"
					className="badge-title__label"
				>
					Badge title
				</label>

				<div className="badge-title__wrapper">
					<input
						className="badge-title__input input"
						type="text"
						id="title"
						value={title}
						onChange={handleFormChange}
						onBlur={handleBlur}
					/>
					{title == "" && (
						<span className="badge-title__edit">edit</span>
					)}
				</div>

				{errors.title && touched.title && (
					<p className="badge-title__error">{errors.title}</p>
				)}
			</div>

			<div className="badge-description">
				<label
					htmlFor="description"
					className="badge-description__label"
				>
					Badge description
				</label>

				<div className="badge-description__wrapper">
					<textarea
						className="badge-description__input textarea"
						id="description"
						value={description}
						onChange={handleFormChange}
						onBlur={handleBlur}
					></textarea>
					{description == "" && (
						<span className="badge-title__edit">edit</span>
					)}
				</div>

				{errors.description && touched.description && (
					<p className="badge-description__error">
						{errors.description}
					</p>
				)}
			</div>

			<div className="badge-receiver">
				<label
					htmlFor="receiver"
					className="badge-receiver__label"
				>
					Receivers wallet address
				</label>

				<div className="badge-receiver__wrapper">
					<input
						className="badge-receiver__input input"
						type="text"
						placeholder="0x636h821nb"
						id="receiver"
						value={receiver}
						onChange={handleFormChange}
						onBlur={handleBlur}
					/>
					{receiver == "" && (
						<span className="badge-title__edit">edit</span>
					)}
				</div>

				{errors.receiver && touched.receiver && (
					<p className="badge-receiver__error">{errors.receiver}</p>
				)}
			</div>

			<div className="badge-timestamp">
				<label
					htmlFor="timestamp"
					className="badge-timestamp__label"
				>
					Time stamp
				</label>
				<div className="badge-timestamp__wrapper">
					<article className="badge-timestamp__date">
						<span className="badge-timestamp__date-title">
							start
						</span>
						<div className="badge-timestamp__date-wrapper">
							<DatePicker
								selected={startDate}
								onChange={(date) => {
									handleFormChange("startDate", date);
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

					<article className="badge-timestamp__date">
						<span className="badge-timestamp__date-title">end</span>
						<div className="badge-timestamp__date-wrapper">
							<DatePicker
								selected={endDate}
								onChange={(date) => {
									handleFormChange("endDate", date);
									setFieldValue("endDate", date);
								}}
								selectsEnd
								startDate={startDate}
								endDate={endDate}
								dateFormat={"EEEE, MMMM d, yyyy"}
								placeholderText={
									working ? "Still working" : "Select a Date"
								}
								showYearDropdown
								scrollableYearDropdown
								dropdownMode="select"
								onBlur={handleBlur}
							/>
						</div>
					</article>

					<div className="badge-timestamp__working">
						<label
							htmlFor="working"
							className="badge-timestamp__working-label"
						>
							Still working
						</label>

						<input
							className="badge-timestamp__working-input"
							type="checkbox"
							id="working"
							checked={working}
							onChange={handleFormChange}
							onBlur={handleBlur}
						/>

						<div
							className="badge-timestamp__working-toggle"
							onClick={() => {
								document.querySelector("#working").click();
							}}
						></div>
					</div>
				</div>
				{errors.startDate && touched.startDate && (
					<p className="badge-timestamp__error">{errors.startDate}</p>
				)}
				{errors.endDate && touched.endDate && (
					<p className="badge-timestamp__error">{errors.endDate}</p>
				)}
			</div>

			<div className="badge-validator">
				<label
					htmlFor="validator"
					className="badge-validator__label"
				>
					Badge validator's name & position in organisation
				</label>
				<div className="badge-validator__wrapper">
					<input
						className="badge-validator__input input"
						type="text"
						placeholder="JeheeCTO"
						value={validator}
						id="validator"
						onChange={handleFormChange}
						onBlur={handleBlur}
					/>

					{validator == "" && (
						<span className="badge-title__edit">edit</span>
					)}
				</div>
				{errors.validator && touched.validator && (
					<p className="badge-validator__error">{errors.validator}</p>
				)}{" "}
			</div>

			<div className="badge-information">
				<label
					htmlFor="information"
					className="badge-information__label"
				>
					Additional information
				</label>

				<div className="badge-information__wrapper">
					<textarea
						className="badge-information__input textarea"
						id="additionalInfo"
						value={additionalInfo}
						onChange={handleFormChange}
						onBlur={handleBlur}
					></textarea>

					{additionalInfo == "" && (
						<span className="badge-title__edit">edit</span>
					)}
				</div>
			</div>
		</>
	);
};

export default FormField;
