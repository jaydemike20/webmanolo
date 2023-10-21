import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import './App.css';
import Profiles from "./pages/profile.js";
import Home from "./pages/home.js";
import Search from "./pages/search.js";
import History from "./pages/history.js";
import ActivationPage from "./pages/activationpage.js";
import Login from "./login/index.js";
import ResetPage from './pages/resetPassword.js';
import { useSelector } from "react-redux";

function App() {

  const isAuthenticated = useSelector((state) => state.auth.setIsLoggedIn)

  // return (
  //   <div className="app">
  //     <Routes> 
  //       {/* Routes when authenticated */}
  //       {isAuthenticated && (
  //         <>
  //           <Route path="/home" element={<Home />} />
  //           <Route path="/search" element={<Search />} />
  //       <Route path="/history" element={<History />} />
  //       <Route path="/profile" element={<Profiles />} />
  //         </>
  //       )}

  //       {/* Routes when not authenticated */}
  //       {!isAuthenticated && (
  //         <>
  //           <Route path="/login" element={<Login />} />
  //           <Route path="/reset" element={<ResetPage />} />
  //           <Route path="/activation" element={<ActivationPage />} />

  //         </>
  //       )}

  //       {/* Default route when not matching any of the above */}
  //       <Route path="/" element={<Navigate to="/login" />} />
  //     </Routes>
  //   </div>
  // );  

  return (
    <div className="app">
      <Routes>
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" replace />} />
        <Route path="/history" element={isAuthenticated ? <History /> : <Navigate to="/" replace />} />
        <Route path="/search" element={isAuthenticated ? <Search /> : <Navigate to="/" replace />} />
        <Route path="/profile" element={isAuthenticated ? <Profiles /> : <Navigate to="/" replace />} />
        <Route path="/activation/:uid/:token" element={<ActivationPage />} />
        <Route path="/reset_password/:uid/:token" element={<ResetPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={isAuthenticated ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
}

export default App;
