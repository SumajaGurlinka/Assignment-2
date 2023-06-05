import React from "react";
import { useState } from "react";
import makeStyles from "@mui/styles/makeStyles/makeStyles";
import { Box, Dialog, Drawer } from "@mui/material";
import List from "@mui/material/List";
import { useNavigate } from "react-router";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DoneIcon from "@mui/icons-material/Done";
import Divider from "@mui/material/Divider";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { AppBar } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import TabIcon from "@mui/icons-material/Tab";
import Grid3x3Icon from "@mui/icons-material/Grid3x3";
import CustomDialog from "./CustomDialog";
const drawerWidth = 240;
const useStyles = makeStyles({});
const LeftPaneItems = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(
    parseInt(localStorage.getItem("selectedIndex"))
  );
  const handleButtonClick1 = () => {
    localStorage.setItem("selectedIndex", 0);
    navigate("/sel");
    setSelectedIndex(0);
  };
  const handleDialogClose = () => {
    setOpen(false);
  };
  const handleButtonClick2 = () => {
    localStorage.setItem("selectedIndex", 1);
    navigate("/tab");
    setSelectedIndex(1);
  };
  const handleButtonClick3 = () => {
    localStorage.setItem("selectedIndex", 2);
    navigate("/dialog");
    setSelectedIndex(2);
  };
  const handleButtonClick4 = () => {
    localStorage.setItem("selectedIndex", 3);
    navigate("/grid");
    setSelectedIndex(3);
  };
  const handleButtonClick5 = () => {
    localStorage.setItem("selectedIndex", 4);
    navigate("/Radio");
    setSelectedIndex(4);
  };
  const handleButtonClick6 = () => {
    localStorage.setItem("selectedIndex", 5);
    navigate("/checkbox");
    setSelectedIndex(5);
  };
  const handleButtonClick7 = () => {
    localStorage.setItem("selectedIndex", 6);
    navigate("/dialog1");
    setSelectedIndex(6);
  };

  return (
    <Box
      sx={{
        height: "100vh",

        margin: "auto",
        background: "#F2EBE1",
        overflow: "auto",
      }}
    >
      <List>
        <ListItemButton
          onClick={() => handleButtonClick1()}
          sx={{
            color: selectedIndex === 0 ? "#7C3AED" : null,
          }}
        >
          <ListItemIcon
            sx={{
              color: selectedIndex === 0 ? "#7C3AED" : null,
            }}
          >
            <DoneIcon />
          </ListItemIcon>
          <ListItemText>Select</ListItemText>
        </ListItemButton>
      </List>
      <Divider />
      <List>
        <ListItemButton
          onClick={() => handleButtonClick2()}
          sx={{
            color: selectedIndex === 1 ? "#7C3AED" : null,
          }}
        >
          <ListItemIcon
            sx={{
              color: selectedIndex === 1 ? "#7C3AED" : null,
            }}
          >
            <TabIcon />
          </ListItemIcon>
          <ListItemText>Custom Tabs</ListItemText>
        </ListItemButton>
      </List>
      <Divider />
      <List>
        <ListItemButton
          onClick={() => handleButtonClick3()}
          sx={{
            color: selectedIndex === 2 ? "#7C3AED" : null,
          }}
        >
          <ListItemIcon
            sx={{
              color: selectedIndex === 2 ? "#7C3AED" : null,
            }}
          >
            <ChatBubbleOutlineIcon />
          </ListItemIcon>
          <ListItemText>Custom Dialog</ListItemText>
        </ListItemButton>
      </List>
      <Divider />
      <List>
        <ListItemButton
          onClick={() => handleButtonClick4()}
          sx={{
            color: selectedIndex === 3 ? "#7C3AED" : null,
          }}
        >
          <ListItemIcon
            sx={{
              color: selectedIndex === 3 ? "#7C3AED" : null,
            }}
          >
            <Grid3x3Icon />
          </ListItemIcon>
          <ListItemText>Custom Grid</ListItemText>
        </ListItemButton>
      </List>
      <Divider />
      <List>
        <ListItemButton
          onClick={() => handleButtonClick5()}
          sx={{
            color: selectedIndex === 4 ? "#7C3AED" : null,
          }}
        >
          <ListItemIcon
            sx={{
              color: selectedIndex === 4 ? "#7C3AED" : null,
            }}
          >
            <RadioButtonCheckedIcon />
          </ListItemIcon>
          <ListItemText>Radio Buttons</ListItemText>
        </ListItemButton>
      </List>
      <Divider />

      <List>
        <ListItemButton
          onClick={() => handleButtonClick6()}
          sx={{
            color: selectedIndex === 5 ? "#7C3AED" : null,
          }}
        >
          <ListItemIcon
            sx={{
              color: selectedIndex === 5 ? "#7C3AED" : null,
            }}
          >
            <CheckBoxIcon />
          </ListItemIcon>
          <ListItemText>Custom CheckBox</ListItemText>
        </ListItemButton>
      </List>
      <Divider />
      <List>
        <ListItemButton
          onClick={() => handleButtonClick7()}
          sx={{
            color: selectedIndex === 6 ? "#7C3AED" : null,
          }}
        >
          <ListItemIcon
            sx={{
              color: selectedIndex === 6 ? "#7C3AED" : null,
            }}
          >
            <ChatBubbleOutlineIcon />
          </ListItemIcon>
          <ListItemText>Dialog</ListItemText>
        </ListItemButton>
      </List>
    </Box>
  );
};
export default LeftPaneItems;
