export type tabProps = {
	group: string;
	tabIsActive: (tab: string) => string | null;
	onTabChange: (tab: string) => void;
};
export * from "./reputation";
export * from "./marketplace";
export * from "./create";
