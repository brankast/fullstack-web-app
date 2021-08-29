import Home from "../pages/Home";
import About from "../pages/About"

const routes = [
    {
        path: "",
        component: Home,
        name: "home"
    },
    {
        path: "/about",
        component: About,
        name: "about"
    }
];

export default routes;
