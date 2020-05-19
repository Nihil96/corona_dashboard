import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Popover from "../Popover/Popover";

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography style={{ marginLeft: "0.5rem" }} variant="h6">
            Covid-19 Dashboard
          </Typography>
          <Popover />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
