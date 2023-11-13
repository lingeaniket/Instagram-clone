import { useEffect } from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import io from "socket.io-client";

import Explore from "./Components/Explore/Explore";
import Message from "./Components/Message/Message";
import FullPost from "./Components/Fullpost/FullPost";
import Timeline from "./Components/Timeline/Timeline";
import LandingPage from "./Components/LandingPage/LandingPage";
import UserProfile from "./Components/UserProfile/UserProfile";
import ChatComponent from "./Components/Message/ChatComponent/ChatComponent";
import CurrentProfile from "./Components/CurrentProfile/CurrentProfile";
import EmptyChatComponent from "./Components/Message/EmptyChatComponent/EmptyChatComponent";

import store from "./Store/store";

import "./app.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        children: [
            // {
            //     path: "/",
            //     element: <LoadingPage/>
            // },
            {
                path: "/",
                element: <Timeline />,
                children: [
                    {
                        path: "/post",
                        element: <FullPost />,
                    },
                ],
            },
            {
                path: "/profile",
                element: <CurrentProfile />,
                children: [
                    {
                        path: "/profile/post",
                        element: <FullPost />,
                    },
                ],
            },
            {
                path: "/p/:id",
                element: <UserProfile />,
                children: [
                    {
                        path: "/p/:id/post",
                        element: <FullPost />,
                    },
                ],
            },
            {
                path: "/explore",
                element: <Explore />,
                children: [
                    {
                        path: "/explore/post",
                        element: <FullPost />,
                    },
                ],
            },
            {
                path: "/direct",
                element: <Message />,
                children: [
                    {
                        path: "/direct",
                        element: <EmptyChatComponent />,
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
                children: [
                    {
                        path: "/direct/inbox",
                        element: <EmptyChatComponent />,
                    },
                ],
            },
            {
                path: "/direct/t",
                element: <Message />,
                children: [
                    {
                        path: "/direct/t",
                        element: <EmptyChatComponent />,
                    },
                ],
            },
            {
                path: "/post",
                element: <FullPost />,
            },
        ],
    },
    {
        path: "/login",
    },
]);

export const socket = io("http://localhost:4000");
// export const socket = io("https://instagram-api-aniket.onrender.com/");

const App = () => {
    useEffect(() => {
        socket.emit("join", 12569);
    }, []);

    return (
        <Provider store={store}>
            <RouterProvider router={router}></RouterProvider>
        </Provider>
    );
};

export default App;
