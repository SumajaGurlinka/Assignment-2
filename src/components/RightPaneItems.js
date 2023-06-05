import React from "react";
import { Box } from "@mui/material";
import Select1 from "./Select";
import CustomTab from "./CustomTab";
import CustomGrid from "./CustomGrid";
import CustomDialog from "./CustomDialog";

const RightPaneItems=()=>{
    return(
        <Box 
        sx={{
            height: "100vh",
          
           width:"100%",
         
            background:"#FCE5BC"
          }}>
            <CustomGrid/>
        </Box>
    );
};
export default RightPaneItems;