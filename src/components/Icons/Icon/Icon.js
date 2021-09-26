import React from 'react'
import classes from './Icon.module.css'
const icon = ({text, refs, children, analyticsKey}) => {
    return (
        <div className={classes.Icon}>
            <span className={classes.tooltiptext}>{text}</span>
            <a rel={"noopener noreferrer"} id={analyticsKey} target={"_blank"} href={refs}>{children}</a>
        </div>
    )	

}

export default icon;