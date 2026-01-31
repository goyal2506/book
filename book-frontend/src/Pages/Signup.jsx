import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  Link,
  VStack,
  Divider,
  RadioGroup,
  Radio,
  Stack,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetSignupState, signupUser } from "./redux/signupSlice";

const Signup = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, loading, error } = useSelector((state) => state.signup);

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
    <Flex minH="100vh" bg="#FAFAF7" align="center" justify="center" px="6">
      <Box w="full" maxW="md">
        <Text fontSize="2xl" fontWeight="bold" mb="2">
          Create Account
        </Text>
        <Text color="green.500" fontSize="sm" mb="6">
          Start your journey through the shelves.
        </Text>

        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing="4" align="stretch">
            <Input
              placeholder="Full Name"
              bg="white"
              {...register("fullName", { required: "Full Name is required" })}
            />
            {errors.fullName && <Text color="red.500">{errors.fullName.message}</Text>}

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
            {errors.email && <Text color="red.500">{errors.email.message}</Text>}

            <Input
              placeholder="Password"
              type="password"
              bg="white"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" },
              })}
            />
            {errors.password && <Text color="red.500">{errors.password.message}</Text>}

            <Text fontSize="sm" fontWeight="medium">Gender</Text>
            <RadioGroup>
              <Stack direction="row">
                <Radio value="male" {...register("gender", { required: "Select your gender" })}>Male</Radio>
                <Radio value="female" {...register("gender", { required: "Select your gender" })}>Female</Radio>
                <Radio value="other" {...register("gender", { required: "Select your gender" })}>Other</Radio>
              </Stack>
            </RadioGroup>
            {errors.gender && <Text color="red.500">{errors.gender.message}</Text>}

            <Text fontSize="sm" fontWeight="medium">Role</Text>
            <Controller
              control={control}
              name="role"
              rules={{ validate: (value) => value?.length > 0 || "Select at least one role" }}
              render={({ field }) => (
                <CheckboxGroup {...field}>
                  <Stack direction="row">
                    <Checkbox value="buyer">Buyer</Checkbox>
                    <Checkbox value="seller">Seller</Checkbox>
                  </Stack>
                </CheckboxGroup>
              )}
            />
            {errors.role && <Text color="red.500">{errors.role.message}</Text>}

            <Input
              placeholder="Phone Number"
              bg="white"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: "Invalid phone number",
                },
              })}
            />
            {errors.phone && <Text color="red.500">{errors.phone.message}</Text>}

            <Button
              colorScheme="green"
              size="lg"
              type="submit"
              isDisabled={!isValid || loading}
              isLoading={loading}
            >
              Sign Up
            </Button>

            {error && <Text color="red.500" textAlign="center">{error}</Text>}

            <Divider />

            <Text fontSize="sm" textAlign="center">
              Already have an account?{" "}
              <Link color="green.500" href="/login">
                Log in
              </Link>
            </Text>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export default Signup;
