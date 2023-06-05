import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from "@mui/icons-material/Add";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  InputAdornment,
  Button,
  Grid,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import { IconButton } from "@mui/material";
const useStyles = makeStyles({
  select: {
    margin: "10px",
    padding: "10px",
    width: "1300px",
    background: "#F2EBE1",
    height: "720px",
  },
  Time: {
    color: "black",
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
  icon: {
    borderRadius: "4px",
    backgroundColor: "#f5f5f5",
    padding: "8px",
  },
  characters: {
    paddingLeft: "430px",

    color: "black",
  },
  dialogPaper:{
  
      "& ::-webkit-scrollbar": {
        width: "8px",
       
      },
      "& ::-webkit-scrollbar-track": {
        background: "#f1f1f1",
        
      },
      "& ::-webkit-scrollbar-thumb": {
        background: "#888",
        borderRadius:"10px"
      },
      "& ::-webkit-scrollbar-thumb:hover": {
        background: "#555",
      },
    },
  

  Time: {
    marginBottom: "10px",
  },
});
const Dialogcustom = () => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [Date, setDate] = useState("");
  const [Url, setUrl] = useState("");
  const [Time, setTime] = useState("");

  const [translate, setTranslate] = useState("");

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const [dialogOpen, setDialogOpen] = useState(false);
  const arrow = () => {
    navigate("/Dialog1");
  };
  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };
  const characterLimit = 150;
  const charactersRemaining = characterLimit - translate.length;

  return (
    <div className={classes.select}>
      <div className={classes.arrow}>
        <IconButton onClick={arrow}>
          <ArrowBackIcon />
        </IconButton>
      </div>
      <div>
        <Button sx={{background:"#FDBDA2",width:"120px",margin:"10px"}} onClick={handleDialogOpen}>Dialog</Button>
        

        <Dialog
          open={open}
          onClose={handleDialogClose}
          fullWidth
          classes={{ paper: classes.dialogPaper }}
        >
          <DialogTitle
            sx={{
              height: "30px",
              background: "#FCFCFC",
              fontSize: "30px",
              fontweight: "bold",
              color: "blue",
              position: "-webkit-sticky",
              zindex: "1",
              position: "sticky",
              top: "0",
            }}
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            schedule appointment
            
          </DialogTitle>
         

          <DialogContent>
            <div className={classes.Time}>Time</div>
            <TextField
              placeholder="Select Time"
              value={Time}
              onChange={(event) => setTime(event.target.value)}
              variant="outlined"
              sx={{
                marginTop: "5px",
                marginBottom: "5px",
                width: "50vh",

                "& .MuiOutlinedInput-root": {
                  border: "none",
                  borderRadius: "10px",
                },
                "& .MuiInputLabel-outlined": {
                  color: "grey",
                },
                "& .MuiOutlinedInput-input": {
                  backgroundColor: "#f5f5f5",
                  borderRadius: "10px",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#f5f5f5",
                },
              }}
            />
            <div className={classes.Time}>Date</div>

            <TextField
           
              placeholder="Select Date"
              value={Date}
              onChange={(e) => setDate(e.target.value)}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton className={classes.icon}>
                      <EventIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                marginTop: "5px",
                marginBottom: "5px",
                width: "50vh",

                "& .MuiOutlinedInput-root": {
                  border: "none",
                },
                "& .MuiInputLabel-outlined": {
                  color: "grey",
                },
                "& .MuiOutlinedInput-input": {
                  backgroundColor: "#f5f5f5",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#f5f5f5",
                },
              }}
            />

            <div className={classes.Time}>Appointment Details</div>
            <TextField
           
              placeholder="Enter Appointment Details"
              multiline
              id="outlined-multiline-static"
              rows={8}
              value={translate}
              onChange={(event) => setTranslate(event.target.value)}
              variant="outlined"
              sx={{
                marginTop: "5px",
                marginBottom: "5px",
                width: "90%",
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#f5f5f5",
                  borderRadius: "10px",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
              }}
            />
            <div className={classes.characters}>{charactersRemaining}</div>

            <div className={classes.Time}>Meeting URL</div>
            <TextField
              placeholder="Enter the URL"
              value={Url}
              onChange={(e) => setUrl(e.target.value)}
              variant="outlined"
              sx={{
                marginTop: "5px",
                marginBottom: "5px",
                width: "90%",

                "& .MuiOutlinedInput-root": {
                  border: "none",
                  borderRadius: "10px",
                },
                "& .MuiInputLabel-outlined": {
                  color: "grey",
                },
                "& .MuiOutlinedInput-input": {
                  backgroundColor: "#f5f5f5",
                  borderRadius: "10px",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#f5f5f5",
                },
              }}
            />
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
                  textTransform: "none",
                }}
                onClick={handleDialogClose}
              >
                Cancel
              </Button>
              <Button
                style={{ fontFamily: "Manrope, sans-serif" }}
                sx={{
                  background: "green",
                  paddingBottom: "50px",
                  paddingTop: "50px",
                  padding: "15px",
                  width: "220px",
                  borderRadius: "20px",
                  margin: "20px",
                  fontweight: "bold",
                  color: "white",
                  textTransform: "none",
                }}
              >
                Leave
              </Button>
            </div>
          </DialogActions>
        </Dialog>
      </div>
      {open && (
        <IconButton
          sx={{
            position: "absolute",
            top: "30px",
            marginLeft: "870px",
            zIndex:"99999"
          }}
          onClick={handleDialogClose}
        >
          <CloseIcon sx={{fontSize:"30px",}} />
        </IconButton>
      )}
    </div>
  );
};

export default Dialogcustom;
