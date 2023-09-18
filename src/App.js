import Timeline from "./Components/Timeline/Timeline";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.css";
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/",
                element: <Timeline />,
            },
            {
                path: '/profile',
                element: <Profile/>
            }
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router}></RouterProvider>;
};

export default App;
