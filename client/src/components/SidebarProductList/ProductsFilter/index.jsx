import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PriseSlider from "../RangeSlider/PriceSlider";
import { classes } from "./style";
import {
  filterGoodsByCategory,
  filterGoodsByColor,
  filterGoodsBySubcategory
} from "../../../actions/filterGoods";
import { getGoods } from "../../../actions/getGoodsAction";

import {
  getGoodsCategories,
  SHOW_CATEGORU_MENU,
  SHOW_COLOR_MENU,
  WINDOW_DESCTOP,
  SHOW_PRICE_MENU
} from "../../../actions/getGoodsCategoryAction";

class ProductsFilter extends Component {
  componentDidUpdate() {
    this.getGoodsSubCategoryItems()
    this.getColorsItems()
  }
  componentDidMount() {
    if (window.location.pathname === "/product-list/mens") {
      return this.props.getGoodsCategories("mens");
    } else if (window.location.pathname === "/product-list/womens") {
      return this.props.getGoodsCategories("womens");
    } else if (window.location.pathname === "/product-list/accessories") {
      return this.props.getGoodsCategories("accessories");
    }
    this.categoiesMenu()
    this.priceMenu()
  }

  getGoodsSubCategoryItems = category => {
    let path = null;
    if (window.location.pathname === "/product-list/mens") {
      path = "/product-list/mens";
    } else if (window.location.pathname === "/product-list/womens") {
      path = "/product-list/womens";
    } else if (window.location.pathname === "/product-list/accessories") {
      path = "/product-list/accessories";
    }
    return this.props.subCategoryList.map(subSategory => {
      console.log(subSategory, "--------------");
      return (
        <li
          key={subSategory}
          onClick={() => {
            this.props.filterGoodsBySubcategory(category, subSategory);
          }}>
          <Link className={`${classes.sybCategoryLink} ${classes.sectionItem}`}>
            {" "}
            - {subSategory}
          </Link>
        </li>
      );
    });
  };

  getGoodsCategoryItems = () => {
    let path = null;
    if (window.location.pathname === "/product-list/mens") {
      path = "/product-list/mens";
    } else if (window.location.pathname === "/product-list/womens") {
      path = "/product-list/womens";
    } else if (window.location.pathname === "/product-list/accessories") {
      path = "/product-list/accessories";
    }
    return this.props.categoriesList.map(category => {
      console.log(category);
      if (window.location.pathname.split("/").includes("accessories")) {
        return (
          <li
            key={category}
            onClick={() => this.props.filterGoodsByCategory(category)}>
            <Link
              className={`${classes.categorySectionlinck} ${classes.sectionItem}`}>
              {category} {this.getGoodsSubCategoryItems(category)}
            </Link>
          </li>
        );
      } else {
        return (
          <li
            key={category}
            onClick={() => this.props.filterGoodsByCategory(category)}>
            <Link
              className={`${classes.categorySectionlinck} ${classes.sectionItem}`}>
              {category}
            </Link>
          </li>
        );
      }
    });
  };

  getPath = () => {
    let path = null;
    if (window.location.pathname === "/product-list/mens") {
      path = "/product-list/mens";
    } else if (window.location.pathname === "/product-list/womens") {
      path = "/product-list/womens";
    } else if (window.location.pathname === "/product-list/accessories") {
      path = "/product-list/accessories";
    }
    return path;
  };

  getColorsItems = () => {
    return this.props.colorsList.map(color => {
      return (
        <li
          onClick={() => this.props.filterGoodsByColor(color)}
          key={color}
          className={classes.colorItem}>
          <div
            style={{ backgroundColor: `${color}` }}
            className={classes.colorCircle}></div>
          <Link
            className={`${classes.sectionItem} ${classes.colorSectionItem}`}>
            {color}
          </Link>
        </li>
      );
    });
  };

  render() {
    const {
      categorySection,
      sectionTitle,
      categorySectionTitle,
      categorySectionItem,
      categorySectionlinck,
      sectionItem,
      colorSection,
      colorSectionTitle,
      colorSectionItem,
      colorCircle,
      colorItem,
      priceSection,
      priceSectionTitle,
      priceDiapazon,
      categoriesMenu,
      mobileCategoiFilter,
      mobileColor,
      resetfilterBtn
    } = classes;

    const whatProductsFilterReset = window.location.pathname
      .split("/")
      .includes("mens")
      ? () => this.props.getGoods("mens")
      : () => this.props.getGoods("womens");

    const resetAccessoryFilters = () => this.props.getGoods("accessories");

    const mainReset = () => {
      if(window.location.pathname.split("/").includes("mens")) {
        return whatProductsFilterReset()
      } else if (window.location.pathname.split("/").includes("womens")){
        return whatProductsFilterReset()
      } else {
        return resetAccessoryFilters()
      }
    }

    const categoiesMenu = (
      <div className={categorySection}>
        <p className={`${categorySectionTitle} ${sectionTitle}`}>
          {this.props.categoryName}
        </p>
        <Link
          to={`${this.getPath()}`}
          onClick = {() => {mainReset()}}
          className={`${categorySectionItem} ${sectionItem}`}>
          View All
        </Link>
        <div>
          <p
            className={mobileCategoiFilter}
            onClick={() => this.props.showCategoru()}>
            Categories
          </p>
          {this.props.showCategoriMenu ? (
            <i class="fas fa-angle-up"></i>
          ) : (
            <i class="fas fa-angle-down"></i>
          )}
        </div>
        {this.props.showCategoriMenu ? (
          <ul className={categoriesMenu}>{this.getGoodsCategoryItems()}</ul>
        ) : null}
      </div>
    );
    const whatProductsFilterColor = window.location.pathname
      .split("/")
      .includes("accessories")
      ? () => (
          <span
            className={`${categorySectionItem} ${sectionItem} ${resetfilterBtn}`}
            onClick={resetAccessoryFilters}>
            Reset All
          </span>
        )
      : () => (
          <div className={colorSection}>
            <div className={mobileColor}>
              <p
                className={`${sectionTitle} ${colorSectionTitle}`}
                onClick={() => this.props.showColor()}>
                colors
              </p>
              {this.props.showColorMenu ? (
                <i class="fas fa-angle-up"></i>
              ) : (
                <i class="fas fa-angle-down"></i>
              )}
            </div>
            {this.props.showColorMenu ? <ul>{this.getColorsItems()}</ul> : ""}
            <span
              className={`${categorySectionItem} ${sectionItem}`}
              onClick={whatProductsFilterReset}>
              Reset Colors
            </span>
          </div>
        );

    const priceMenu = () => {
      return (
        <div className={priceSection}>
          <div className={mobileColor}>
            <p
              className={`${sectionTitle} ${priceSectionTitle}`}
              onClick={() => this.props.showPrise()}>
              price
            </p>
            {this.props.showPriceMenu ? (
              <i class="fas fa-angle-up"></i>
            ) : (
              <i class="fas fa-angle-down"></i>
            )}
          </div>
          {this.props.showPriceMenu ? <PriseSlider /> : ""}
        </div>
      )
    };

    window.addEventListener("resize", () => {
      if (document.body.clientWidth > 768) {
        this.props.showDesctop();
      }
    });
    return (
      <div>
        {categoiesMenu}
        {whatProductsFilterColor()}
        {priceMenu()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showPriceMenu: state.allCategories.isShowPriceMenu,
    showCategoriMenu: state.allCategories.isShowCategoriMenu,
    showColorMenu: state.allCategories.isShowColorMenu,
    categoriesList: state.allCategories.categoriesList,
    categoryName: state.allCategories.categoryName,
    colorsList: state.allCategories.colorsList,
    subCategoryList: state.allCategories.subCategoryList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getGoodsCategories: url => dispatch(getGoodsCategories(url)),
    showCategoru: () => dispatch({ type: SHOW_CATEGORU_MENU }),
    showDesctop: () => dispatch({ type: WINDOW_DESCTOP }),
    showColor: () => dispatch({ type: SHOW_COLOR_MENU }),
    showPrise: () => dispatch({ type: SHOW_PRICE_MENU }),
    filterGoodsByCategory: (category, subCategory) =>
      dispatch(filterGoodsByCategory(category, subCategory)),
    filterGoodsByColor: color => dispatch(filterGoodsByColor(color)),
    filterGoodsBySubcategory: (category, subCategory) =>
      dispatch(filterGoodsBySubcategory(category, subCategory)),
    getGoods: url => dispatch(getGoods(url))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsFilter);
