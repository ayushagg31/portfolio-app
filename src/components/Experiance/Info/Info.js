import React from 'react'
import classes from './Info.module.css'
import data from '../../../main/Data'
import { MdLocationOn } from "react-icons/md"


const info = (props) => {
    return (
        <div className={classes.Info}>
            <img src={data[props.org].logo} alt={data[props.org].alt}  width={data[props.org].width} height={data[props.org].height}/>
            <span>
                <h3>{data[props.org].title}</h3>
                <p>{data[props.org].duration}</p>
            </span>
            <h5>{data[props.org].designation}</h5>
            <div className={classes.location}>
                <MdLocationOn size={18} />
                <p>{data[props.org].location}</p>
            </div>

            

        </div>
    )

}

export default info;