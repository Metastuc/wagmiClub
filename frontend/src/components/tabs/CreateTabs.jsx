const CreateTabs = ({ onTabChange, tabIsActive }) => {
	return (
		<section className="tab-switch">
			<div className="tab-switch__wrapper">
				<button
					className={`${tabIsActive("badge")} tab-switch__button`}
					onClick={() => onTabChange("badge")}
				>
					<span>badge</span>
				</button>

				<button
					className={`${tabIsActive("medal")} tab-switch__button`}
					onClick={() => onTabChange("medal")}
				>
					<span>medal</span>
				</button>

				<div className={`${tabIsActive("badge")} tab-switch__bg`}></div>
			</div>
		</section>
	);
};

export default CreateTabs;
