import React, { Component , Fragment } from "react";

import MyAccountMenu from "../MyAccountMenu";


class MyAccountError extends Component {
  
  render() {
    return (
      <Fragment>
        <MyAccountMenu />
        <h1>My Wishlist</h1>
      </Fragment>
      
    )
  }
}

export default MyAccountError;
