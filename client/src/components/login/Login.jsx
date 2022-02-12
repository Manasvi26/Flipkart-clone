import React from "react";
// import Dialog from "@mui/material/Dialog";
// import DialogContent from "@mui/material/DialogContent";
// import { Dialog, DialogContent } from "@material-ui/core";
import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const useStyle = makeStyles({
  component: {
    height: "70vh",
    width: "90vh",
    maxWidth: "unset !important",
  },
  image: {
    backgroundImage: `url(${"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"})`,
    background: "#2874f0",
    backgroundPosition: "center 85%",
    backgroundRepeat: "no-repeat",
    height: "70vh",
    width: "40%",
    padding: "45px 35px",
    "& > *": {
      color: "#FFFFFF",
      fontWeight: 600,
    },
  },
  login: {
    padding: "25px 35px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    "& > *": {
      marginTop: 20,
    },
  },
  loginbtn: {
    textTransform: "none",
    background: "#FB641B",
    color: "#fff",
    height: 48,
    borderRadius: 2,
  },
  requestbtn: {
    textTransform: "none",
    background: "#fff",
    color: "#2874f0",
    height: 48,
    borderRadius: 2,
    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)",
  },
  text: {
    color: "#878787",
    fontSize: 12,
  },
  createText: {
    margin: "auto 0 5px 0",
    textAlign: "center",
    color: "#2874f0",
    fontWeight: 600,
    fontSize: 14,
    cursor: "pointer",
  },
  error: {
    fontSize: 10,
    color: "#ff6161",
    lineHeight: 0,
    marginTop: 10,
    fontWeight: 600,
  },
});

const LoginDialog = ({ open, setOpen }) => {
  const classes = useStyle();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent className={classes.component}>
          <Box style={{ display: "flex" }}>
            <Box className={classes.image}>
              <Typography variant="h5">glgldkjglkdjg</Typography>
              <Typography style={{ marginTop: 20 }}>
                mfd;gdf;bm;dmb;fdmn;n,;lndn;,n
              </Typography>
            </Box>

            <Box className={classes.login}>
              <TextField name="username" label="Enter Email/Mobile number" />

              <Typography className={classes.error}>
                Please enter valid Email ID/Mobile number
              </Typography>

              <TextField name="password" label="Enter Password" />
              <Typography className={classes.text}>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Typography>
              <Button className={classes.loginbtn}>Login</Button>
              <Typography
                className={classes.text}
                style={{ textAlign: "center" }}
              >
                OR
              </Typography>
              <Button className={classes.requestbtn}>Request OTP</Button>
              <Typography className={classes.createText}>
                New to Flipkart? Create an account
              </Typography>
            </Box>

            <Box className={classes.login}>
              <TextField name="firstname" label="Enter Firstname" />
              <TextField name="lastname" label="Enter Lastname" />
              <TextField name="username" label="Enter Username" />
              <TextField name="email" label="Enter Email" />
              <TextField name="password" label="Enter Password" />
              <TextField name="phone" label="Enter Phone" />
              <Button className={classes.loginbtn}>Continue</Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LoginDialog;
