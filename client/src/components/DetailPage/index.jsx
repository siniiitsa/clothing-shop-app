import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { classes } from "./style";
import Sizes from "./ClothesSizes";
import Colors from "./ClothesColors";
import Button from "../Button/index";
import Header from "../Header";
import {
  getGoodsDetailID,
  addToCart,
  saveUserCart,
  setColor, setSize
} from "../../actions/detailGoodsAction";
import GoodsSlider from "./GoodsSlider";


class DetailPageComponent extends Component {
  state = {
    data: null,
    chosenColor: null,
    chosenSize: null
  };

  componentDidMount() {
    let arrUrl = window.location.pathname.split("/");
    let ID = `${arrUrl[2]}`;
    this.props.getDataID(ID);
  }

  handlerImages1 = () => {
    let photoColors1 = this.props.goodsItemDetails.map(item => {
      let some = Object.entries(item.images);
      return some[0][1];
    });
    this.setState({ data: photoColors1[0] });
    return photoColors1;
  };
  handlerImages2 = () => {
    let photoColors2 = this.props.goodsItemDetails.map(item => {
      let some = Object.entries(item.images);
      return some[1][1];
    });
    this.setState({ data: photoColors2[0] });
    return photoColors2;
  };


  chooseColor = color => {
    return this.props.goodsItemDetails.filter(item => {
      if (color.toLowerCase() === item.color[0].toLowerCase()) {
        this.props.setColor(color);
        return this.handlerImages1()
      } else {
        this.props.setColor(color);
        return this.handlerImages2();
      }
    });
  };

  chooseSize = size => {
    return this.props.goodsItemDetails.filter(item => {
      if (size.toLowerCase() === item.size[0].toLowerCase()) {
        this.props.setSize(size);
      } else {
        this.props.setSize(size);
      }
    });
  }

  chosenColor = (color) => {
    console.log(color);

    return this.setState({ chosenColor: color });
  }


  chosenSize = (size) => {
    console.log(size);

    return this.setState({ chosenSize: size });
  }


  handlerItem = () => {
    return this.props.goodsItemDetails.map(item => {
      const showColors = () => {
        if (item.color) {
          return (
            <Fragment>
              <Colors
                active={this.state.chosenColor}
                chosenColor={this.chosenColor}
                colors={item.color}
                activeColor1={() => this.chooseColor(item.color[0])}
                activeColor2={() => this.chooseColor(item.color[1])}
              />
              <Sizes
                active={this.state.chosenSize}
                chosenSize={this.chosenSize}
                sizes={item.size}
                activeSize1={() => this.chooseSize(item.size[0])}
                activeSize2={() => this.chooseSize(item.size[1])}
                activeSize3={() => this.chooseSize(item.size[2])}
                activeSize4={() => this.chooseSize(item.size[3])}
              />
            </Fragment>
          );
        } else return null;
      };
      return (
        <Fragment key={item.id}>
          <Header />
          <div className={classes.container}>
            <li className={classes.liStyle}>
              <div className={classes.imageParams}>
                <img
                  src={this.state.data ? this.state.data[0] : item.image[0]}
                  alt="dsa"
                />
                <GoodsSlider
                  images={this.state.data ? this.state.data : item.image}
                  sss={item.images}
                />
              </div>

              <div className={classes.containerInfo}>
                <div className={classes.headerInfoText}>
                  <h2>{item.name}</h2>
                  <h2>{item.price} $</h2>
                </div>
                <p className={classes.refStyle}>REF: {item.ref}</p>

                {showColors()}

                <div className={classes.sizeGuide}>
                  {/* <a href="#" className={classes.sizeHelper}>Size guide</a> */}
                </div>

                <div className={classes.description}>
                  <h3 className={`${classes.h3} ${classes.filterType}`}>
                    Details
                                    </h3>
                  <div className={classes.descriptionContainer}>
                    <p>{item.description[0]}</p>
                    <p>{item.description[1]}</p>
                    <p>{item.description[2]}</p>
                  </div>
                </div>

                <Button
                  clickHandler={() => {
                    if (
                      !this.props.shoppingBag.some(
                        product => product.id === item.id
                      )
                    ) {
                      this.props.addToCart(item);
                      this.props.saveUserCart();
                      return true;
                    }
                    return false;
                  }}
                  successMessage="Added Successfully!"
                  failMessage="Already in your Basket!"
                  btnSettings={classes.btnSettings}
                  black
                  name="add to basket"
                />
              </div>
            </li>
          </div>
        </Fragment>
      );
    });
  };

  render() {
    return <Fragment>{this.handlerItem()}</Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    goodsItemDetails: state.active.objectId,
    shoppingBag: state.active.shoppingBag
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDataID: id => dispatch(getGoodsDetailID(id)),
    addToCart: product => dispatch(addToCart(product)),
    saveUserCart: () => dispatch(saveUserCart()),
    setColor: (color) => dispatch(setColor(color)),
    setSize: (size) => dispatch(setSize(size))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailPageComponent);
