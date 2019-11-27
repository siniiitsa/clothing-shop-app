import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { classes } from "./style";

class MyAccountMenu extends Component {
  isActive(category) {
    return window.location.pathname.split("/").includes(category)
      ? classes.selectedItem
      : "";
  }
  render() {
    return (
      <>
        <NavLink exact to="/myaccount/main" className={classes.h1}>
          My account
        </NavLink>
        <nav className={classes.navbarMenu}>
          <NavLink
            exact
            to="/myaccount/myprofile"
            onClick={() => this.isActive("myprofile")}
            className={`${classes.navbarMenuItem} ${this.isActive(
              "myprofile"
            )}`}>
            My Profile
          </NavLink>
          <NavLink
            to="/myaccount/history"
            className={`${classes.navbarMenuItem} ${this.isActive("history")}`}>
            Purchase history
          </NavLink>
          <NavLink
            to="/myaccount/addressbook"
            className={`${classes.navbarMenuItem} ${this.isActive(
              "addressbook"
            )}`}>
            Address book
          </NavLink>
        </nav>
      </>
    );
  }
}

export default MyAccountMenu;
