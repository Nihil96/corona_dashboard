import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styles from "./CountryTable.module.css";

const CountryTable = () => {
  const useStyles = makeStyles({
    table: {
      backgroundColor: "#F8F8F8",
      margin: "1rem 1rem",
    },
    h3: {
      textAlign: "center",
      color: "rgba(255, 0, 0, 0.5)",
    },
    tableHead: {
      backgroundColor: "rgba(0, 255, 0, 0.5)",
    },
    tableCell: {
      fontWeight: "bold",
    },
  });

  const classes = useStyles();

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("ogur", 159, 6.0, 24, 4.0),
    createData("sawic", 237, 9.0, 37, 4.3),
    createData("Eclr", 262, 16.0, 24, 6.0),
    createData("Cpce", 305, 3.7, 67, 4.3),
    createData("haa", 356, 16.0, 49, 3.9),
    createData("Giferbread", 356, 16.0, 49, 3.9),
    createData("Ggebread", 356, 16.0, 49, 3.9),
    createData("rbread", 356, 16.0, 49, 3.9),
    createData("Gigerbread", 356, 16.0, 49, 3.9),
    createData("Gingrbead", 356, 16.0, 49, 3.9),
    createData("Gibread", 356, 16.0, 49, 3.9),
    createData("ead", 356, 16.0, 49, 3.9),
    createData("Ggerb", 356, 16.0, 49, 3.9),
    createData("Gerb", 356, 16.0, 49, 3.9),
    createData("Gger", 356, 16.0, 49, 3.9),
  ];

  return (
    <div className={styles.container}>
      <h3 className={classes.h3}>Most affected countries</h3>
      <TableContainer component={Paper} className={classes.table}>
        <Table size="small" aria-label="a dense table">
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell className={classes.tableCell}>Country</TableCell>
              <TableCell className={classes.tableCell}>Confirmed</TableCell>
              <TableCell className={classes.tableCell}>
                Recovered&nbsp;
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.fat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CountryTable;
