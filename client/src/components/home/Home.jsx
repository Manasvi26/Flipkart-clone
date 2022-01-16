import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Banner from "./Banner";
import NavBar from "./NavBar";
import Slide from "./Slide";

const useStyle = makeStyles({
  component: {
    padding: 10,
    background: "#F2F2F2",
  },
});

const Home = () => {
  const classes = useStyle();
  return (
    <div>
      <NavBar />
      <Box className={classes.component}>
        <Banner />
      </Box>
      <Slide />
    </div>
  );
};

export default Home;
