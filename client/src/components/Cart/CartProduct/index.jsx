import React from 'react';
import { classes } from './style';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import {
  removeProductFromCart,
  decCartProductQuantity,
  incCartProductQuantity,
  saveUserCart
} from '../../../actions/detailGoodsAction';

const CartProduct = ({
  id,
  image,
  name,
  reference,
  price,
  quantity,
  color,
  size,
  removeProductFromCart,
  incCartProductQuantity,
  decCartProductQuantity,
  saveUserCart
}) => {
  const totalPrice = price * quantity;

  return (
    <div className={classes.cartProduct}>
      <Link to={`/detail/${id}`}>
        <img src={image} alt='product name' className={classes.productImg} />
      </Link>
      <div className={classes.productDetails}>
        <h3 className={classes.productName}>{name}</h3>
        <p className={classes.ref}>REF: {reference}</p>
        <p className={classes.pruductColor}>
          <span className={classes.detailName}>Color:</span>
          <span>{color}</span>
        </p>
        <p className={classes.productSize}>
          <span className={classes.detailName}>Size:</span>
          <span>{size}</span>
        </p>
        <p className={classes.productQuant}>
          <span className={classes.detailName}>Quantity:</span>
          <span className={classes.productQuantSelectWrapper}>
            <button
              className={classes.productQuantSelectBtn}
              onClick={() => {
                decCartProductQuantity(id);
                saveUserCart();
              }}>
              -
            </button>
            {quantity}
            <button
              className={classes.productQuantSelectBtn}
              onClick={() => {
                incCartProductQuantity(id);
                saveUserCart();
              }}>
              +
            </button>
          </span>
        </p>
        <p className={classes.productPrice}>
          <span className={classes.detailName}>Price:</span>
          <span>{price} $</span>
        </p>
        <p className={classes.TotalProductPrice}>
          <span className={classes.detailName}>Total:</span>
          <span>{totalPrice} $</span>
        </p>
      </div>
      <a
        className={classes.removeProductBig}
        onClick={() => {
          removeProductFromCart(id);
          saveUserCart();
        }}>
        Remove from basket
      </a>
      <a
        className={classes.removeProductSmall}
        onClick={() => {
          removeProductFromCart(id);
          saveUserCart();
        }}>
        <i className='fas fa-times'></i>
      </a>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeProductFromCart: productId =>
      dispatch(removeProductFromCart(productId)),
    decCartProductQuantity: productId =>
      dispatch(decCartProductQuantity(productId)),
    incCartProductQuantity: productId =>
      dispatch(incCartProductQuantity(productId)),
    saveUserCart: () => dispatch(saveUserCart())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CartProduct);
