import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
  header: {
    background: "#111111",
  },
  tablinks: {
    color: "#ffffff",
    margin: "10px",
    textDecoration: "none",
    fontSize: 20,
  },
});

const NavBar = () => {
  const classes = useStyle();

  return (
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <NavLink className={classes.tablinks} to="./" exact>
          NavBar
        </NavLink>
        <NavLink className={classes.tablinks} to="all" exact>
          All Users
        </NavLink>
        <NavLink className={classes.tablinks} to="add" exact>
          Add User
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
