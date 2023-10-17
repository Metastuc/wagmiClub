import React from "react";
import { Helmet } from "react-helmet";
import { useScrollReset, useTabSwitcher } from "../../hooks";
import { EditTabs as Tab } from "../../components";
import { FormField } from "../../views";
import "./index.scss";

/**
 * Edit component for editing user profile.
 * @returns {JSX.Element} Edit component JSX
 */
const Edit = () => {
	// Reset scroll position on component mount
	useScrollReset();

	// Custom hook for managing active tab and tab switcher functionality
	const { activeTab, handleTabClick, tabIsActive } =
		useTabSwitcher("personal");

	return (
		<section className="edit">
			{/* Set page title using Helmet */}
			<Helmet>
				<title>Edit Profile - WagmiClub</title>
			</Helmet>

			{/* Title bar for the edit profile section */}
			<div className="edit__title-bar">
				<span>edit profile</span>
				<span>profile component</span>
			</div>

			{/* Tab switcher component for switching between personal, details, and socials tabs */}
			<Tab
				initialTab={activeTab}
				onTabChange={handleTabClick}
				tabIsActive={tabIsActive}
			/>

			{/* Form field component based on the active tab */}
			<FormField activeTab={activeTab} />
		</section>
	);
};

export default Edit;
