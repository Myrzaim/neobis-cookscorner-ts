import React from 'react';
import './App.css';
import GreetPage from './pages/GreetPage/GreetPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import SighinPage from './pages/SigninPage/SighinPage';

function App() {
  return (
    <div className="App">
      {/* <GreetPage /> */}
      {/* <SighinPage /> */}
      <RegistrationPage />
    </div>
  );
}

export default App;
