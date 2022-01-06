import { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, fade, InputBase, List, ListItem } from "@material-ui/core";
// import { useSelector, useDispatch } from "react-redux"; // hooks
// import { getProducts as listProducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";
import { red } from "@material-ui/core/colors";

const useStyle = makeStyles((theme) => ({
  search: {
    borderRadius: 2,
    marginLeft: 10,
    width: "38%",
    backgroundColor: "#fff",
    display: "flex",
  },
  searchIcon: {
    marginLeft: "auto",
    padding: 5,
    display: "flex",
    color: "#2874f0",
  },
  inputRoot: {
    fontSize: 12,
    width: "100%",
  },
  inputInput: {
    paddingLeft: 20,
    width: "100%",
    color: "black",
    // color: "red",
  },
  list: {
    position: "absolute",
    color: "#000",
    background: "#FFFFFF",
    marginTop: 36,
  },
}));

const Search = () => {
  const classes = useStyle();

  return (
    <div className={classes.search}>
      <InputBase
        placeholder="Search for products, brands and more"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
    </div>
  );
};

export default Search;
