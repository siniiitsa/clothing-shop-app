import React, { Fragment } from "react";
import { classes } from "../style";

export default function Sizes(props) {
  console.log(props.active);
  
  const sizes = () => {
    return (
      <div className={classes.sizeStyles}>
        <h3 className={`${classes.h3} ${classes.filterType}`}>Size</h3>
        <a href="#" className={classes.sizeHelper}>Size guide</a>

        <ul className={classes.sizes}>
          <li className = {`${props.active == props.sizes[0] && classes.activeSize}`} onClick = {() => {props.activeSize1(); props.chosenSize(props.sizes[0])}}>{props.sizes[0]}</li>
          <li className = {`${props.active == props.sizes[1] && classes.activeSize}`} onClick = {() => {props.activeSize2(); props.chosenSize(props.sizes[1])}}>{props.sizes[1]}</li>
          <li className = {`${props.active == props.sizes[2] && classes.activeSize}`} onClick = {() => {props.activeSize3(); props.chosenSize(props.sizes[2])}}>{props.sizes[2]}</li>
          <li className = {`${props.active == props.sizes[3] && classes.activeSize}`} onClick = {() => {props.activeSize4(); props.chosenSize(props.sizes[3])}}>{props.sizes[3]}</li>
        </ul>
      </div>
    )
  }
  return (
    <Fragment>
    {sizes()}
    </Fragment>
  );
}
