import React from 'react'
import classes from './Toggle.module.css'

const toggle = (props) => {
    return (
        <div className={classes.Toggle}>
            <button className={classes.button}
                onClick={props.clicked}
            >
                {props.name}
            </button>
        </div>
    )

}

export default toggle;