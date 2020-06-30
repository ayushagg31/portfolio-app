import React from 'react'
import classes from './DownPulse.module.css'
import Lottie from 'react-lottie'
import animationData from '../../main/Arrow.json'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const downPulse = (props) => {
    return (
        <div className={classes.DownPulse}>
            <a href='#About'>
                <Lottie
                    options={defaultOptions}
                    height={75}
                    width={75}
                />
            </a>
        </div>
    )

}

export default downPulse;