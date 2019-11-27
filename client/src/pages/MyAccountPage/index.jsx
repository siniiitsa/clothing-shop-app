import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import MyAccountApp from "../../components/MyAccount";
import WelcomePage from "../../components/MyAccount/Main";
import MyProfile from "../../components/MyAccount/MyProfile";
import PurchaseHistory from "../../components/MyAccount/PurchaseHistory";
import AddressBook from "../../components/MyAccount/AddressBook";
import MyAccountError from "../../components/MyAccount/Error";
import MainPage from "../MainPage";

const MyAccountPage = () => {
  const userAuth = JSON.parse(localStorage.getItem("userAuth"));

  return (
    <Fragment>
      <Helmet>
        <title>My MyAccount</title>
      </Helmet>
      <div>
        {!userAuth && (
          <>
            <MainPage />
          </>
        )}
      </div>

      <MyAccountApp>
        <Switch>
          <Route exact path="/myaccount/main" component={WelcomePage} />
          <Route exact path="/myaccount/myprofile" component={MyProfile} />
          <Route exact path="/myaccount/history" component={PurchaseHistory} />
          <Route exact path="/myaccount/addressbook" component={AddressBook} />
          <Route exact path="/myaccount/*" component={MyAccountError} />
        </Switch>
      </MyAccountApp>
    </Fragment>
  );
};

export default MyAccountPage;
