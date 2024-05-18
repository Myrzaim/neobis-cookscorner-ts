import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import AuthorPage from '../pages/AuthorPage/AuthorPage';
import FoodDetail from '../pages/FoodDetailsPage/FoodDetail';
import HomePage from '../pages/HomePage/HomePage';
import Profile from '../pages/Profile/Profile';
import SearchPage from '../pages/SearchPage/SearchPage';
import styles from './layout.module.scss';

const Layout = () => {
  return (
      <div className={styles.container}>
          <Navbar />
          <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/detail' element={<FoodDetail />} />
        <Route path='/author' element={<AuthorPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/profile' element={<Profile />} />
          </Routes>
    </div>
  )
}

export default Layout