import React, { Component } from 'react';
import { connect } from 'react-redux';
import { classes } from "./style";

import FilterPath from '../FilterPath'
import ProductsFilter from '../ProductsFilter';
import ProductList from '../../ProductList'
import FilterHeader from '../FilterHeader/FilterHeader'


class ProductContent extends Component {
    desctopView = () => <div className={classes.main}>
        <div className={classes.leftMenu}>
            <FilterPath />
            <ProductsFilter />
        </div>
        <ProductList />
    </div>

    mobileView = () => <div>
        <FilterHeader />
        <ProductsFilter />
    </div>




    showMenu = () => this.props.showFilterMenu ? this.mobileView() : this.desctopView()

    render() {


        return (
            <>
                {this.desctopView()}
            </>
        )
    }
    componentWillMount() {
        this.showMenu()
    }
};
const mapStateToProps = (state) => {
    return {
        showFilterMenu: state.allCategories.isShowFilterMenu
    };
}

export default connect(mapStateToProps)(ProductContent);