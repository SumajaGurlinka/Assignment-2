import React from "react";
import { useEffect } from "react";
import { Card, CardContent, Grid, Typography, Box } from '@mui/material';
import { useState } from "react";
import { styled } from '@mui/material/styles';
import { Radio, FormControlLabel, RadioGroup, FormControl } from "@mui/material";
import { Avatar, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router";
import makeStyles from "@mui/styles/makeStyles";

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 16,
  height: 16,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#f5f8fa', // Change blue to white
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#1976d2', 
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    margin: "0px",
    borderradius: "0px",
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
    transform: "scale(1.55)", 
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
  },
});

function BpRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

const useStyles = makeStyles({
  select: {
    margin: "10px",
    padding: "10px",
    width: "1300px",
    background: "#F2EBE1",
    height: "720px",
  },
  icon:{
    backgroundColor: '#1976d2', 
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  }
});

const API_URL = "https://jsonplaceholder.typicode.com/users";

const CustomRadio = (props) => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  const navigate = useNavigate();

  const arrow = () => {
    navigate("/");
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        if (data && data.length > 0) {
          setSelectedValue(data[0].name);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={classes.select}>
      <div className={classes.arrow}>
        <IconButton onClick={arrow}>
          <ArrowBackIcon />
        </IconButton>
      </div>
      
      <FormControl component="fieldset">
        <RadioGroup
        
          value={selectedValue}
          onChange={handleChange}
        >
          {data?.map((option, index) => (
            <FormControlLabel
              key={index}
              control={<BpRadio />}
              label={option.name}
              value={option.name}
            />
          ))}
        </RadioGroup>
      </FormControl>
    
    </div>
  );
};

export default CustomRadio;
