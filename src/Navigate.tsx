import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Components/Home/home";


export default function Navigate() {
    return (
        <Routes>
            <Route path="/" element={< Home/>} />
        </Routes>
    )
}