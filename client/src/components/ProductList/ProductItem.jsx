import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import InfiniteScroll from 'react-infinite-scroller'
import { getGoods } from "../../actions/getGoodsAction"
import { classes } from './style'

class ProductItem extends Component {
    componentDidMount () {
        let arrUrl = window.location.pathname.split("/")
        let collection = `${arrUrl[2]}`;
        this.props.getGoods(collection)
    }
    
    getGoodsByCollections = () => {

        return (
            this.props.goodsList.map((goods) => {
                return (
                    <Link className = {classes.linkItem} key = {goods.id} to = {`/detail/${goods.id}`}>
                        <li className = {classes.productItem}>
                            <img className={classes.itemImg} src={goods.image[0]} alt={goods.image}/>
                            <p className={classes.goodsTitle}>{goods.name}</p>
                            <p className={classes.goodsPrise}>{goods.price} $</p>
                        </li>
                    </Link>
                ) 
            })
        )
    }

    render() {
        return (
            <Fragment>
              {this.getGoodsByCollections()}
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        goodsList: state.allGoods.goodsList,
    }
}

const mapDispatchToProps = dispatch => {
  return {
    getGoods: url => dispatch(getGoods(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductItem);
