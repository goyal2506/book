import { Button, VStack } from "@chakra-ui/react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/"
        element={
          <VStack spacing={4} mt={10}>
            <Button colorScheme="blue" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button colorScheme="green" onClick={() => navigate("/signup")}>
              Sign Up
            </Button>
          </VStack>
        }
      />
    </Routes>
  );
}

export default App;
