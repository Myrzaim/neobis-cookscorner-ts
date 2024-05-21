import React, { useEffect } from "react";
import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import styles from "./layout.module.scss";
const ProtectedRoute = () => {
  const isAuth = true;
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/signin");
    }
  }, [isAuth, pathname]);
  return (
    <main className={styles.container}>
      <Navbar />
      <div className={styles.container__content}>
      <Outlet />
      </div>
      
    </main>
  );
};
export default ProtectedRoute;
