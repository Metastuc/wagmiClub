import { Helmet } from "react-helmet";
import { useBodyOverflow, useTabSwitcher } from "../../hooks";
import { Badge, CreateTabs as Tab } from "../../components";
import { SecondaryNavbar as Navbar, Medal } from "../../views";
import "./index.scss";

const Create = () => {
	useBodyOverflow();

	const { activeTab, handleTabClick, tabIsActive } = useTabSwitcher("badge"),
		tabComponents = {
			badge: <Badge group={"badge"} />,
			medal: <Medal group={"medal"} />,
		};

	function renderTab() {
		return tabComponents[activeTab] || null;
	}

	return (
		<section className="create">
			<Helmet>
				<title>Claim Profile - WagmiClub</title>
			</Helmet>

			<Navbar />

			<div className="create-wrapper">
				<Tab
					initialTab={activeTab}
					onTabChange={handleTabClick}
					tabIsActive={tabIsActive}
				/>
				<section className="tab-display">{renderTab()}</section>
			</div>
		</section>
	);
};

export default Create;
