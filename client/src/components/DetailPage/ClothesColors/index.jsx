import React, { Fragment } from 'react';
import { classes } from "../style"

export default function Colors(props) {

    const showColors = () => {
        if (props.colors.length === 2) {
            return (
                <Fragment>
                    <h3 className={`${classes.h3} ${classes.filterType}`}>Color</h3>
                    <div className={classes.colorsDiv}>
                        <Fragment>
                            <div className={`${props.active == props.colors[0] && classes.activeColor}`} onClick={() => { props.activeColor1(); props.chosenColor(props.colors[0]) }} style={{ background: `${props.colors[0]}` }}>
                                <span>{props.colors[0]}</span>
                            </div>
                        </Fragment>
                        <Fragment >
                            <div className={`${props.active == props.colors[1] && classes.activeColor}`} onClick={() => { props.activeColor2(); props.chosenColor(props.colors[1]) }} style={{ background: `${props.colors[1]}` }}>
                                <span>{props.colors[1]}</span>
                            </div>
                        </Fragment>
                    </div>
                </Fragment>
            )
        } else {
            return (
            <Fragment>
                <div className={classes.colorsDiv}>
                <div className={`${props.active == props.colors[0] && classes.activeColor}`} onClick={() => { props.activeColor1(); props.chosenColor(props.colors[0]) }} style={{ background: `${props.colors[0]}` }}>
                    <span>{props.colors[0]}</span>
                </div>
                </div>
            </Fragment>
            )}
    }
    return (
        <Fragment>
            {showColors()}
        </Fragment>
    )
}