import React, { useEffect, useState } from "react";
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
  RadioGroup,
  Radio,
  Stack,
  Checkbox,
  CheckboxGroup,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetSignupState, signupUser } from "./redux/signupSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading } = useSelector((state) => state.signup);

  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => setShowPassword(!showPassword);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    dispatch(signupUser(data));
  };

  useEffect(() => {
    if (user) {
      navigate("/login");
      dispatch(resetSignupState());
    }
  }, [user, navigate, dispatch]);

  return (
    <Flex minH="100vh" fontFamily="'Merriweather', serif" bg="#FDFBF7">
      
      {/* LEFT SIDE: Form (Moved to Left) */}
      <Flex flex="1" align="center" justify="center" px="6" py={10}>
        <Box
          w="full"
          maxW="md"
          bg="white"
          borderRadius="2xl"
          boxShadow="2xl"
          p="8"
          border="1px solid rgba(0,0,0,0.05)"
          animation="slideInLeft 1s ease-out"
        >
          <Text fontSize="4xl" fontWeight="extrabold" mb="2" color="#2D3748">
            Create Account
          </Text>
          <Text color="#718096" fontSize="md" mb="6">
            Join the sanctuary of book lovers.
          </Text>

          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing="4" align="stretch">
              <Box>
                <Input
                  placeholder="Full Name"
                  bg="gray.50"
                  borderRadius="lg"
                  _focus={{ borderColor: "#D4AF37", boxShadow: "0 0 0 1px #D4AF37" }}
                  {...register("username", { required: "Full Name is required" })}
                />
                {errors.username && <Text color="red.500" fontSize="xs" mt="1">{errors.username.message}</Text>}
              </Box>

              <Box>
                <Input
                  placeholder="Email Address"
                  bg="gray.50"
                  borderRadius="lg"
                  _focus={{ borderColor: "#D4AF37", boxShadow: "0 0 0 1px #D4AF37" }}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && <Text color="red.500" fontSize="xs" mt="1">{errors.email.message}</Text>}
              </Box>

              <Box>
                <InputGroup>
                  <Input
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    bg="gray.50"
                    borderRadius="lg"
                    _focus={{ borderColor: "#D4AF37", boxShadow: "0 0 0 1px #D4AF37" }}
                    {...register("password", {
                      required: "Password is required",
                      minLength: { value: 6, message: "At least 6 characters" },
                    })}
                  />
                  <InputRightElement h="full">
                    <Button variant="ghost" onClick={handleTogglePassword} _hover={{ bg: "transparent" }}>
                      <Icon as={showPassword ? ViewOffIcon : ViewIcon} color="gray.500" />
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {errors.password && <Text color="red.500" fontSize="xs" mt="1">{errors.password.message}</Text>}
              </Box>

              <Box>
                <Input
                  placeholder="Phone Number"
                  bg="gray.50"
                  borderRadius="lg"
                  _focus={{ borderColor: "#D4AF37", boxShadow: "0 0 0 1px #D4AF37" }}
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: { value: /^[0-9]{10,15}$/, message: "Invalid phone number" },
                  })}
                />
                {errors.phone && <Text color="red.500" fontSize="xs" mt="1">{errors.phone.message}</Text>}
              </Box>

              <Flex justify="space-between">
                <Box>
                  <Text fontSize="xs" fontWeight="bold" mb="1" color="gray.600">GENDER</Text>
                  <RadioGroup colorScheme="yellow">
                    <Stack direction="row" spacing={4}>
                      <Radio value="male" {...register("gender", { required: "Required" })}>Male</Radio>
                      <Radio value="female" {...register("gender", { required: "Required" })}>Female</Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
                <Box>
                  <Text fontSize="xs" fontWeight="bold" mb="1" color="gray.600">ROLE</Text>
                  <Controller
                    control={control}
                    name="role"
                    rules={{ validate: (val) => val?.length > 0 || "Required" }}
                    render={({ field }) => (
                      <CheckboxGroup {...field} colorScheme="yellow">
                        <Stack direction="row" spacing={4}>
                          <Checkbox value="buyer">Buyer</Checkbox>
                          <Checkbox value="seller">Seller</Checkbox>
                        </Stack>
                      </CheckboxGroup>
                    )}
                  />
                </Box>
              </Flex>

              <Button
                bg="#2D3748"
                color="white"
                size="lg"
                fontWeight="bold"
                type="submit"
                isLoading={loading}
                isDisabled={!isValid || loading}
                _hover={{ bg: "#1A202C" }}
                borderRadius="xl"
                boxShadow="lg"
              >
                Start Browsing
              </Button>

              <Divider />

              <Text fontSize="sm" textAlign="center">
                Already have an account?{" "}
                <Link color="#D4AF37" fontWeight="bold" onClick={() => navigate("/login")}>
                  Log in
                </Link>
              </Text>
            </VStack>
          </form>
        </Box>
      </Flex>

      {/* RIGHT SIDE: Visuals (Moved to Right) */}
      <Box
        flex="1"
        // NEW IMAGE: Antique books with glasses (Rare Book vibe)
        bgImage="url('https://images.unsplash.com/photo-1472173148041-00294f0814a2?auto=format&fit=crop&w=1350&q=80')"
        bgSize="cover"
        bgPosition="center"
        position="relative"
        display={{ base: "none", md: "block" }}
      >
        <Box
          position="absolute"
          inset="0"
          bgGradient="linear(to-b, rgba(0,0,0,0.7), rgba(0,0,0,0.3))"
          color="white"
          p="12"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          textAlign="center"
        >
          <Text
            fontSize={{ base: "3xl", md: "6xl" }}
            fontWeight="extrabold"
            lineHeight="1.1"
            bgGradient="linear(to-r, #F5E6CA, #D4AF37, #E1C16E)"
            bgClip="text"
            animation="bounce 2s infinite"
            filter="drop-shadow(0px 4px 4px rgba(0,0,0,0.5))"
          >
            Where History <br /> Finds a Home
          </Text>
          <Text
            fontSize={{ base: "md", md: "xl" }}
            maxW="lg"
            mx="auto"
            mt="6"
            opacity={0.9}
            letterSpacing="wider"
            fontStyle="italic"
            borderTop="1px solid rgba(212, 175, 55, 0.3)"
            pt="4"
          >
            Discover the charm of pre-loved classics. Turn the page to your next great adventure and let rare stories live on.
          </Text>
        </Box>
      </Box>

      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes slideInLeft {
            0% { transform: translateX(-50px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
        `}
      </style>
    </Flex>
  );
};

export default Signup;