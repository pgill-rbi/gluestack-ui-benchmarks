import React from "react";
import { COUNT } from "../../utils";
import { Box } from "@tim-hortons-ventures/th-design-system";

const NativeBase = () => {
  return (
    <>
      {new Array(COUNT).fill(0).map((_, k) => (
        <Box p="2" m="1" bg="interface.warmYellow.900" key={k}/>
      ))}
    </>
  );
};

export default NativeBase;
