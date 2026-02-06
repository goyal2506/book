import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  VStack,
  Textarea,
  Select,
  Divider,
  SimpleGrid,
  Image,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import NavbarAfterLogin from "./NavbarAfterLogin";

/* College Courses */
const collegeCourses = [
  { id: 1, course: "Computer Science" },
  { id: 2, course: "Mechanical Engineering" },
  { id: 3, course: "Electrical Engineering" },
  { id: 4, course: "Civil Engineering" },
  { id: 5, course: "Business Administration" },
  { id: 6, course: "Biotechnology" },
  { id: 7, course: "Arts & Humanities" },
  { id: 8, course: "Medicine" },
];

const UploadBook = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid },
    setValue,
  } = useForm({ mode: "onChange" });

  const bookType = watch("bookType");

  const [imagePreviews, setImagePreviews] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setValue("images", files); // save files to react-hook-form
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const onSubmit = (data) => {
    console.log("Uploaded Book Data:", data);
    // If you want to see the actual files
    console.log("Files:", data.images);
  };

  return (
    <>
      <NavbarAfterLogin />

      <Flex py={10} minH="100vh" bg="#FDFBF7" align="center" justify="center" px="6">
        <Box w="full" maxW="4xl" bg="white" p="10" borderRadius="2xl" boxShadow="2xl">
          <Text fontSize="4xl" fontWeight="extrabold" mb="2" color="#5D4037">
            Upload Old Book
          </Text>

          <Text color="gray.500" mb="8">
            Share complete details so your book finds the right reader.
          </Text>

          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing="6" align="stretch">

              {/* ================= Book Category ================= */}
              <Text fontSize="lg" fontWeight="bold" color="#8B4513">
                Book Category
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing="5">
                <Select variant="filled" {...register("bookType", { required: true })}>
                  <option value="">Select Book Type</option>
                  <option value="school">School Book</option>
                  <option value="college">College Book</option>
                  <option value="other">Other</option>
                </Select>

                {bookType === "school" && (
                  <Select variant="filled" {...register("schoolClass", { required: true })}>
                    <option value="">Select Class</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i + 1} value={`Class ${i + 1}`}>
                        Class {i + 1}
                      </option>
                    ))}
                  </Select>
                )}

                {bookType === "college" && (
                  <Select variant="filled" {...register("collegeCourse", { required: true })}>
                    <option value="">Select Course</option>
                    {collegeCourses.map((item) => (
                      <option key={item.id} value={item.course}>
                        {item.course}
                      </option>
                    ))}
                  </Select>
                )}
              </SimpleGrid>

              <Divider />

              {/* ================= Book Information ================= */}
              <Text fontSize="lg" fontWeight="bold" color="#8B4513">
                Book Information
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing="5">
                <Input placeholder="Book Title" variant="filled" {...register("title", { required: true })} />
                <Input placeholder="Author Name" variant="filled" {...register("author", { required: true })} />
                <Input type="number" placeholder="Publication Year" variant="filled" {...register("year")} />
                <Input placeholder="Language" variant="filled" {...register("language")} />
              </SimpleGrid>

              <Textarea placeholder="Book Description" variant="filled" {...register("description", { required: true })} />

              <Select variant="filled" {...register("condition", { required: true })}>
                <option value="">Book Condition</option>
                <option value="like-new">Like New</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="old">Old</option>
              </Select>

              {/* ================= Image Upload ================= */}
              <Box>
                <Text fontSize="lg" fontWeight="bold" color="#8B4513" mb={2}>
                  Upload Book Images
                </Text>
                <Input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                />

                {imagePreviews.length > 0 && (
                  <Wrap mt={4}>
                    {imagePreviews.map((src, i) => (
                      <WrapItem key={i}>
                        <Image src={src} boxSize="100px" objectFit="cover" borderRadius="md" />
                      </WrapItem>
                    ))}
                  </Wrap>
                )}
              </Box>

              <Divider />

              {/* ================= Pricing ================= */}
              <Text fontSize="lg" fontWeight="bold" color="#8B4513">
                Pricing Details
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing="5">
                <Input type="number" placeholder="MRP (₹)" variant="filled" {...register("mrp", { required: true })} />
                <Input type="number" placeholder="Expected Price (₹)" variant="filled" {...register("expectedPrice", { required: true })} />
              </SimpleGrid>

              <Divider />

              {/* ================= Seller Information ================= */}
              <Text fontSize="lg" fontWeight="bold" color="#8B4513">
                Seller Information
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing="5">
                <Input placeholder="Seller Name" variant="filled" {...register("sellerName", { required: true })} />
                <Input placeholder="Phone Number" variant="filled" {...register("phone", { required: true })} />
              </SimpleGrid>

              <Textarea placeholder="Pickup Location / Address" variant="filled" {...register("location", { required: true })} />

              <Button type="submit" size="lg" bg="#5D4037" color="white" isDisabled={!isValid} _hover={{ bg: "#3E2723" }}>
                Submit Book Details
              </Button>
            </VStack>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default UploadBook;
