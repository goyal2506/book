import { Button, VStack } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import HomePageLogin from "./Pages/HomePageLogin";
import ProtectedRoute from "./Pages/ProtectedRoute";

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomePageLogin />
          </ProtectedRoute>
        }
      />
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />
    </Routes>
  );
}

export default App;
