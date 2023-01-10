import React from "react";
import { Box, Image } from "@chakra-ui/react";
import logo from "../assets/Home.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box w={"full"} bgColor={"#30353B"} maxH={"95vh"}>
      <motion.div style={{ height: "72.5vh" }}
      animate={{
        translateY:"20px",
      }}
      transition={{
        duration:2,
        repeat:Infinity,
        repeatType:"reverse"
      }}
      >
        <Image src={logo} w={"full"} h={"full"} objectFit={"contain"} />
      </motion.div>
    </Box>
  );
};

export default Home;
