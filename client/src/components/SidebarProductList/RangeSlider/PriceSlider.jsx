import React, { Component } from "react";
import { connect } from "react-redux";
import { HANDL_SHENGE_PRICE } from "../../../actions/getGoodsCategoryAction";
import {
  filterGoodsByPrice,
  getPriceRange
} from "../../../actions/filterGoods";
import InputRange from "react-input-range";
import { classes } from "./style";

class PriceSlider extends Component {
  componentDidUpdate() {
    this.props.getPriceRange();

  }
  componentDidMount() {
    this.props.getPriceRange();
  }
  render() {
    const { value, priceRange } = this.props;
    console.log(value);
    return (
      <div className={classes.priceContainer}>
        <p className={classes.priceNum}>
          {value
            ? `$${value.min} - $${value.max}`
            : `$${priceRange.min} - $${priceRange.max}`}
        </p>
        <p
          className={classes.btn}
          onClick={() => {
            this.props.filterGoodsByPrice(value);
          }}>
          OK
        </p>
        <InputRange
          maxValue={priceRange.max}
          minValue={priceRange.min}
          value={value ? value : priceRange}
          onChange={value => {
            this.props.handleChange(value);
          }}
        />
        <span
          className={classes.resetfilterBtn}
          onClick={() => {
            this.props.filterGoodsByPrice(priceRange);
            this.props.handleChange(priceRange);
          }}>
          Reset price
        </span>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    value: state.allCategories.priceValue,
    priceRange: state.allGoods.priceRange
  };
};

const mapDispanchToProps = dispatch => {
  return {
    handleChange: value =>
      dispatch({
        type: HANDL_SHENGE_PRICE,
        payload: value
      }),
    filterGoodsByPrice: priceRange => dispatch(filterGoodsByPrice(priceRange)),
    getPriceRange: () => dispatch(getPriceRange())
  };
};
export default connect(
  mapStateToProps,
  mapDispanchToProps
)(PriceSlider);
