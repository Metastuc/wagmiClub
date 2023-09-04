import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Landing } from "./routes";


const

    router = createBrowserRouter([
        {
            path: "/",
            element: <Landing />
        }
    ]);



const App = () => {
    return (
        <section className="container">
            <RouterProvider router={router} />
        </section>
    );
};

export default App;
