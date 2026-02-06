import { Box, Heading, Text, Button, HStack, SimpleGrid, Badge, Image, Flex, VStack, Icon } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { FaShieldAlt, FaLock, FaGlobe } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
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
    <>
      <Box
        bg="#faf7f5"
        px={10}
        py={5}
        borderBottom="1px solid"
        borderColor="blackAlpha.100"
      >
        <Flex align="center">
          <Text
            fontSize="xl"
            fontWeight="bold"
            letterSpacing="wide"
            cursor="pointer"
            onClick={() => navigate("/login")}
          >
            BookStore
          </Text>

          <HStack spacing={10} mx="auto">
            {["Home", "Browse", "Profile"].map((item) => (
              <Text
                key={item}
                fontSize="md"
                fontWeight="medium"
                cursor="pointer"
                transition="0.2s"
                _hover={{ color: "red.500" }}
                onClick={() => navigate("/login")}
              >
                {item}
              </Text>
            ))}
          </HStack>

          <Button
            bg="red.500"
            color="white"
            px={6}
            borderRadius="md"
            _hover={{ bg: "red.600" }}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </Flex>
      </Box>
      <Box bg="#faf7f5" px={10} py={10}>
        <Box
          position="relative"
          borderRadius="2xl"
          overflow="hidden"
          height={["60vh", "80vh"]}
          cursor="default"
        >
          <Image
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80"
            alt="Hero Background"
            objectFit="cover"
            width="100%"
            height="100%"
            transition="transform 0.5s"
            _hover={{ transform: "scale(1.05)" }}
          />
          <Box
            position="absolute"
            inset="0"
            bg="blackAlpha.600"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            px={6}
          >
            <Box maxW="700px" color="white">
              <Heading fontSize={["3xl", "5xl"]} fontWeight="bold" mb={4} lineHeight="1.2">
                Discover the Timeless.
                <br />
                Own a Piece of History.
              </Heading>
              <Text fontSize={["md", "lg"]} opacity={0.9} mb={8}>
                The premier destination for bibliophiles to trade rare, antique, and first edition manuscripts.
              </Text>
              <HStack spacing={4} justify="center">
                <Button
                  bg="red.500"
                  color="white"
                  size="lg"
                  _hover={{ bg: "red.600", transform: "scale(1.05)" }}
                  transition="all 0.3s"
                  onClick={() => navigate("/login")}
                >
                  Start Buying
                </Button>
                <Button
                  variant="outline"
                  color="white"
                  borderColor="white"
                  size="lg"
                  _hover={{ bg: "whiteAlpha.200", transform: "scale(1.05)" }}
                  transition="all 0.3s"
                  onClick={() => navigate("/login")}
                >
                  Start Selling
                </Button>
              </HStack>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box bg="#faf7f5">
        <Box bg="#faf7f5" px={[6, 10, 14]} py={14} maxW="1500px" mx="auto">
          <Box mb={20}>
            <Flex justify="space-between" align="center" mb={8} flexWrap="wrap">
              <Heading
                fontSize={["2xl", "3xl"]}
                fontStyle="italic"
                letterSpacing="wide"
                fontWeight="semibold"
                mb={[4, 0]}
              >
                Browse Collections
              </Heading>
              <Text
                color="red.500"
                fontWeight="bold"
                cursor="pointer"
                userSelect="none"
                onClick={() => navigate("/login")}
                _hover={{ textDecoration: "underline", color: "red.600" }}
                fontSize={["sm", "md"]}
              >
                VIEW ALL →
              </Text>
            </Flex>

            <SimpleGrid columns={[1, 2, 3]} spacing={8}>
              {collections.map((item, i) => (
                <Box
                  key={i}
                  position="relative"
                  borderRadius="2xl"
                  overflow="hidden"
                  cursor="pointer"
                  transition="all 0.3s"
                  _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
                  onClick={() => navigate("/login")}
                >
                  <Image
                    src={item.img}
                    objectFit="cover"
                    width="100%"
                    height="280px"
                    alt={item.title}
                    loading="lazy"
                  />
                  <Box
                    position="absolute"
                    inset="0"
                    bgGradient="linear(to-t, blackAlpha.700, transparent)"
                    p={6}
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-end"
                    color="white"
                  >
                    <Heading fontSize="2xl" mb={1} lineHeight="short">{item.title}</Heading>
                    <Text fontSize="md" opacity={0.85} noOfLines={2}>
                      {item.desc}
                    </Text>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          <Box>
            <Heading
              fontSize={["2xl", "3xl"]}
              fontStyle="italic"
              letterSpacing="wide"
              fontWeight="semibold"
              mb={10}
              >
              Featured Rare Finds
              </Heading>

            <SimpleGrid columns={[1, 2, 4]} spacing={8}>
              {featuredBooks.map((book, i) => (
                <Box
                  key={i}
                  cursor="pointer"
                  onClick={() => navigate("/login")}
                  transition="all 0.3s"
                  _hover={{ transform: "translateY(-5px)", boxShadow: "2xl" }}
                  borderRadius="xl"
                  bg="white"
                  p={4}
                  boxShadow="md"
                >
                  <Box position="relative" mb={4} borderRadius="xl" overflow="hidden">
                    {book.tag && (
                      <Badge
                        position="absolute"
                        top={3}
                        right={3}
                        bg="red.500"
                        color="white"
                        fontSize="0.75em"
                        px={2}
                        py={1}
                        borderRadius="md"
                        textTransform="uppercase"
                      >
                        {book.tag}
                      </Badge>
                    )}
                    <Image
                      src={book.img}
                      alt={book.title}
                      height="400px"
                      width="100%"
                      objectFit="cover"
                      loading="lazy"
                      borderRadius="xl"
                    />
                  </Box>
                  <Text fontWeight="bold" fontSize="lg" noOfLines={1} mb={1}>
                    {book.title}
                  </Text>
                  <Text fontSize="sm" color="gray.600" fontStyle="italic" noOfLines={1} mb={2}>
                    {book.author}
                  </Text>
                  <Text fontWeight="bold" fontSize="md" color="red.600">
                    {book.price}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      <Box bg="#f7e8e8" px={[6, 10, 20]} py={10} color="gray.700" fontSize="sm">
        <Flex direction={["column", "row"]} justify="space-between" maxW="1200px" mx="auto" gap={[8, 0]}>
          <Box flex="1" minW="200px">
            <Text fontWeight="bold" fontSize="lg" color="red.600" mb={3}>
              <span role="img" aria-label="book">📖</span> Book Store
            </Text>
            <Text color="red.500" fontStyle="italic" maxW="280px" lineHeight="1.5">
              Connecting collectors and curators with the world's most significant literary artifacts. Established 2024.
            </Text>
          </Box>

          <VStack align="start" spacing={2} flex="1" minW="150px">
            <Text fontWeight="bold" color="red.600" textTransform="uppercase" fontSize="sm" mb={2} letterSpacing="wider">Marketplace</Text>
            {["How to Buy", "Sell Your Collection", "Authentication Process", "Shipping & Insurance"].map((item) => (
              <Link key={item} href="#" color="gray.700" _hover={{ color: "red.600", textDecoration: "underline" }} fontSize="sm" cursor="pointer">{item}</Link>
            ))}
          </VStack>

          <VStack align="start" spacing={2} flex="1" minW="150px">
            <Text fontWeight="bold" color="red.600" textTransform="uppercase" fontSize="sm" mb={2} letterSpacing="wider">Explore</Text>
            {["New Arrivals", "Auction House", "Valuation Guide", "The Bibliophile Blog"].map((item) => (
              <Link key={item} href="#" color="gray.700" _hover={{ color: "red.600", textDecoration: "underline" }} fontSize="sm" cursor="pointer">{item}</Link>
            ))}
          </VStack>

          <Box flex="1" minW="200px" textAlign={["left", "right"]}>
            <Text fontWeight="bold" color="red.600" textTransform="uppercase" fontSize="sm" mb={4} letterSpacing="wider">Trust & Safety</Text>
            <HStack spacing={6} justify={["flex-start", "flex-end"]} mb={4} fontSize="lg" color="gray.600">
              <Icon as={FaShieldAlt} />
              <Icon as={FaLock} />
              <Icon as={FaGlobe} />
            </HStack>
            <Text color="gray.500" fontSize="xs" maxW={["100%", "250px"]} marginLeft={["0", "auto"]}>
              © 2024 RareLeaf Marketplace Inc. All rights reserved.<br />Images used for illustrative purposes.
            </Text>
          </Box>
        </Flex>
      </Box>
    </>

  );
};

export default Home;
