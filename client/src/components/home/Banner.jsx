import React from "react";
import { makeStyles } from "@material-ui/styles";

import Carousel from "react-material-ui-carousel";
import { bannerData } from "../../constants/data";

const useStyle = makeStyles({
  image: {
    width: "100%",
    height: 280,
  },
  carousel: {
    marginTop: 10,
  },
});

const Banner = () => {
  const classes = useStyle();
  return (
    <Carousel
      autoPlay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      navButtonsProps={{
        style: {
          color: "#494949",
          backgroundColor: "#FFFFFF",
          borderRadius: 0,
          margin: 0,
          width: 50,
        },
      }}
      className={classes.carousel}
    >
      {bannerData.map((image) => (
        <img src={image} className={classes.image} alt="carousel" />
      ))}
    </Carousel>
  );
};

export default Banner;
