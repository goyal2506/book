import React from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  Link,
  VStack,
  Divider,
  Icon,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./redux/loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    dispatch(loginUser({email : data.email ,password: data.password}));
  };

  return (
    <Flex minH="100vh">
      {/* Left Image Section */}
      <Box
        flex="1"
        bgImage="url('https://images.unsplash.com/photo-1507842217343-583bb7270b66')"
        bgSize="cover"
        bgPosition="center"
        position="relative"
        display={{ base: "none", md: "block" }}
      >
        <Box position="absolute" inset="0" bg="rgba(0,0,0,0.45)" color="white" p="12">
          <Text mt="6" maxW="sm" fontSize="sm" opacity={0.9}>
            Join a global community of collectors and bibliophiles. Buy, sell, and discover rare editions from centuries past.
          </Text>
        </Box>
      </Box>

      {/* Right Form Section */}
      <Flex flex="1" align="center" justify="center" bg="#FAFAF7" px="6">
        <Box w="full" maxW="md">
          <Text fontSize="2xl" fontWeight="bold">
            Welcome Back
          </Text>
          <Text color="green.500" fontSize="sm" mb="6">
            Continue your journey through the shelves.
          </Text>

          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing="4" align="stretch">
              {/* Email Input */}
              <Input
                placeholder="Email Address"
                bg="white"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <Text color="red.500" fontSize="sm">
                  {errors.email.message}
                </Text>
              )}

              {/* Password Input */}
              <Box position="relative">
                <Input
                  placeholder="Password"
                  type="password"
                  bg="white"
                  {...register("password", { required: "Password is required" })}
                />
                <Icon
                  as={ViewIcon}
                  position="absolute"
                  right="3"
                  top="50%"
                  transform="translateY(-50%)"
                  color="gray.400"
                />
              </Box>
              {errors.password && (
                <Text color="red.500" fontSize="sm">
                  {errors.password.message}
                </Text>
              )}

              <Link fontSize="sm" color="green.500">
                Forgot password?
              </Link>

              {/* Submit Button */}
              <Button
                colorScheme="green"
                size="lg"
                fontWeight="bold"
                type="submit"
                isLoading={loading}
                isDisabled={!isValid || loading}
              >
                Enter the Library
              </Button>

              {error && (
                <Text color="red.500" fontSize="sm" textAlign="center">
                  {error}
                </Text>
              )}

              <Divider />

              <Text fontSize="sm" textAlign="center">
                Don’t have an account?{" "}
                <Link color="green.500" fontWeight="bold">
                  Sign up for free
                </Link>
              </Text>
            </VStack>
          </form>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Login;
