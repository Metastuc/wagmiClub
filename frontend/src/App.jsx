import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Create, Edit, Landing, Explore } from "./routes";

const router = createBrowserRouter([
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
	{
		path: "explore",
		element: <Explore />,
	},
]);

const App = () => {
	return (
		<>
			<section className="container">
				<RouterProvider router={router} />
			</section>
		</>
	);
};

export default App;
