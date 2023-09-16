import Timeline from "./Components/Timeline/Timeline";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.css";
import Home from "./Components/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/",
                element: <Timeline />,
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router}></RouterProvider>;
};

export default App;
