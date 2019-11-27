import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { classes } from "./style";

class ProductItemSearch extends Component {
  getGoodsItems = () => {
    return this.props.goodsList.map(goods => {
      return (
        <Link
          className={classes.linkItem}
          key={goods.id}
          to={`/detail/${goods.id}`}>
          <li className={classes.productItem}>
            <img
              className={classes.itemImg}
              src={goods.image[0]}
              alt={goods.image}
            />
            <div className={classes.goodsInfoBlock}>
              <p className={classes.goodsTitle}>{goods.name}</p>
              <p className={classes.goodsPrise}>{goods.price}$</p>
              <p className={classes.goodsDetail} to={`/detail/${goods.id}`}>
                Detail...
              </p>
            </div>
          </li>
        </Link>
      );
    });
  };

  render() {
    return (
      <Fragment className={`${classes.container} ${this.props.settingClass}`}>
        {this.getGoodsItems()}
      </Fragment>
    );
  }
}
export default ProductItemSearch;
