import React from "react";

import { Box, Grid } from "@mui/material";

import LeftPaneItems from "../components/LeftPaneItems";

import CustomGrid from "../components/CustomGrid";
import CustomRadio from "../components/CustomRadio";

//px, em, rem
//vh,

const CustomRadio1 = () => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          margin: 0,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <LeftPaneItems />

        <Box display="flex" sx={{ flex: 2 }}>
          <CustomRadio />
        </Box>
      </Box>
    </>
  );
};

export default CustomRadio1;
