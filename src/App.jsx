import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const

    router = createBrowserRouter([]);



const App = () => {
    return (
        <section className="container">
            <RouterProvider router={router} />
        </section>
    );
};

export default App;
