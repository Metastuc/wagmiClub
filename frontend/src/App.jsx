import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Media from "react-media";

import { Create, Landing } from "./routes";
import { CreateNavUI } from "./views";
import { Scroll } from "./hooks";


const

    UI_CreateNavigationBar = () => {
        return (
            <>
                {/* <Scroll /> */}
                <CreateNavUI />
                <Outlet />
            </>
        );
    },

    router = createBrowserRouter([
        {
            path: "/",
            element: <Landing />
        },

        // {
        //     path: "/",
        //     element: <UI_CreateNavigationBar />,
        //     children: [
        {
            path: "create",
            element: <Create />
        }
        //     ]
        // }
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
