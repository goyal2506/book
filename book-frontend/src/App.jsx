import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import HomePageLogin from "./Pages/HomePageLogin";
import ProtectedRoute from "./Pages/ProtectedRoute";
import CollectionsPage from "./Pages/Collection";
import SchoolGradeCollections from "./Pages/SchoolCollection";

function App() {

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        const city = data.city;
        if (city) {
          localStorage.setItem("city", city);
        }
      })
      .catch((err) => {
        console.error("Error fetching city:", err);
      });
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/collection" element={<ProtectedRoute><CollectionsPage /></ProtectedRoute>} />
      <Route path="/collection/school" element={<ProtectedRoute><SchoolGradeCollections /></ProtectedRoute>} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomePageLogin />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
