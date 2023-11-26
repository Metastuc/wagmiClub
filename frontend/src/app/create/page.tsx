"use client";

import { useBodyOverflow, useTabSwitcher, useScrollReset } from "@/hooks";
import "./page.scss";

const Create = () => {
	useScrollReset();
	useBodyOverflow();

	const { activeTab, handleTabClick, tabIsActive } = useTabSwitcher("badge");

	return <div>Create</div>;
};

export default Create;
