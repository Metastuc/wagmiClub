import { useState } from "react";
import { Helmet } from "react-helmet";
import { CreateNavUI } from "../../views";
import { Badge } from "../../components";
import "./index.scss";

const Create = () => {
	const [tab, setTab] = useState("badge"),
		tabComponents = {
			badge: <Badge />,
			// medal: <Medal />,
		};
	// Medal = function () {
	// 	return <section className="medal-tab-container"></section>;
	// };

	function renderTab() {
		return tabComponents[tab] || null;
	}

	function TabSwitcher({ activeTab, onTabChange }) {
		return (
			<section className="tab-switcher">
				<div
					className={activeTab === "badge" ? "active" : null}
					onClick={() => {
						onTabChange("badge");
					}}
				>
					<span>badge</span>
				</div>

				<div
					className={activeTab === "medal" ? "active" : null}
					onClick={() => {
						onTabChange("medal");
					}}
				>
					<span>medal</span>
				</div>
			</section>
		);
	}

	return (
		<section className="create">
			<Helmet>
				<title>Claim Profile - WagmiClub</title>
			</Helmet>

			<CreateNavUI />

			<div className="create-wrapper">
				<TabSwitcher
					activeTab={tab}
					onTabChange={setTab}
				/>

				<section className="tab-display">{renderTab()}</section>
			</div>
		</section>
	);
};

export default Create;