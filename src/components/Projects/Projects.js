import React from 'react'
import classes from './Projects.module.css'
import { AiFillGithub } from 'react-icons/ai'
import { FaFilePowerpoint, FaEye } from 'react-icons/fa'
import { Container, Row, Col } from 'reactstrap'
import project from '../../assets/images/project.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const projects = (props) => {
    AOS.init()
    return (
        <Container>
            <Row>
                <Col xs="12">
                    <div className={[classes.Projects, classes.Red].join(' ')}
                        header={"Title"}
                        data-aos={props.animation}
                        data-aos-duration="900"
                        // data-aos-offset="1"
                        data-aos-delay="50"
                        data-aos-easing="ease"
                        id="Projects"
                    >
                        <img src={project} alt="img" />
                        <svg height="316" viewBox="0 0 446 316" width="446" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" transform=""><path d="m274.549054 316h171.450946v-316h-366.2218303l-27.8168563 111.30701 51.1367946 204.69299z" fill="#181818" /><path d="m24.1510925 0h55.697815l-27.8888842 111.320984z" fill="#9DFBF3" opacity=".556839" /><path d="m51.9603119 111.318024 51.1492271 204.681976h-102.31155714z" fill="#64C4BC" opacity=".526608" /></g></svg>

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


                    </div>
                </Col>
            </Row>
        </Container >
    )

}

export default projects;