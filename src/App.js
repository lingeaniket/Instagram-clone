import { lazy, useEffect } from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import io from "socket.io-client";

import store from "./Store/store";

import "./app.css";

const Message = lazy(() => import("./Components/Message/Message"));
const Explore = lazy(() => import("./Components/Explore/Explore"));
const Timeline = lazy(() => import("./Components/Timeline/Timeline"));
const UserProfile = lazy(() => import("./Components/UserProfile/UserProfile"));
const LandingPage = lazy(() => import("./Components/LandingPage/LandingPage"));
const ChatComponent = lazy(() => import("./Components/Message/ChatComponent/ChatComponent"));
const CurrentProfile = lazy(() => import("./Components/CurrentProfile/CurrentProfile"));
const ViewPostComponent = lazy(() => import("./Components/ViewPostComponent/ViewPostComponent"));
const EmptyChatComponent = lazy(() => import("./Components/Message/EmptyChatComponent/EmptyChatComponent"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        children: [
            {
                path: "/",
                element: <Timeline />,
                children: [
                    {
                        path: "/post",
                        element: <ViewPostComponent />,
                    },
                ],
            },
            {
                path: "/profile",
                element: <CurrentProfile />,
                children: [
                    {
                        path: "/profile/post",
                        element: <ViewPostComponent />,
                    },
                ],
            },
            {
                path: "/p/:id",
                element: <UserProfile />,
                children: [
                    {
                        path: "/p/:id/post",
                        element: <ViewPostComponent />,
                    },
                ],
            },
            {
                path: "/explore",
                element: <Explore />,
                children: [
                    {
                        path: "/explore/post",
                        element: <ViewPostComponent />,
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
                element: <ViewPostComponent />,
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
