import React from "react";

import { Box, Grid } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

import LeftPaneItems from "../components/LeftPaneItems";

import CustomDialog from "../components/CustomDialog";

//px, em, rem
//vh,

const CustomDialog1 = () => {
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
          <CustomDialog />
        </Box>
      </Box>
    </>
  );
};

export default CustomDialog1;
