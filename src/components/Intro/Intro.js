import React from 'react'
import classes from './Intro.module.css'
import Typical from 'react-typical'
import profile from '../../assets/images/profile.jpg'
import Icons from '../Icons/Icons'
import { bounce } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
// import DownPulse from '../DownPulse/DownPulse'
import { Container, Row, Col } from 'reactstrap'

const styles = {
    bounce: {
        animation: 'x 2s',
        animationName: Radium.keyframes(bounce, 'bounce')
    }
}
const intro = (props) => {
    return (
        <>
            <div className={classes.Intro} id="Intro">
                <Container style={{ height: '50px' }} />
                <Container>
                    <Row>
                        <Col xs="12" lg="6">
                            <div className={classes.ImgCenter}>
                                <StyleRoot >
                                    <img src={profile} alt="gozmit" style={styles.bounce} />
                                </StyleRoot>
                            </div>
                        </Col>
                        <Col xs="12" lg="6" className={"align-self-center"}>
                            <div className={classes.Title}>
                                <Typical
                                    steps={['> Hi! I\'m Ayush', Infinity]}
                                    loop={1}
                                    wrapper="p"
                                />
                            </div>

                            <div className={classes.Dev}>
                                <Typical
                                    steps={
                                        [
                                            '  ', 1200,
                                            'I am a Developer ✔', 500,
                                            'I am a Open-Sourcer 👀', 500,
                                            'I am a Programmer 😎', 500,
                                            'I am a Space Enthusiast 🚀', 500,
                                            'I am a Binge-watcher 📺', 500,

                                        ]}
                                    loop={Infinity}
                                    wrapper="p"
                                />
                            </div>
                            <Icons />
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* <DownPulse /> */}
        </>

    )

}

export default intro;