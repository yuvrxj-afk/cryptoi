import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";

const ErrorC = ({ message }) => {
  return (
    <Alert
      status="error"
      position={"fixed"}
      w={"container.lg"}
      transform={"translateX{-50%"}
      left={"50%"}
      bottom={"4"}
    >
      <AlertIcon />
      {message}
    </Alert>
  );
};

export default ErrorC;
