import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/Home';
import SignInSide from './pages/signIn';
import SignUp from './pages/signUp';
import 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInSide />} />
        <Route path="/SignUp" element={<SignUp />} />        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    </JobForm>
  );
}

export default App;
//////
