"use client";

import { ReactNode } from "react";
import { useBodyOverflow, useTabSwitcher, useScrollReset } from "@/hooks";
import { CreateTabs, SecondaryNav } from "@/components";
import { Badge, Medal } from "@/views";
import "./page.scss";

interface TabComponents {
	[key: string]: ReactNode;
}

const Create = () => {
	useScrollReset();
	useBodyOverflow();

	const { activeTab, handleTabClick, tabIsActive } = useTabSwitcher("badge");

	const tabComponents: TabComponents = {
		badge: <Badge group={"badge"} />,
		medal: <Medal group={"medal"} />,
	};

	function renderTab() {
		return tabComponents[activeTab] || null;
	}

	return (
		<section className="create">
			{/* Wrapper for the Create section */}
			<div className="create__wrapper">
				{/* Tabs for switching between badge and medal creation */}
				<CreateTabs
					onTabChange={handleTabClick}
					tabIsActive={tabIsActive}
					group="create"
				/>
				{/* Container for displaying the content of the active tab */}
				<section className="create__tabs-display">
					{renderTab()}
				</section>
			</div>
		</section>
	);
};

export default Create;
