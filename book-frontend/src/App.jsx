import { Button, Heading, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./slice/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <VStack spacing={4} mt={10}>
      <Heading>Counter: {count}</Heading>

      <Button colorScheme="green" onClick={() => dispatch(increment())}>
        Increment
      </Button>

      <Button colorScheme="red" onClick={() => dispatch(decrement())}>
        Decrement
      </Button>
    </VStack>
  );
}

export default App;
