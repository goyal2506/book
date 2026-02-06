import {
  Box,
  Text,
  Flex,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import NavbarAfterLogin from "./NavbarAfterLogin";

const classesData = [
  {
    id: 1,
    grade: "1st Class",
    subtitle: "Alphabet recognition, phonics, basic numbers",
    icon: "🔥",
  },
  {
    id: 2,
    grade: "2nd Class",
    subtitle: "Reading fluency, sentence formation, basic addition",
    icon: "🧠",
  },
  {
    id: 3,
    grade: "3rd Class",
    subtitle: "Grammar basics, multiplication, environmental studies",
    icon: "➗",
  },
  {
    id: 4,
    grade: "4th Class",
    subtitle: "Paragraph writing, division, social studies",
    icon: "🎨",
  },
  {
    id: 5,
    grade: "5th Class",
    subtitle: "Advanced grammar, fractions, world geography",
    icon: "🌍",
  },
  {
    id: 6,
    grade: "6th Class",
    subtitle: "Algebra basics, history, earth science",
    icon: "🏛️",
  },
  {
    id: 7,
    grade: "7th Class",
    subtitle: "Ratios, life science, structured writing",
    icon: "🧬",
  },
  {
    id: 8,
    grade: "8th Class",
    subtitle: "Linear equations, physics basics, literature analysis",
    icon: "📚",
  },
  {
    id: 9,
    grade: "9th Class",
    subtitle: "Algebra, biology, foundational physics & chemistry",
    icon: "🚀",
  },
  {
    id: 10,
    grade: "10th Class",
    subtitle: "Board exam preparation, math, science & language",
    icon: "🧪",
  },
  {
    id: 11,
    grade: "11th Class",
    subtitle: "Advanced mathematics, physics, chemistry, streams",
    icon: "🎵",
  },
  {
    id: 12,
    grade: "12th Class",
    subtitle: "Competitive exams, specialization & career readiness",
    icon: "🎓",
  },
];

export default function SchoolGradeCollections() {
  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <>
        <NavbarAfterLogin/>
        <Box maxW="1200px" mx="auto" px={6} py={16}>
        <Heading textAlign="center" mb={12}>
            School Grade Collections
        </Heading>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={8}>
            {classesData.map((item) => (
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
                borderColor: "red.400",
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
                bg="red.50"
                fontSize="24px"
                >
                {item.icon}
                </Flex>

                <Text fontWeight="bold" fontSize="lg">
                {item.grade}
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
