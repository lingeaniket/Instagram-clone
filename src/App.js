import Timeline from "./Components/Timeline/Timeline";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.css";
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";
import UserProfile from "./Components/UserProfile/UserProfile";
import Explore from "./Components/Explore/Explore";

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
            },
            {
                path: '/p/:id',
                element: <UserProfile/>
            },
            {
                path : '/explore',
                element: <Explore/>
            }
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router}></RouterProvider>;
};

export default App;
