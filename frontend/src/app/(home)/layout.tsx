import { ReactNode } from "react";
import "@/styles/main.scss";

export const metadata = {
	title: "WagmiClub",
	description: "The club with the Magic Badge",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={`container`}>
				<section>{children}</section>
			</body>
		</html>
	);
}
