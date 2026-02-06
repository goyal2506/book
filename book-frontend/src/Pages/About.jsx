import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  Button,
  VStack,
  Stack,
  Divider,
  Center,
} from "@chakra-ui/react";
import NavbarAfterLogin from "./NavbarAfterLogin";

const AboutPage = () => {
  return (
    <>
        <NavbarAfterLogin/>
        <Box bg="#f4ece1" color="#2c2c2c" fontFamily="Lora, serif" py={10}>
        <Container maxW="container.lg">
            {/* Header */}
            <VStack spacing={3} mb={16}>
            <Heading
                as="h1"
                fontFamily="Playfair Display, serif"
                fontSize={{ base: "3xl", md: "5xl" }}
                color="#5e3023"
            >
                The Second Chapter
            </Heading>
            <Text fontStyle="italic" fontSize="lg" color="gray.600">
                "Every spine has a soul, every page a memory."
            </Text>
            <Divider borderColor="#5e3023" borderWidth="2px" w="60px" />
            </VStack>

            {/* Our Story */}
            <Stack spacing={6} mb={12}>
            <Heading
                as="h2"
                fontFamily="Playfair Display, serif"
                color="#5e3023"
                size="lg"
                borderBottom="2px solid #c6a664"
                display="inline-block"
            >
                Our Story
            </Heading>
            <Text fontSize="lg" lineHeight="tall">
                Welcome to a marketplace built on ink and history. We believe that
                a school book shouldn't gather dust after graduation, and a novel
                shouldn't sit lonely on a shelf.{" "}
                <Box as="strong">The Second Chapter</Box> is where old books find
                new hands and tired pages find fresh eyes.
            </Text>
            </Stack>

            {/* Poem Box */}
            <Center
            bg="rgba(198, 166, 100, 0.1)"
            borderLeft="5px solid #c6a664"
            borderRadius="md"
            p={6}
            mb={12}
            >
            <Text fontStyle="italic" fontSize="lg" textAlign="center">
                "The ink may fade, the edges fray,
                <br />
                But wisdom never rots away.
                <br />
                Pass the torch, let knowledge flow,
                <br />
                Watch a new mind start to grow."
            </Text>
            </Center>

            {/* How It Works */}
            <Stack spacing={8} mb={12}>
            <Heading
                as="h2"
                fontFamily="Playfair Display, serif"
                color="#5e3023"
                size="lg"
                borderBottom="2px solid #c6a664"
                display="inline-block"
            >
                How It Works
            </Heading>

            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
                <GridItem
                bg="white"
                p={6}
                borderRadius="md"
                boxShadow="md"
                _hover={{ transform: "translateY(-5px)", borderColor: "#c6a664" }}
                border="1px solid #ddd"
                transition="all 0.3s ease"
                >
                <Heading as="h3" size="md" mb={4} fontFamily="Playfair Display, serif" color="#5e3023">
                    For the Givers
                </Heading>
                <Text>
                    Create an account and list your old textbooks or classics. Upload
                    a photo, set a price, and give your book a second life with a
                    new student or reader.
                </Text>
                </GridItem>

                <GridItem
                bg="white"
                p={6}
                borderRadius="md"
                boxShadow="md"
                _hover={{ transform: "translateY(-5px)", borderColor: "#c6a664" }}
                border="1px solid #ddd"
                transition="all 0.3s ease"
                >
                <Heading as="h3" size="md" mb={4} fontFamily="Playfair Display, serif" color="#5e3023">
                    For the Seekers
                </Heading>
                <Text>
                    Browse affordable, pre-loved books. Whether for school or soul,
                    find the titles you need at a fraction of the cost, full of history.
                </Text>
                </GridItem>
            </Grid>
            </Stack>
        </Container>
        </Box>
    </>

  );
};

export default AboutPage;
