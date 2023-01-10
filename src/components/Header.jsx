import { Button, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack p={"3"} bgColor={"royalblue"} shadow={"base"} spacing={"3"}>
      <Text
        fontSize={"3xl"}
        textAlign={"center"}
        fontWeight={"extrabold"}
        justifyContent={"center"}
        color={"WHITE"}
        marginRight={"3"}
      >
        Crypt.oi {"   "} | 
      </Text>
      <HStack spacing={'3'}>
        <Button
          variant={"outline"}
          color={"white"}
          fontWeight={"thin"}
          fontSize={"xl"}
        >
          <Link to={"/"}>Home</Link>
        </Button>
        <Button
          variant={"outline"}
          color={"white"}
          fontWeight={"thin"}
          fontSize={"xl"}
        >
          <Link to={"/exchanges"}>Exchanges</Link>
        </Button>
        <Button
          variant={"outline"}
          color={"white"}
          fontWeight={"thin"}
          fontSize={"xl"}
        >
          <Link to={"/coins"}>Coins</Link>
        </Button>
      </HStack>
    </HStack>
  );
};

export default Header;
