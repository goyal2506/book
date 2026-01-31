import { createStandaloneToast } from "@chakra-ui/react";

const toast = createStandaloneToast();

export const showToast = ({ title, description, status }) => {
  toast({
    title,
    description,
    status, // "success" | "error" | "warning" | "info"
    duration: 3000,
    isClosable: true,
    position: "top",
  });
};
