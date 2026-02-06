import { Box, Heading, Text, Button, HStack, SimpleGrid, Badge, Image, Flex, VStack, Icon, Container, Divider } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { FaShieldAlt, FaLock, FaGlobe } from "react-icons/fa";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // If token exists, redirect to /home
      navigate("/home");
    }
  }, [navigate]);
  const collections = [
    {
      title: "First Editions",
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
      desc: "Unearthed treasures from history's greatest authors.",
    },
    {
      title: "Leather Bound",
      img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
      desc: "Hand-crafted bindings in calfskin and morocco.",
    },
    {
      title: "Classic Literature",
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
      desc: "The foundations of the written word.",
    },
  ];

  const featuredBooks = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald, 1925",
      price: "$14,500.00",
      img: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
      tag: "RARE",
    },
    {
      title: "Moby Dick",
      author: "Herman Melville, 1851",
      price: "$8,200.00",
      img: "https://covers.openlibrary.org/b/id/5555292-L.jpg",
    },
    {
      title: "Ulysses",
      author: "James Joyce, 1922",
      price: "$22,000.00",
      img: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
      tag: "UNIQUE",
    },
    {
      title: "Frankenstein",
      author: "Mary Shelley, 1818",
      price: "$35,000.00",
      img: "https://covers.openlibrary.org/b/id/8257891-L.jpg",
    },
  ];

  return (
    <Box bg="#FDFBF7" fontFamily="'Merriweather', serif">
      {/* --- NAVBAR --- */}
      <Flex
        px={{ base: 6, md: 12 }}
        py={5}
        align="center"
        justify="space-between"
        borderBottom="1px solid"
        borderColor="rgba(0,0,0,0.05)"
        bg="white"
        position="sticky"
        top="0"
        zIndex="1000"
      >
        <Text
          fontSize="2xl"
          fontWeight="extrabold"
          color="#5D4037"
          letterSpacing="tighter"
          cursor="pointer"
          onClick={() => navigate("/")}
        >
          BookStore
        </Text>

        <HStack spacing={10} display={{ base: "none", md: "flex" }}>
          {["Home", "Browse", "Collections", "About"].map((item) => (
            <Text
              key={item}
              fontSize="sm"
              fontWeight="bold"
              color="gray.600"
              cursor="pointer"
              _hover={{ color: "#D4AF37" }}
              transition="0.2s"
            >
              {item}
            </Text>
          ))}
        </HStack>

        <Button
          bg="#5D4037"
          color="white"
          px={8}
          borderRadius="full"
          _hover={{ bg: "#3E2723", transform: "translateY(-2px)" }}
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </Flex>

      {/* --- HERO SECTION --- */}
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
                onClick={() => navigate("/login")}
              >
                Explore the Vault
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
                onClick={() => navigate("/login")}
              >
                Consign a Classic
              </Button>
            </HStack>
          </VStack>
          </Box>
        </Box>
      </Container>

      {/* --- COLLECTIONS SECTION --- */}
      <Container maxW="container.xl" py={20}>
        <Flex justify="space-between" align="end" mb={10}>
          <VStack align="start" spacing={0}>
            <Text color="#D4AF37" fontWeight="bold" fontSize="sm" letterSpacing="widest">
              CURATED SHELVES
            </Text>
            <Heading fontSize="4xl" color="#5D4037">Browse Collections</Heading>
          </VStack>
          <Button variant="link" color="#D4AF37" rightIcon={<Text>→</Text>} onClick={() => navigate("/login")}>
            VIEW ALL
          </Button>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {collections.map((item, i) => (
            <Box
              key={i}
              group="true"
              position="relative"
              borderRadius="2xl"
              overflow="hidden"
              height="350px"
              cursor="pointer"
              transition="all 0.4s ease"
              _hover={{ transform: "translateY(-10px)", boxShadow: "2xl" }}
              onClick={() => navigate("/login")}
            >
              <Image src={item.img} w="100%" h="100%" objectFit="cover" />
              <Box
                position="absolute"
                inset="0"
                bgGradient="linear(to-t, rgba(0,0,0,0.8), transparent)"
                p={8}
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
              >
                <Heading size="lg" color="white" mb={2}>{item.title}</Heading>
                <Text color="whiteAlpha.800" fontSize="sm">{item.desc}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* --- FEATURED FINDS --- */}
      <Box bg="#F3EFE9" py={20}>
        <Container maxW="container.xl">
          <Heading textAlign="center" mb={16} color="#5D4037" fontStyle="italic">Featured Rare Finds</Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={8}>
            {featuredBooks.map((book, i) => (
              <Box
                key={i}
                bg="white"
                p={5}
                borderRadius="xl"
                boxShadow="lg"
                transition="0.3s"
                _hover={{ transform: "scale(1.02)" }}
                onClick={() => navigate("/login")}
                cursor="pointer"
              >
                <Box position="relative" mb={4} borderRadius="lg" overflow="hidden">
                  {book.tag && (
                    <Badge position="absolute" top={3} right={3} bg="#D4AF37" color="white" px={3} py={1} borderRadius="md">
                      {book.tag}
                    </Badge>
                  )}
                  <Image src={book.img} h="350px" w="100%" objectFit="cover" />
                </Box>
                <VStack align="start" spacing={1}>
                  <Text fontWeight="bold" fontSize="lg" color="#5D4037">{book.title}</Text>
                  <Text fontSize="sm" color="gray.500">{book.author}</Text>
                  <Text fontWeight="extrabold" color="#D4AF37" pt={2}>{book.price}</Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* --- FOOTER --- */}
      <Box bg="#5D4037" py={16} color="whiteAlpha.800">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={12}>
            <VStack align="start" spacing={4}>
              <Text fontSize="2xl" fontWeight="bold" color="#F5E6CA">BookStore</Text>
              <Text fontSize="sm" fontStyle="italic">
                "Give Books One More Chapter." Connecting collectors with the world's most significant literary artifacts.
              </Text>
            </VStack>
            
            <VStack align="start">
              <Text color="white" fontWeight="bold" mb={2}>Marketplace</Text>
              <Link>Authentication</Link>
              <Link>Buying Guide</Link>
              <Link>Selling Books</Link>
            </VStack>

            <VStack align="start">
              <Text color="white" fontWeight="bold" mb={2}>Trust</Text>
              <HStack spacing={4}>
                <Icon as={FaShieldAlt} boxSize={5} color="#D4AF37" />
                <Icon as={FaLock} boxSize={5} color="#D4AF37" />
                <Icon as={FaGlobe} boxSize={5} color="#D4AF37" />
              </HStack>
            </VStack>

            <VStack align={{ base: "start", md: "end" }}>
              <Text color="white" fontWeight="bold" mb={2}>Newsletter</Text>
              <Text fontSize="xs">Join our list for rare arrival alerts.</Text>
            </VStack>
          </SimpleGrid>
          <Divider mt={10} borderColor="whiteAlpha.200" />
          <Text textAlign="center" mt={8} fontSize="xs">
            © 2026 RareLeaf Marketplace Inc. All rights reserved.
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;