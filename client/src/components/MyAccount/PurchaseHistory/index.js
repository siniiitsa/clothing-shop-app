import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { classes } from "./style";
import MyAccountMenu from "../MyAccountMenu";
import { getOrderHistoryFetch } from "../../../actions/getOrderHistory";

class PurchaseHistory extends Component {
  async componentDidMount() {
    await this.props.fetchData("http://localhost:8080/api/history");
    console.log(this.props, "THIS PROPS");
  }

  getHistoryItem = () => {
    console.log(this.props.history);
    if (this.props.history.length == 0) {
      return (
        <h3 className={classes.notHistory}>
          You have not made purchases in our store!
        </h3>
      );
    } else {
      return this.props.history.map(goods => {
        return (
          <div className={classes.cartProduct}>
            <div>
              <h4 className={classes.historyDate}>{goods.date}</h4>
              <img
                src={goods.image}
                alt="product name"
                className={classes.productImg}
              />
            </div>
            <div className={classes.productDetails}>
              <h3 className={classes.productName}>{goods.name}</h3>

              <p className={classes.pruductColor}>
                <span className={classes.detailName}>Color:</span>
                <span>{goods.color}</span>
              </p>
              <p className={classes.productSize}>
                <span className={classes.detailName}>Size:</span>
                <span>{goods.size}</span>
              </p>

              <p className={classes.productPrice}>
                <span className={classes.detailName}>Price:</span>
                <span>{goods.price} $</span>
              </p>
            </div>
          </div>
        );
      });
    }
  };

  render() {
    return (
      <div className={classes.container}>
        <Fragment>
          <MyAccountMenu />
          {this.getHistoryItem()}
        </Fragment>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    history: state.listHistoryAll.orderHistoryArr
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => {
      dispatch(getOrderHistoryFetch(url));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchaseHistory);
