import React from "react";
import {
  Flex,
  Text,
  HStack,
  IconButton,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
} from "@chakra-ui/react";
import { FiShoppingCart, FiMessageSquare, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const NavbarAfterLogin = () => {
  const navigate = useNavigate();

  const user = {
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=3",
  };

  // Navigation links
const role = localStorage.getItem("role");

const navItems = [
  { label: "Home", path: "/home" },
  { label: "Browse", path: "/browse" },
  { label: "Collections", path: "/collection" },
  { label: "About", path: "/about" },
  ...(role === "seller"
    ? [{ label: "Upload Book", path: "/upload" }]
    : []),
];


  return (
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
      {/* Logo */}
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

      {/* Nav Links */}
      <HStack spacing={10} display={{ base: "none", md: "flex" }}>
        {navItems.map((item) => (
          <Text
            key={item.label}
            fontSize="sm"
            fontWeight="bold"
            color="gray.600"
            cursor="pointer"
            _hover={{ color: "#D4AF37" }}
            transition="0.2s"
            onClick={() => navigate(item.path)}
          >
            {item.label}
          </Text>
        ))}
      </HStack>

      {/* Right Section */}
      <HStack spacing={4}>
        {/* Message Icon */}
        <IconButton
          icon={<FiMessageSquare />}
          variant="ghost"
          fontSize="20px"
          aria-label="Messages"
          _hover={{ color: "#5D4037", bg: "transparent" }}
          onClick={() => navigate("/messages")}
        />

        {/* Cart Icon */}
        <IconButton
          icon={<FiShoppingCart />}
          variant="ghost"
          fontSize="20px"
          aria-label="Cart"
          _hover={{ color: "#5D4037", bg: "transparent" }}
          onClick={() => navigate("/cart")}
        />

        {/* Profile Menu */}
        <Menu>
          <MenuButton>
            <Avatar
              size="sm"
              name={user.name}
              src={user.avatar}
              cursor="pointer"
            />
          </MenuButton>

          <MenuList>
            <Box px={3} py={2}>
              <Text fontWeight="bold">{user.name}</Text>
              <Text fontSize="sm" color="gray.500">
                Logged in
              </Text>
            </Box>

            <MenuItem
              icon={<FiLogOut />}
              onClick={() => {
                localStorage.removeItem("token"); // remove token
                navigate("/login"); // redirect to login
              }}
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};

export default NavbarAfterLogin;
