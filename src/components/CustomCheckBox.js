import React, { useEffect, useState } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from "react-router";
import { IconButton } from '@mui/material';

import { styled } from '@mui/material/styles';
import makeStyles from "@mui/styles/makeStyles";
import Checkbox,  {CheckboxProps}  from '@mui/material/Checkbox';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { createTheme, ThemeProvider } from '@mui/material';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: 6,
  width: 20,
  height: 20,
  display: 'flex', 
  alignItems: 'center',
  justifyContent: 'center', 
  
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
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
  backgroundColor: '#137cbd',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 14,
    height: 14,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
  },
});
const useStyles = makeStyles({
  select: {
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
});
function BpCheckbox() {
  return (
    <Checkbox
      sx={{
        '&:hover': { bgcolor: 'transparent' },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      
    />
  );
}
const API_URL = 'https://jsonplaceholder.typicode.com/users';


const CustomCheckBox = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [checkboxData, setCheckboxData] = useState([]);

  const arrow = () => {
    navigate("/");
  };

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setCheckboxData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    
      <div className={classes.select}>
        <div className={classes.arrow}>
          <IconButton onClick={arrow}>
            <ArrowBackIcon />
          </IconButton>
        </div>
        <FormGroup>
          {checkboxData.map((item, index) => (
            <FormControlLabel
              key={index}
              control={<BpCheckbox  />}
              label={item.name}
            />
          ))}
        </FormGroup>
        <>
        </>
      </div>
   
  );
};

export default CustomCheckBox;
