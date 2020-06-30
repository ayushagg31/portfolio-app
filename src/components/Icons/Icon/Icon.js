import React from 'react'
import classes from './Icon.module.css'
const icon = (props) => {
    return (
        <div className={classes.Icon}>
            <span className={classes.tooltiptext}>{props.text}</span>
            <a rel={"noopener noreferrer"} target={"_blank"} href={props.refs}>{props.children}</a>
        </div>
    )	

}

export default icon;