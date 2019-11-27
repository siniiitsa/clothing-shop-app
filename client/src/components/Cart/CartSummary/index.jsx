import React from 'react';
import { classes } from './style';
import Button from '../../Button';
import { connect } from 'react-redux';
import { setCheckoutTotal } from '../../../actions/detailGoodsAction';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const CartSummary = ({ settings, productsInCart, setCheckoutTotal }) => {
  const {
    summaryContainer,
    cartSummary,
    header,
    headerHeading,
    discountText,
    discountField,
    orderDetails,
    checkoutBtn,
    orderDetailsItem
  } = classes;

  const summaryContainerClasses = settings
    ? `${summaryContainer} ${settings}`
    : summaryContainer;

  const orderValue = productsInCart.reduce(
    (value, product) => value + +product.price * product.quantity,
    0
  );

  const checkoutTotal = orderValue;

  return (
    <div className={summaryContainerClasses}>
      <form className={cartSummary}>
        <header className={header}>
          <h2 className={headerHeading}>SHOPPING BAG TOTAL</h2>
        </header>
        <section className={orderDetails}>
          <span className={orderDetailsItem}>
            <span>ORDER VALUE</span>
            <span>{orderValue} $</span>
          </span>
          <span className={orderDetailsItem}>
            <span>DELIVERY</span>
            <span>FREE</span>
          </span>
          <span className={`${orderDetailsItem} bold`}>
            <span>TOTAL</span>
            <span>{orderValue} $</span>
          </span>
        </section>
        <Link to='/cart/checkout'>
          <Button
            name='CHECKOUT'
            btnSettings={checkoutBtn}
            black
            clickHandler={() => setCheckoutTotal(checkoutTotal)}
          />
        </Link>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    productsInCart: state.active.shoppingBag
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCheckoutTotal: totalValue => dispatch(setCheckoutTotal(totalValue))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartSummary);
