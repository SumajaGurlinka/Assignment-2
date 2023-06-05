import React from "react";
import { Grid } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Select1 from "./components/Select";
import CustomDialog1 from "./containers/CustomDialog1";
import Select2 from "./containers/Select1";
import CustomGrid1 from "./containers/CustomGrid1";
import LeftPaneItems from "./components/LeftPaneItems";
import CustomTab1 from "./containers/CustomTab1";
import CustomRadio1 from "./containers/CustomRadio1";
import CustomCheckBox1 from "./containers/CustomCheckBox1";
import Dialog1 from "./containers/Dialog1";



const useStyles = makeStyles({
  root: {
    backgroundColor: "#FAEBD7",
    justifyContent: "space-evenly",
  },
});

//px, em, rem
//vh,

function App() {
  const classes = useStyles();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LeftPaneItems />} />
          <Route path="/sel" element={<Select2/>} />
          <Route path="/Dialog" element={<CustomDialog1 />} />
          <Route path="/Grid" element={<CustomGrid1 />} />
          <Route path="/Radio" element={<CustomRadio1/>} />
          <Route path="/checkbox" element={<CustomCheckBox1/>} />
          <Route path="/tab" element={<CustomTab1/>} />

          <Route path="/Dialog1" element={<Dialog1/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;