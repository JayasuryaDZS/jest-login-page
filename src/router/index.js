import React from "react";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";

const publicRoutes = [
    { path: "/", component: <Login />},
    { path: "/dashboard", component: <Dashboard /> }
];

export { publicRoutes }