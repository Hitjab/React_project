import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/auth/login/LoginPage";
import RegisterPage from "./components/auth/register/RegisterPage";
import { Route, Routes } from "react-router-dom";
import DefaultHeader from "./components/containers/default/DefaultHeader";
import DefaultLayout from "./components/containers/default/DefaultLayout";

const App = () => {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<DefaultLayout/>}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage/>} />
            <Route path="register" element={<RegisterPage/>} />
          </Route>
        </Routes>

        {/* <HomePage />
        <LoginPage /> */}
        {/* <RegisterPage /> */}
    </>
  );
};

export default App;