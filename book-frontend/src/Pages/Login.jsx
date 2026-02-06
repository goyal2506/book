import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  VStack,
  Divider,
  Icon,
  Link,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./redux/loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.login);
  
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => setShowPassword(!showPassword);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    try {
      const resultAction = await dispatch(
        loginUser({ email: data.email, password: data.password })
      );
      if (loginUser.fulfilled.match(resultAction)) {
        navigate("/home");
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };


  return (
    <Flex minH="100vh" fontFamily="'Merriweather', serif" bg="#FDFBF7">
      {/* Left Side: Thematic Image & Slogan */}
      <Box
        flex="1"
        bgImage="url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1350&q=80')"
        bgSize="cover"
        bgPosition="center"
        position="relative"
        display={{ base: "none", md: "block" }}
      >
        <Box
          position="absolute"
          inset="0"
          bgGradient="linear(to-b, rgba(26, 32, 44, 0.85), rgba(45, 55, 72, 0.4))"
          color="white"
          p="12"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          textAlign="center"
        >
          <Text
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="extrabold"
            lineHeight="1.1"
            bgGradient="linear(to-r, #F5E6CA, #D4AF37, #E1C16E)"
            bgClip="text"
            animation="bounce 2s infinite"
            letterSpacing="tight"
          >
            Give Books One More Chapter
          </Text>
          <Text
            fontSize={{ base: "md", md: "xl" }}
            maxW="lg"
            mx="auto"
            mt="6"
            opacity={0.9}
            letterSpacing="wide"
            fontStyle="italic"
            borderTop="1px solid rgba(212, 175, 55, 0.4)"
            pt="4"
          >
            Rediscover rare treasures, explore timeless classics, and give every old book a second chapter in your home.
          </Text>
        </Box>
      </Box>

      {/* Right Side: Login Form */}
      <Flex flex="1" align="center" justify="center" px="6">
        <Box
          w="full"
          maxW="md"
          py="12"
          bg="white"
          borderRadius="2xl"
          boxShadow="2xl"
          p="8"
          border="1px solid rgba(139, 69, 19, 0.1)"
          animation="slideIn 1s ease-out"
        >
          <Text
            fontSize="4xl"
            fontWeight="extrabold"
            mb="2"
            color="#5D4037" // Deep brown for a bookish feel
          >
            Welcome Back
          </Text>
          <Text
            color="gray.500"
            fontSize="md"
            mb="8"
          >
            Sign in to access your personal library.
          </Text>

          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing="5" align="stretch">
              <Box>
                <Input
                  placeholder="Email Address"
                  variant="filled"
                  bg="gray.50"
                  _focus={{ bg: "white", borderColor: "#D4AF37" }}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <Text color="red.500" fontSize="xs" mt="1">
                    {errors.email.message}
                  </Text>
                )}
              </Box>

              <Box>
                <InputGroup>
                  <Input
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    variant="filled"
                    bg="gray.50"
                    _focus={{ bg: "white", borderColor: "#D4AF37" }}
                    {...register("password", { required: "Password is required" })}
                  />
                  <InputRightElement h="full">
                    <Button
                      variant="ghost"
                      onClick={handleTogglePassword}
                      _hover={{ bg: "transparent" }}
                    >
                      <Icon as={showPassword ? ViewOffIcon : ViewIcon} color="gray.400" />
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {errors.password && (
                  <Text color="red.500" fontSize="xs" mt="1">
                    {errors.password.message}
                  </Text>
                )}
              </Box>

              <Link
                fontSize="sm"
                color="#8B4513"
                _hover={{ color: "#D4AF37" }}
                textAlign="right"
                display="block"
              >
                Forgot password?
              </Link>

              <Button
                bg="#5D4037"
                color="white"
                size="lg"
                fontWeight="bold"
                type="submit"
                isLoading={loading}
                isDisabled={!isValid || loading}
                _hover={{ bg: "#3E2723" }}
                borderRadius="lg"
                boxShadow="md"
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
                <Link
                  color="#8B4513"
                  fontWeight="bold"
                  onClick={() => navigate("/signup")}
                  _hover={{ textDecoration: "underline" }}
                >
                  Sign up for free
                </Link>
              </Text>
            </VStack>
          </form>
        </Box>
      </Flex>

      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          @keyframes slideIn {
            0% { transform: translateY(20px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
    </Flex>
  );
};

export default Login;