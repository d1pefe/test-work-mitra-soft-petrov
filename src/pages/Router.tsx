import React from "react";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import PagesContainer from "./PagesContainer";
import Main from "./Main";
import EmptyState from "../components/EmptyState";
import User from "./User";
import About from "./About";



export enum RoutesList {
    Main = "/",
    User = "user",
    About = "about",
    Default = "*",
}

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path={RoutesList.Main} element={<PagesContainer/>}>
                <Route path={RoutesList.Main} element={<Main/>}/>
                <Route path={RoutesList.User} element={<User/>}/>
                <Route path={RoutesList.About} element={<About/>}/>
                <Route path={RoutesList.Default} element={<EmptyState/>} />
            </Route>
        </Routes>
    </BrowserRouter>;
};

export default Router;