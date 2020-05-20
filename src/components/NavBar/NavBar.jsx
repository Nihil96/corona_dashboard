import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Popover from "../Popover/Popover";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography className={styles.typo} variant="h6">
            Covid-19 Dashboard
          </Typography>
          <Popover />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
