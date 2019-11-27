import React, {Component} from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { classes } from "./style";
import { getFilterPath } from "../../../actions/getFilterPathAction"

class FilterPath extends Component {
    componentDidMount () {
        if (window.location.pathname === "/product-list/mens"){
            return this.props.getFilterPath("mens")
        } else if (window.location.pathname === "/product-list/womens") {
            return this.props.getFilterPath("womens")
        } else if (window.location.pathname === "/product-list/accessories") {
            return this.props.getFilterPath("accessories")
        }
        this.props.getFilterPath()
    }

    getPath = () => {
        let path = null;
        if (window.location.pathname === "/product-list/mens"){
            path = "/product-list/mens";
        } else if (window.location.pathname === "/product-list/womens") {
            path = "/product-list/womens";
        } else if (window.location.pathname === "/product-list/accessories") {
            path = "/product-list/accessories";
        }
        return path;
    }

    render() {
        return(
            <div className={classes.filterPath}>
                <Link to={'/'} className={classes.filterPathText}>Home</Link>
                <span className={classes.filterPathText}> &rsaquo; </span>
                <Link to={this.getPath()} className={classes.filterPathText}>{this.props.firstFilterPath}</Link>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        firstFilterPath: state.getFilterPath.firstFilterPath
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        getFilterPath: url => dispatch(getFilterPath(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterPath)

