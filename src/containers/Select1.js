import React from "react";

import { Box, Grid } from "@mui/material";

import LeftPaneItems from "../components/LeftPaneItems";
import Select1 from "../components/Select";

//px, em, rem
//vh,

const Select2 = () => {
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
          <Select1 />
        </Box>
      </Box>
    </>
  );
};

export default Select2;
