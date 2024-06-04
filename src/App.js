import logo from './logo.svg';
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Your from './components/Your Experience/Your'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { auth } from './firebase';




function App() {
  const [userName, setUserName] =useState("")
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUserName(user.displayName);

      }
      else setUserName("");

    })})
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/us' element={<Your/>}/>
          <Route path="/" element={<Home name={userName } />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
