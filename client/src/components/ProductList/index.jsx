import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "./ProductItem";
import { classes } from "./style";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import { SHOW_FILTER_MENU } from "../../actions/getGoodsCategoryAction";

class ProductList extends Component {
  render() {
    const { productListContainer, categoryName, productList, filter } = classes;

    const nameCategory = () => {
      if (window.location.pathname === "/product-list/mens") {
        return "Man";
      } else if (window.location.pathname === "/product-list/womens") {
        return "Woman";
      } else if (window.location.pathname === "/product-list/accessories") {
        return "Accessory";
      }
    };
    return (
      <div className={productListContainer}>
        <h3 className={categoryName}>{nameCategory()}</h3>
        <h3 className={filter} onClick={() => this.props.showFilter()}>
          Filters
        </h3>
        <ul className={productList}>
          <ProductItem />
        </ul>
        <ScrollUpButton />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    showFilter: () => dispatch({ type: SHOW_FILTER_MENU })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ProductList);
