import React from "react"

// Include bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/home'
import Login from './pages/login'
import Profile from './pages/profile'
import Register from './pages/register'
import Upload from "./pages/upload";

// UI
import Navigation from "./components/navigations";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="upload" element={<Upload />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
