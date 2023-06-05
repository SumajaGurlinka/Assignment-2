import React, { useState } from "react";
import Select, { components, DropdownIndicatorProps } from "react-select";
import makeStyles from "@mui/styles/makeStyles";
import Tab from "@mui/material/Tab";
import Checkbox from "@mui/material/Checkbox";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import LeftPaneItems from "./LeftPaneItems";
import { useNavigate } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";

const useStyles = makeStyles({
  select: {
    margin: "10px",
    padding: "10px",
    width: "1300px",
    background: "#F2EBE1",
    height: "720px",
  },
  dialogPaper: {
    minHeight: "40vh",

    background: "#DC143C",
    width: "70px",
  },
  arrow: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  h2: {
    margin: "10px",
  },
  button: {
    padding: "20px",
    display: "flex",
    justifyContent: "center",

    margin: "10px",
  },
  tabs: {
    marginLeft: "10%",
    
    "& .MuiTab-root": {
    fontSize:"15px",
     
      textTransform: "none",
      minWidth: "unset",
      opacity: 1,
      cursor: "default",
      "& .MuiTab-wrapper": {
        cursor: "pointer",
      
      
      },
    },
    "& .Mui-selected": {
     
      fontSize: "20px",
      borderRadius:"10px",
      marginBottom: "20px",
      "&.css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected": {
        color: "#1976d2",
    },
  },
    "& .MuiTabs-indicator": {
      height: "4px",
      top: "45px",
      marginLeft: "12px",
      width: "80px !important",
      backgroundColor: "#ffbc3e",
      borderRadius: "2px",
    },
    cursor: "default",
  },
});

const CustomDialog = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [value, setValue] = useState("1");
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogOpen = () => {
    setOpen(true);
  };
  const arrow = () => {
    navigate("/");
  };
  const handleDialogClose = () => {
    setOpen(false);
  };
   const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.select}>
      <div className={classes.arrow}>
        <IconButton onClick={arrow}>
          <ArrowBackIcon />
        </IconButton>
      </div>
      <div>
        <IconButton onClick={handleDialogOpen}>
          <AddIcon />
        </IconButton>

        <Dialog
          open={open}
          onClose={handleDialogClose}
          fullWidth
          maxWidth="sm"
          classes={{ paper: classes.dialogPaper }}
        >
          <DialogTitle
            sx={{
              height: "70px",
              background: "#00008B",
              display: "flex",
              justifyContent: "center",
              fontSize: "40px",
              color: "white",
            }}
          >
            Leave This Page?
          </DialogTitle>
          <DialogContent
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Your progress will not be saved
          </DialogContent>
          <DialogActions>
            <div className={classes.button}>
              <Button
                style={{ fontFamily: "Manrope, sans-serif" }}
                sx={{
                  background: "white",
                  border: "2px solid blue",
                  paddingBottom: "50px",
                  paddingTop: "50px",
                  padding: "15px",
                  width: "220px",
                  borderRadius: "20px",
                  margin: "20px",
                  fontweight: "bold",
                  color: "blue",
                  textTransform:"none"
                }}
                onClick={handleDialogClose}
              >
                Cancel
              </Button>
              <Button
                style={{ fontFamily: "Manrope, sans-serif" }}
                sx={{
                  background: "#DC143C",
                  paddingBottom: "50px",
                  paddingTop: "50px",
                  padding: "15px",
                  width: "220px",
                  borderRadius: "20px",
                  margin: "20px",
                  fontweight: "bold",
                  color: "blue",
                  textTransform:"none"
                }}
              >
                Leave
              </Button>
            </div>
          </DialogActions>
        </Dialog>
      </div>
      <TabContext value={value}>
       
          <TabList onChange={handleChange} className={classes.tabs} >
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
      
        <TabPanel value="1" >
          sssss
        </TabPanel>
      </TabContext>
    </div>
   
  );
};

export default CustomDialog;
