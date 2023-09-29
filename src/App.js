import Timeline from "./Components/Timeline/Timeline";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import "./app.css";
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";
import UserProfile from "./Components/UserProfile/UserProfile";
import Explore from "./Components/Explore/Explore";
import Message from "./Components/Message/Message";
import ChatComponent from "./Components/Message/ChatComponent/ChatComponent";
import EmptyChatComponent from "./Components/Message/EmptyChatComponent/EmptyChatComponent";
import FullPost from "./Components/Fullpost/FullPost";
import store from "./Store/store";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
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
                element: <Profile />,
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
]);

const App = () => {
    return (
        <Provider store={store}>
            <RouterProvider router={router}></RouterProvider>
        </Provider>
    );
};

export default App;
