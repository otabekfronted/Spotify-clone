import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Likes from "./pages/Likes";
import Details from "./pages/Details";
// import { useEffect, useState } from "react";
// import http from "./axios";
import MainLayout from "./layouts/MainLayout";

function App() {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <MainLayout>
                            <Home></Home>
                        </MainLayout>
                    }
                ></Route>
                <Route
                    path="/likes"
                    element={
                        <MainLayout>
                            <Likes></Likes>
                        </MainLayout>
                    }
                ></Route>
                <Route
                    path="/details/:id"
                    element={
                        <MainLayout>
                            <Details></Details>
                        </MainLayout>
                    }
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
