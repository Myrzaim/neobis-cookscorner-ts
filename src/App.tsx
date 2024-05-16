import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AuthorPage from "./pages/AuthorPage/AuthorPage";
import FoodDetail from "./pages/FoodDetailsPage/FoodDetail";
import GreetPage from "./pages/GreetPage/GreetPage";
import HomePage from "./pages/HomePage/HomePage";
import Profile from "./pages/Profile/Profile";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import SighinPage from "./pages/SigninPage/SighinPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <HomePage /> */}
      {/* <FoodDetail/> */}
      {/* <AuthorPage /> */}
      <SearchPage/>
      {/* <Profile/> */}
      {/* <Routes>
        <Route path="/" element={<GreetPage />} />
        <Route path="/signin" element={<SighinPage />} />
        <Route path="/signup" element={<RegistrationPage />} />
      </Routes> */}
    </div>
  );
}

export default App;
