import React from "react";
import { Box, Heading, Button, VStack, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../slice/counterSlice";

const Home = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Box p={6}>
      <Heading mb={4}>Home Page</Heading>
      <Text mb={4}>Counter value: {count}</Text>
      <VStack spacing={4} align="start">
        <Button colorScheme="teal" onClick={() => dispatch(increment())}>
          Increment
        </Button>
        <Button colorScheme="red" onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
      </VStack>
    </Box>
  );
};

export default Home;
