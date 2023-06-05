import React from "react";
import Select, { components } from "react-select";
import { useNavigate } from "react-router";
import makeStyles from "@mui/styles/makeStyles";


import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";

const useStyles = makeStyles({
  select: {
    margin: "10px",
    padding: "10px",
    width: "1300px",
    background: "#FDBDA2",
    height: "720px",
  },
  select1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  arrow: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  h2: {
    margin: "10px",
  },
  drop: {
    width: "20px",
    height: "20px",
    marginRight: "10px",
    
  },
  label:{
    display:"flex",
  
  }
});

const imageUrl = "https://cdn.onlinewebfonts.com/svg/img_87510.png";

const DropdownIndicator = (props) => {
  const classes = useStyles();

  return (
    <>
      <img src={imageUrl} className={classes.drop} alt="Google Photo" />
    </>
  );
};

const customStyles = {
  control: (provided) => ({
    ...provided,
    width: "600px",
    height: "70px",
    background: "#1976d2",
    borderRadius: "10px",
    border: "3px solid white",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
    cursor: "none",
  }),
  menu: (provided) => ({
    ...provided,
    width: "600px",
    height: "220px",
    marginBottom: "20px",
    borderRadius: "10px",
    
  }),
  option: (provided, state) => ({
    ...provided,
   
  
    cursor: "pointer",
   
  }),
};

const Select1 = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const arrow = () => {
    navigate("/");
  };

  
    const options = [
      {
        label: "Select",
        options: [
          { value: "pre-program", label: "Pre-Program" },
          { value: "Post-Program", label: "Post-Program" },
          { value: "Mid-Program", label: "Mid-Program" },
          { value: "Qtr1", label: "Qtr1" },
          { value: "Qtr2", label: "Qtr2" }
        ],
      },
     
    
  ];

  const formatGroupLabel = (data) => (
    <div className={classes.label}>
      <span style={{color:"#1976d2",}}>{data.label}</span>
      <img src={imageUrl} className={classes.drop} alt="Google Photo" style={{paddingLeft:"520px"}} />
    </div>
  );

  return (
    <div className={classes.select}>
      <div className={classes.arrow}>
        <IconButton onClick={arrow}>
          <ArrowBackIcon />
        </IconButton>
        <h2 className={classes.h2}>Select Time Period</h2>
      </div>
      <div className={classes.select1}>
        <Select
          options={options}
          defaultValue={options[0].options[0]}
          styles={customStyles}
         formatGroupLabel={formatGroupLabel}
          components={{ DropdownIndicator, IndicatorSeparator: () => null }}
        />
      </div>
    </div>
  );
};

export default Select1;
