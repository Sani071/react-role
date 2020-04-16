import React from 'react';
import './App.css';
import IndexLayout from './view/layout';
import LoginPage from './components/authintication/loginForm';
import { useSelector } from "react-redux";


function App() {
  const isAuth = useSelector(state => state.auth);
  return (
    <div className="App">
      { isAuth ? <IndexLayout/>: <LoginPage/> }
    </div>
  );
}

export default App;
