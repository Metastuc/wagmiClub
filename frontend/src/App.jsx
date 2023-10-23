import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Create, Edit, Landing } from "./routes";

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
