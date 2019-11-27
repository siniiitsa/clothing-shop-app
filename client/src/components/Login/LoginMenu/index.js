import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { classes } from "./style";


class MyAccountMenu extends Component {
  render() {

    return (
      <>
        <nav className={classes.navbarMenu}>
          <NavLink exact to="/login" className={classes.navbarMenuItem + " " + classes.selectedItem}>
            Login
            </NavLink>
          <NavLink to="/register" className={classes.navbarMenuItem}>
            Register
            </NavLink>
        </nav>
      </>
    );
  }
}



export default MyAccountMenu;
