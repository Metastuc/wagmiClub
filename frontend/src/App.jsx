import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Media from "react-media";

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
        <>
            <Media query={`(max-width:40em)`} >
                {
                    matches => {
                        return matches ?
                            <section className="container">
                                <RouterProvider router={router} />
                            </section>
                            :
                            <section className="query">
                                display none
                            </section>;
                    }
                }
            </Media>
        </>
    );
};

export default App;
