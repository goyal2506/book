import { Button, Heading, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./slice/counterSlice";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Pages/Login";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <VStack spacing={4} mt={10}>
            <Heading>Counter: {count}</Heading>

            <Button colorScheme="green" onClick={() => dispatch(increment())}>
              Increment
            </Button>

            <Button colorScheme="red" onClick={() => dispatch(decrement())}>
              Decrement
            </Button>

            <Button
              colorScheme="blue"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </VStack>
        }
      />
    </Routes>
  );
}


export default App;
