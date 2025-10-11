import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Portfolio from "../Pages/Portfolio";
import HomePage from "../Pages/HomePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <HomePage /> },
            { path: "portfolio", element: <Portfolio /> }
        ]
    }
])