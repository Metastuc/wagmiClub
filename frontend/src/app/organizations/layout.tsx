import { ReactNode } from "react";
import { SecondaryNav } from "@/components";
import "@/styles/main.scss";

export const metadata = {
	title: "Next.js",
	// description: 'Generated by Next.js',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className="container">
				<SecondaryNav />
				<section>{children}</section>
			</body>
		</html>
	);
}
