import React from "react";
import { Box, Stack, VStack, Avatar, Text } from "@chakra-ui/react";
import avatarSrc from "../assets/profile-pic (2).png"

const Footer = () => {
  return (
    <Box
    bgColor={"#30353B"}
    color={"whiteAlpha.700"}
    minH={"48"}
    px={"16"}
    py={["16", "8"]}
  >
    <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
      <VStack w={"full"} alignItems={["center", "flex-start"]}>
        <Text fontWeight={"bold"}>About Us</Text>
        <Text
          fontSize={"sm"}
          letterSpacing={"widest"}
          textAlign={["center", "left"]}
        >
          We are the best crypto trading app in India, we provide our guidance
          at a very cheap price.
        </Text>
      </VStack>

      <VStack>
        <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
        <Text>Made with ❤️</Text>
      </VStack>
    </Stack>
  </Box>
  );
};

export default Footer;
