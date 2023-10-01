const CreateTabs = ({ onTabChange, tabIsActive }) => {
	return (
		<section className="tab-switcher">
			<div
				className={tabIsActive("badge")}
				onClick={() => onTabChange("badge")}
			>
				<span>badge</span>
			</div>

			<div
				className={tabIsActive("medal")}
				onClick={() => onTabChange("medal")}
			>
				<span>medal</span>
			</div>
		</section>
	);
};

export default CreateTabs;
