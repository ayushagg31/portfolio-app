import React from 'react'
import classes from './ProjectScroll.module.css'
import { Container, Row, Col } from 'reactstrap'
import { AiFillGithub } from 'react-icons/ai'
import { FaFilePowerpoint, FaEye } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

const projectScroll = (props) => {
    AOS.init()
    return (
        <Container>
            <Row className={classes.row}>
                <Col xs="12" md="6" className={[classes.col, classes.Red, classes.Projects].join(' ')}
                    header={"Title"}
                    data-aos={props.animation}
                    data-aos-duration="900"
                    data-aos-offset="400"
                    data-aos-delay="50"
                    data-aos-easing="ease">
                    <Container className={classes.Content}>
                        <Row style={{ padding: '0.3rem' }}>
                            <h3>Project Title</h3>
                        </Row>
                        <Row>
                            <p> Chuck Norris doesn't churn butter. He roundhouse kicks the cows and the butter comes straight out. When the Boogeyman goes to sleep every night, he checks his closet for Chuck Norris CNN was originally created as the "Chuck Norris Network" to update Americans with on-the-spot ass kicking in real-time</p>
                        </Row>
                        <Row className={classes.tags}>
                            <p>HTML</p>
                            <p>ReactJS</p>
                            <p>CSS</p>
                            <p>NodeJS</p>

                        </Row>
                        <Row>
                            <Col className={classes.icons}>
                                <a rel={"noopener noreferrer"} target={"_blank"} href="\"
                                ><AiFillGithub /></a>
                                <a rel={"noopener noreferrer"} target={"_blank"} href="\"
                                ><FaFilePowerpoint /></a>
                                <a rel={"noopener noreferrer"} target={"_blank"} href="\"
                                ><FaEye /></a>
                            </Col>
                        </Row>
                    </Container>

                </Col>
                <Col xs="12" md="6" className={[classes.col, classes.Red, classes.Projects].join(' ')}
                    header={"Title"}
                    data-aos={props.animation}
                    data-aos-duration="900"
                    data-aos-offset="400"
                    data-aos-delay="50"
                    data-aos-easing="ease">
                    <Container className={classes.Content}>
                        <Row style={{ padding: '0.3rem' }}>
                            <h3>Project Title</h3>
                        </Row>
                        <Row>
                            <p> Chuck Norris doesn't churn butter. He roundhouse kicks the cows and the butter comes straight out. When the Boogeyman goes to sleep every night, he checks his closet for Chuck Norris CNN was originally created as the "Chuck Norris Network" to update Americans with on-the-spot ass kicking in real-time</p>
                        </Row>
                        <Row className={classes.tags}>
                            <p>HTML</p>
                            <p>ReactJS</p>
                            <p>CSS</p>
                            <p>NodeJS</p>

                        </Row>
                        <Row>
                            <Col className={classes.icons}>
                                <a rel={"noopener noreferrer"} target={"_blank"} href="\"
                                ><AiFillGithub /></a>
                                <a rel={"noopener noreferrer"} target={"_blank"} href="\"
                                ><FaFilePowerpoint /></a>
                                <a rel={"noopener noreferrer"} target={"_blank"} href="\"
                                ><FaEye /></a>
                            </Col>
                        </Row>
                    </Container>

                </Col>
                <Col xs="12" md="6" className={[classes.col, classes.Red, classes.Projects].join(' ')}
                    header={"Title"}
                    data-aos={props.animation}
                    data-aos-duration="900"
                    data-aos-offset="400"
                    data-aos-delay="50"
                    data-aos-easing="ease">
                    <Container className={classes.Content}>
                        <Row style={{ padding: '0.3rem' }}>
                            <h3>Project Title</h3>
                        </Row>
                        <Row>
                            <p> Chuck Norris doesn't churn butter. He roundhouse kicks the cows and the butter comes straight out. When the Boogeyman goes to sleep every night, he checks his closet for Chuck Norris CNN was originally created as the "Chuck Norris Network" to update Americans with on-the-spot ass kicking in real-time</p>
                        </Row>
                        <Row className={classes.tags}>
                            <p>HTML</p>
                            <p>ReactJS</p>
                            <p>CSS</p>
                            <p>NodeJS</p>

                        </Row>
                        <Row>
                            <Col className={classes.icons}>
                                <a rel={"noopener noreferrer"} target={"_blank"} href="\"
                                ><AiFillGithub /></a>
                                <a rel={"noopener noreferrer"} target={"_blank"} href="\"
                                ><FaFilePowerpoint /></a>
                                <a rel={"noopener noreferrer"} target={"_blank"} href="\"
                                ><FaEye /></a>
                            </Col>
                        </Row>
                    </Container>

                </Col>
                <Col xs="12" md="6" className={[classes.col, classes.Red, classes.Projects].join(' ')}
                    header={"Title"}
                    data-aos={props.animation}
                    data-aos-duration="900"
                    data-aos-offset="400"
                    data-aos-delay="50"
                    data-aos-easing="ease">
                    <Container className={classes.Content}>
                        <Row style={{ padding: '0.3rem' }}>
                            <h3>Project Title</h3>
                        </Row>
                        <Row>
                            <p> Chuck Norris doesn't churn butter. He roundhouse kicks the cows and the butter comes straight out. When the Boogeyman goes to sleep every night, he checks his closet for Chuck Norris CNN was originally created as the "Chuck Norris Network" to update Americans with on-the-spot ass kicking in real-time</p>
                        </Row>
                        <Row className={classes.tags}>
                            <p>HTML</p>
                            <p>ReactJS</p>
                            <p>CSS</p>
                            <p>NodeJS</p>

                        </Row>
                        <Row>
                            <Col className={classes.icons}>
                                <a rel={"noopener noreferrer"} target={"_blank"} href="\"
                                ><AiFillGithub /></a>
                                <a rel={"noopener noreferrer"} target={"_blank"} href="\"
                                ><FaFilePowerpoint /></a>
                                <a rel={"noopener noreferrer"} target={"_blank"} href="\"
                                ><FaEye /></a>
                            </Col>
                        </Row>
                    </Container>

                </Col>
                <Col xs="12" md="6" className={[classes.col, classes.Red, classes.Projects].join(' ')}
                    header={"Title"}
                    data-aos={props.animation}
                    data-aos-duration="900"
                    data-aos-offset="400"
                    data-aos-delay="50"
                    data-aos-easing="ease">
                    <Container className={classes.Content}>
                        <Row style={{ padding: '0.3rem' }}>
                            <h3>Project Title</h3>
                        </Row>
                        <Row>
                            <p> Chuck Norris doesn't churn butter. He roundhouse kicks the cows and the butter comes straight out. When the Boogeyman goes to sleep every night, he checks his closet for Chuck Norris CNN was originally created as the "Chuck Norris Network" to update Americans with on-the-spot ass kicking in real-time</p>
                        </Row>
                        <Row className={classes.tags}>
                            <p>HTML</p>
                            <p>ReactJS</p>
                            <p>CSS</p>
                            <p>NodeJS</p>

                        </Row>
                        <Row>
                            <Col className={classes.icons}>
                                <a rel={"noopener noreferrer"} target={"_blank"} href="\"
                                ><AiFillGithub /></a>
                                <a rel={"noopener noreferrer"} target={"_blank"} href="\"
                                ><FaFilePowerpoint /></a>
                                <a rel={"noopener noreferrer"} target={"_blank"} href="\"
                                ><FaEye /></a>
                            </Col>
                        </Row>
                    </Container>

                </Col>
            </Row>
        </Container>


    )

}

export default projectScroll;