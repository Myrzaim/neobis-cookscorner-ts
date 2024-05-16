import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import FoodDetail from "./pages/FoodDetailsPage/FoodDetail";
import GreetPage from "./pages/GreetPage/GreetPage";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import SighinPage from "./pages/SigninPage/SighinPage";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <HomePage /> */}
      <FoodDetail/>
      {/* <Routes>
        <Route path="/" element={<GreetPage />} />
        <Route path="/signin" element={<SighinPage />} />
        <Route path="/signup" element={<RegistrationPage />} />
      </Routes> */}
    </div>
  );
}

export default App;
