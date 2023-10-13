import { Helmet } from "react-helmet";
import { useScrollReset, useTabSwitcher } from "../../hooks";
import { FormField } from "../../views";
import { EditTabs as Tab, Details, Socials } from "../../components";
import "./index.scss";

const Edit = () => {
	useScrollReset();
	const { activeTab, handleTabClick, tabIsActive } =
		useTabSwitcher("personal");

	return (
		<section className="edit">
			<Helmet>
				<title>Edit Profile - WagmiClub</title>
			</Helmet>

			<div className="edit__title-bar">
				<span>edit profile</span>

				<span>profile component</span>
			</div>

			<Tab
				initialTab={activeTab}
				onTabChange={handleTabClick}
				tabIsActive={tabIsActive}
			/>

			{/* form field */}
			<FormField activeTab={activeTab} />
		</section>
	);
};

export default Edit;
