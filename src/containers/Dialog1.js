import React from "react";

import { Box, Grid } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Dialog from "../components/Dialog";
import LeftPaneItems from "../components/LeftPaneItems";
import Dialogcustom from "../components/Dialog";
import CustomDialog from "../components/CustomDialog";

//px, em, rem
//vh,

const Dialog1 = () => {
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
          <Dialogcustom />
        </Box>
      </Box>
    </>
  );
};

export default Dialog1;
