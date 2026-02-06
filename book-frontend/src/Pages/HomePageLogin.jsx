import { useNavigate } from "react-router-dom";
import NavbarAfterLogin from "./NavbarAfterLogin"
import { Box, Heading, Text, Button, HStack, SimpleGrid, Badge, Image, Flex, VStack, Icon, Container, Divider } from "@chakra-ui/react";
const HomePageLogin = () => {
    const navigate = useNavigate();
  
  return (
    <>
      <NavbarAfterLogin />
      <Container maxW="container.xl" py={10}>
        <Box
          position="relative"
          borderRadius="3xl"
          overflow="hidden"
          height={{ base: "50vh", md: "75vh" }}
          boxShadow="2xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1500&q=80"
            alt="Library"
            objectFit="cover"
            width="100%"
            height="100%"
          />
          <Box
            position="absolute"
            inset="0"
            bgGradient="linear(to-b, rgba(26, 32, 44, 0.8), rgba(26, 32, 44, 0.4))"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            px={6}
          >
            <VStack spacing={6} maxW="850px">
              <Heading
                fontSize={{ base: "3xl", md: "6xl" }}
                color="white"
                lineHeight="1.1"
                fontWeight="extrabold"
                letterSpacing="tight"
              >
                Where Every Page Has a History. <br />
                <Text as="span" bgGradient="linear(to-r, #F5E6CA, #D4AF37, #E1C16E)" bgClip="text">
                  Every Book a Soul.
                </Text>
              </Heading>

              <Text 
                fontSize={{ base: "md", md: "xl" }} 
                color="whiteAlpha.900" 
                maxW="650px"
                lineHeight="tall"
                textShadow="1px 1px 4px rgba(0,0,0,0.4)"
              >
                Step into a sanctuary for bibliophiles. Discover, trade, and preserve 
                rare treasures, antique manuscripts, and the first editions that shaped our world.
              </Text>

              <HStack spacing={6} pt={4}>
                <Button
                  bg="#D4AF37"
                  color="white"
                  size="lg"
                  px={10}
                  height="60px"
                  fontSize="lg"
                  _hover={{ bg: "#B8962E", transform: "translateY(-2px)" }}
                  boxShadow="lg"
                  onClick={() => navigate("/browse")}
                >
                  Browse Book
                </Button>
                <Button
                  variant="outline"
                  borderColor="white"
                  color="white"
                  size="lg"
                  px={10}
                  height="60px"
                  fontSize="lg"
                  _hover={{ bg: "whiteAlpha.200", transform: "translateY(-2px)" }}
                  onClick={() => navigate("/about")}
                >
                  About Book Store
                </Button>
              </HStack>
            </VStack>
          </Box>
        </Box>
      </Container>

    </>
  )
}

export default HomePageLogin