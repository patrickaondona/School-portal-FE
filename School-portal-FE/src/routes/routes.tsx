import { createBrowserRouter } from "react-router-dom"

import Layout from "./layout"
import ErrorPage from "../pages/ErrorPage"
import App from "../App"

const routes = createBrowserRouter(

    [
        {
            path: "/",
            element: <Layout />,
            errorElement: <ErrorPage />,
            children: [
               // Add your routes here
                { index: true, element: <App /> },
            ]
        },
    ]
)

export default routes