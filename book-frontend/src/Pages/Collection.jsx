import {
  Box,
  Text,
  Flex,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import NavbarAfterLogin from "./NavbarAfterLogin";

const collections = [
  {
    id: "school",
    title: "School Collection",
    subtitle: "Classes 1 to 12 – foundation to board exams",
    icon: "🏫",
  },
  {
    id: "college",
    title: "College Collection",
    subtitle: "Undergraduate & postgraduate academic resources",
    icon: "🎓",
  },
  {
    id: "other",
    title: "Other Collection",
    subtitle: "Competitive exams, skill courses & references",
    icon: "📦",
  },
];

export default function CollectionsPage() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/collection/${id}`);
  };

  return (
    <>
      <NavbarAfterLogin />
          <Box maxW="1100px" mx="auto" px={6} py={20}>
      <Heading textAlign="center" mb={4}>
        Explore Collections
      </Heading>

      <Text
        textAlign="center"
        color="gray.600"
        maxW="600px"
        mx="auto"
        mb={14}
      >
        Choose a collection to explore curated educational materials tailored
        for every learning stage.
      </Text>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {collections.map((item) => (
          <Box
            key={item.id}
            bg="white"
            p={10}
            border="1px solid"
            borderColor="gray.200"
            borderRadius="2xl"
            textAlign="center"
            cursor="pointer"
            transition="all 0.3s ease"
            _hover={{
              borderColor: "red.400",
              boxShadow: "lg",
              transform: "translateY(-6px)",
            }}
            onClick={() => handleClick(item.id)}
          >
            <Flex
              w="64px"
              h="64px"
              mx="auto"
              mb={6}
              align="center"
              justify="center"
              borderRadius="full"
              bg="red.50"
              fontSize="32px"
            >
              {item.icon}
            </Flex>

            <Text fontSize="xl" fontWeight="bold" mb={3}>
              {item.title}
            </Text>

            <Text fontSize="md" color="gray.500">
              {item.subtitle}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
    </>

  );
}
