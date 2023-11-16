import { createBrowserRouter } from "react-router-dom";
import { Home } from "./views/Home";
import { Login } from "./views/Login";
import { Register } from "./views/Register";
import { Detail } from "./views/Detail";
import { Products } from "./views/Asos";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/detail/:id',
        element: <Detail />
    },
    {
        path : '/xyz',
        element : <Products />
    }
])

export default router;