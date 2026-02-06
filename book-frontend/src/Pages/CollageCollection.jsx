import {
  Box,
  Text,
  Flex,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import NavbarAfterLogin from "./NavbarAfterLogin";

const collegeCourses = [
  {
    id: 1,
    course: "Computer Science",
    subtitle: "Programming, Data Structures, Algorithms",
    icon: "💻",
  },
  {
    id: 2,
    course: "Mechanical Engineering",
    subtitle: "Thermodynamics, Mechanics, Manufacturing",
    icon: "⚙️",
  },
  {
    id: 3,
    course: "Electrical Engineering",
    subtitle: "Circuits, Signals, Power Systems",
    icon: "🔌",
  },
  {
    id: 4,
    course: "Civil Engineering",
    subtitle: "Construction, Materials, Structural Analysis",
    icon: "🏗️",
  },
  {
    id: 5,
    course: "Business Administration",
    subtitle: "Marketing, Finance, Management",
    icon: "📈",
  },
  {
    id: 6,
    course: "Biotechnology",
    subtitle: "Genetics, Microbiology, Bioprocess",
    icon: "🧬",
  },
  {
    id: 7,
    course: "Arts & Humanities",
    subtitle: "History, Literature, Philosophy",
    icon: "🎨",
  },
  {
    id: 8,
    course: "Medicine",
    subtitle: "Anatomy, Physiology, Clinical Practice",
    icon: "🩺",
  },
];

export default function CollegeCourseCollections() {
  const handleClick = (id) => {
    console.log("Clicked course ID:", id);
  };

  return (
    <>
      <NavbarAfterLogin />
      <Box maxW="1200px" mx="auto" px={6} py={16}>
        <Heading textAlign="center" mb={12}>
          College Course Collections
        </Heading>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={8}>
          {collegeCourses.map((item) => (
            <Box
              key={item.id}
              bg="white"
              p={6}
              border="1px solid"
              borderColor="gray.200"
              borderRadius="xl"
              textAlign="center"
              cursor="pointer"
              transition="all 0.25s ease"
              _hover={{
                borderColor: "blue.400",
                boxShadow: "md",
                transform: "translateY(-4px)",
              }}
              onClick={() => handleClick(item.id)}
            >
              <Flex
                w="48px"
                h="48px"
                mx="auto"
                mb={4}
                align="center"
                justify="center"
                borderRadius="full"
                bg="blue.50"
                fontSize="24px"
              >
                {item.icon}
              </Flex>

              <Text fontWeight="bold" fontSize="lg">
                {item.course}
              </Text>

              <Text fontSize="sm" color="gray.500" mt={2}>
                {item.subtitle}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
