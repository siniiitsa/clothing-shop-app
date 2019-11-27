import React, { Component } from 'react';
import {connect} from 'react-redux'
import {classes} from './style'
import {SHOW_FILTER_MENU} from "../../../actions/getGoodsCategoryAction"


class FilterHeader extends Component{
    render(){
        const{
            border,
            title,
            icon,
        }= classes
        return(
            <div className = {border}>
                <h2 className={title}>Filters</h2>
                <i className={`fas fa-times ${icon} `} onClick={()=>this.props.showFilter()}></i>
            </div>
                
            
        )
    }
};
const mapDispatchToProps =dispatch=>{
    return{
        showFilter: ()=>dispatch({type:SHOW_FILTER_MENU}),
    }
}
export default connect('',mapDispatchToProps)(FilterHeader);