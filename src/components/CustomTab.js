import React, { useState, useEffect } from "react";
import Select, { components, DropdownIndicatorProps } from "react-select";
import makeStyles from "@mui/styles/makeStyles";
import FormGroup from "@mui/material/FormGroup";
import { Radio, FormControlLabel, RadioGroup } from "@mui/material";
import Tabs from "@mui/material/Tabs";

import { TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Tab from "@mui/material/Tab";
import Checkbox from "@mui/material/Checkbox";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { IconButton } from "@mui/material";
import { Box } from "@mui/material";
import { Grid, Paper, Divider } from "@mui/material";


const useStyles = makeStyles({
  select: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px",
    padding: "10px",
    width: "1300px",
    background: "#F2EBE1",
    height: "720px",
  },
  arrow: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  h2: {
    margin: "10px",
  },
  padding: {
    marginBottom: "10px",
  },
  tab:{
    fontSize:"20px",
   
    
  },
  tabs: {
    marginLeft: "10%",
    "& .MuiTab-root": {
      color:"#fff",
     
      textTransform: "none",
      minWidth: "unset",
      opacity: 1,
      cursor: "default",
      "& .MuiTab-wrapper": {
        cursor: "pointer",
      
      },
    },
    "& .Mui-selected": {
    
      fontSize: "15px",
     
      marginBottom: "20px",
    },
    "& .MuiTabs-indicator": {
      height: "4px",
      bottom: "22px",
      marginLeft: "12px",
      width: "80px !important",
      backgroundColor: "#ffbc3e",
      borderRadius: "2px",
    },
    cursor: "default",
  },
});
  


const API_URL = "https://jsonplaceholder.typicode.com/users";

const CustomTab = () => {
  const classes = useStyles();
  const [value, setValue] = useState("1");
  const [selectedValue, setSelectedValue] = useState("");
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChange1 = (event) => {
    setSelectedValue(event.target.value);
  };


  const tabListStyle = {
    paddingLeft: "120px", 
    marginBottom: "20px",
   
  };

  const tabPanelStyle = {
    fontSize: value === "1" ? "20px" : "15px",
    
    marginTop: "20px", 
  };

  return (
    <div className={classes.select}>
      <TabContext value={value}>
        <Box sx={{ height: "80px", width: "600px", background: "#1976d2", padding: "20px" }}>
          <TabList
            onChange={handleChange}
            className={classes.tabs}
            sx={tabListStyle}
          >
            <Tab label="Item One" value="1"   />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={tabPanelStyle}>
        
            <FormGroup>
            {data?.map((item, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox />}
                label={item.name}
              />
            ))}
          </FormGroup>
          
        </TabPanel>
        <TabPanel value="2" sx={tabPanelStyle}>
        <RadioGroup
        value={selectedValue}
        onChange={handleChange1}
        sx={{ padding: "50px" }}
      >
        {data?.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option.name}
            control={<Radio />}
            label={option.name}
          />
        ))}
      </RadioGroup>
        </TabPanel>
        <TabPanel value="3" sx={tabPanelStyle}>
          {data?.map((item) => (
            <div className={classes.tab}>{item.username}</div>
          ))}
        </TabPanel>
      </TabContext>
     
    </div>
  );
};



export default CustomTab;
