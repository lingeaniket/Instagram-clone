import Timeline from "./Components/Timeline/Timeline";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.css";
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";
import UserProfile from "./Components/UserProfile/UserProfile";
import Explore from "./Components/Explore/Explore";
import Message from "./Components/Message/Message";
import ChatComponent from "./Components/Message/ChatComponent/ChatComponent";
import EmptyChatComponent from "./Components/Message/EmptyChatComponent/EmptyChatComponent";

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
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/p/:id",
                element: <UserProfile />,
            },
            {
                path: "/explore",
                element: <Explore />,
            },
            {
                path: "/direct",
                element: <Message />,
                children: [
                    {
                        path: "/direct",
                        element: <EmptyChatComponent/>
                    },
                    {
                        path: "/direct/t/:id",
                        element: <ChatComponent />,
                    },
                ],
            },
            {
                path: "/direct/inbox",
                element: <Message />,
                children: [{
                    path: "/direct/inbox",
                    element: <EmptyChatComponent/>
                }]
                
            },
            {
                path: "/direct/t",
                element: <Message />,
                children: [{
                    path: "/direct/t",
                    element: <EmptyChatComponent/>
                }]
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router}></RouterProvider>;
};

export default App;
