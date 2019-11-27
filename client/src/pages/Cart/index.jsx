import React, { Fragment } from 'react';
import CartSummary from '../../components/Cart/CartSummary';
import Header from '../../components/Header';
import { classes } from './style';
import CartProduct from '../../components/Cart/CartProduct';
import Container from '../../components/Container';
import Button from '../../components/Button';
import { connect } from 'react-redux';
import { updateCart } from '../../actions/detailGoodsAction';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Cart = ({ productsInCart, prevPagePath }) => {
  const {
    products,
    mainContent,
    mainContentWrapper,
    summarySettings,
    emptyCartMsg,
    emptyCartMsgIcon,
    emptyCartMsgText,
    keepShoppingBtn,
    cartHeading
  } = classes;

  const emptyCartMessage = (
    <div className={emptyCartMsg}>
      <i className={`fas fa-shopping-bag ${emptyCartMsgIcon}`}></i>
      <p className={emptyCartMsgText}>Your shopping bag is empty!</p>
    </div>
  );

  const createCartProducts = products => {
    return products.length
      ? products.map(product => <CartProduct key={product.id} {...product} />)
      : emptyCartMessage;
  };

  const cartProductsData = createCartProducts(productsInCart);
  const summary = productsInCart.length ? <CartSummary settings={summarySettings} /> : null;

  return (
    <Fragment>
      <Helmet>
        <title>Shopping Bag</title>
      </Helmet>
      <Header />
      <main className={mainContent}>
        <Container>
          <Link to={prevPagePath}>
            <Button
              btnSettings={keepShoppingBtn}
              name='KEEP SHOPING'
              href='/product-list'
              black
            />
          </Link>
          <div className={mainContentWrapper}>
            <h1 className={cartHeading}>Shopping bag</h1>
            <section className={products}>{cartProductsData}</section>
            {summary}
          </div>
        </Container>
      </main>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    productsInCart: state.active.shoppingBag,
    prevPagePath: state.active.prevPagePath
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCart: newCart => dispatch(updateCart(newCart))
  };
};

export default connect(mapStateToProps)(Cart);
