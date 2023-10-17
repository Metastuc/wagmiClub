import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Media from "react-media";

import { Create, Edit, Landing } from "./routes";
import { useScrollReset } from "./hooks";

const // UI_CreateNavigationBar = () => {
	//     return (
	//         <>
	//             {/* <Scroll /> */}
	//             <CreateNavUI />
	//             <Outlet />
	//         </>
	//     );
	// },

	router = createBrowserRouter([
		{
			path: "/",
			element: <Landing />,
		},
		{
			path: "create",
			element: <Create />,
		},
		{
			path: "edit",
			element: <Edit />,
		},
	]);

const App = () => {
	return (
		<>
			<Media query={`(max-width:40em)`}>
				{(matches) => {
					return matches ? (
						<section className="container">
							<RouterProvider router={router} />
						</section>
					) : (
						<section className="query">display none</section>
					);
				}}
			</Media>
		</>
	);
};

export default App;
