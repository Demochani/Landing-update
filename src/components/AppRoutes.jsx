import React from "react";
import {Routes, Route} from 'react-router-dom'
import Search from "./pages/Search";
import Posts from "./pages/Posts"


const AppRoutes = () => {
    return (
        <Routes>
            <Route path={''} element={<Posts/>} exact/>
            <Route path={'/search'} element={<Search/>} exact/>
        </Routes>
    );

}

export default AppRoutes;