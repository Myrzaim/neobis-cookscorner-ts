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
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="/detail" element={<FoodDetail />} />
          <Route path="/author" element={<AuthorPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
      {/* <FoodDetail/> */}
      {/* <AuthorPage /> */}
      {/* <SearchPage /> */}
      {/* <Profile /> */}
      {/* <Routes>
        <Route path="/" element={<GreetPage />} />
        <Route path="/signin" element={<SighinPage />} />
        <Route path="/signup" element={<RegistrationPage />} />
      </Routes> */}
    </div>
  );
}

export default App;
