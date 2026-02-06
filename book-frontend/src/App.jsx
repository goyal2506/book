import { Button, VStack } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home/>
          </>
        }
      />
    </Routes>
  );
}

export default App;
