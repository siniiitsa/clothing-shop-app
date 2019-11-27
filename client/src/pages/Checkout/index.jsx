import React, { Fragment } from 'react';
import CheckoutBox from '../../components/Checkout/index';
import Header from '../../components/Header';
import { Helmet } from 'react-helmet';
import PurchaseSuccessModal from '../../components/Checkout/PurchaseSuccessModal';
import {connect} from 'react-redux'

const Cart = ({succesModalActive}) => {
  const successModal = succesModalActive ? <PurchaseSuccessModal /> : null;
  console.log(successModal);
  return (
    <Fragment>
      <Helmet>
        <title>Checkout page!</title>
      </Helmet>
      <Fragment>
        <Header />
        {successModal}
        <CheckoutBox />
      </Fragment>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    succesModalActive: state.active.checkoutModalActive
  }
}

export default connect(mapStateToProps)(Cart);
