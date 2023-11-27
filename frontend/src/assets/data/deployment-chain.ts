import { BNB, Sepolia } from "@/assets/icons";

export const DEPLOYMENT_CHAINS = [
	{
		id: 0,
		value: {
			image: "luksoIcon.png",
			title: "Lukso",
			utility: "Lukso",
			bgColor: "",
		},
	},
	{
		id: 1,
		value: {
			icon: Sepolia,
			title: "Eth Sepolia",
			utility: "Eth Sepolia",
			bgColor: "#DCE6F1",
		},
	},
	{
		id: 2,
		value: {
			image: "polygon.jpg",
			title: "Polygon Mumbai",
			utility: "Polygon Mumbai",
			bgColor: "",
		},
	},
	{
		id: 3,
		value: {
			icon: BNB,
			utility: "BSC Testnet",
			title: "BSC Testnet",
			bgColor: "#F3DB00",
		},
	},
];
