import React from "react";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PersonIcon from "@material-ui/icons/Person";
import styles from "./Popover.module.css";

export default function SimplePopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
        className={styles.button}
      >
        <PersonIcon /> &nbsp; <Typography>Author</Typography>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 800, left: 700 }}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        className={styles.popover}
      >
        <Typography className={styles.typography}>
          <Typography>Hristijan Kostadinoski &copy; 2020</Typography>
          <a
            style={{
              fontSize: "1.2rem",
              textDecoration: "none",
              color: "black",
            }}
            href="https://github.com/Nihil96?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <br />
          <a
            style={{
              fontSize: "1.2rem",
              textDecoration: "none",
              color: "black",
            }}
            href="#"
          >
            Portfolio
          </a>
        </Typography>
      </Popover>
    </div>
  );
}
