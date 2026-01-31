import React from "react";
import { Box, Flex, HStack, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={6} py={4} color="white">
      <Flex align="center" justify="space-between">
        <Text fontSize="xl" fontWeight="bold">
          BookStore
        </Text>

        <HStack spacing={8}>
          {/* <Text as={Link} to="/" cursor="pointer" _hover={{ color: "teal.200" }}>
            Home
          </Text> */}
        </HStack>

        {/* <Button colorScheme="teal" variant="outline">
          Logout
        </Button> */}
      </Flex>
    </Box>
  );
};

export default Navbar;
