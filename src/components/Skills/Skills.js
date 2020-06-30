import React from 'react'
import classes from './Skills.module.css'
import { Container, Row, Col } from 'reactstrap'
import Web from '../../assets/images/web.png'
import frontend from '../../assets/images/React.png'
import backend from '../../assets/images/npm.png'
import db from '../../assets/images/db.png'
import ml from '../../assets/images/ml.png'
import python from '../../assets/images/python.png'
import scraping from '../../assets/images/scraping.png'
import competitive from '../../assets/images/competitive.png'
import linux from '../../assets/images/linux.png'
import gcp from '../../assets/images/gcp.png'


const skills = (props) => {
    return (
        <div className={classes.Skills} id="Skills">
            <Container style={{ height: '50px' }} >
                <div></div>
            </Container>
            <Container>
                <Row className={[classes.heading, 'justify-content-end'].join(' ')} noGutters>
                    <p>Skills</p>
                </Row>
                <Row className={"justify-content-between"}>
                    <Col xs="12" sm="6" md="4" lg="3">
                        <div className={classes.button}>
                            <img src={Web} alt="web" width='20' height='20' />
                            <div>
                                <p className={classes.title}>Web Development</p>
                                <p className={classes.info}>(HTML/CSS/JS)</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" sm="6" md="4" lg="3">
                        <div className={classes.button}>
                            <img src={frontend} alt="web" width='20' height='20' />
                            <div>
                                <p className={classes.title}>Frontend Frameworks</p>
                                <p className={classes.info}>(React)</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" sm="6" md="4" lg="3">
                        <div className={classes.button}>
                            <img src={backend} alt="web" width='20' height='20' />
                            <div>
                                <p className={classes.title}>Backend Frameworks</p>
                                <p className={classes.info}>(Node.js/Express.js/Mongoose)</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" sm="6" md="4" lg="3">
                        <div className={classes.button}>
                            <img src={db} alt="web" width='20' height='20' />
                            <div>
                                <p className={classes.title}>DBMS</p>
                                <p className={classes.info}>(MySQL/MongoDB)</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" sm="6" md="4" lg="3">
                        <div className={classes.button}>
                            <img src={ml} alt="web" width='20' height='20' />
                            <div>
                                <p className={classes.title}>Machine Learning</p>
                                <p className={classes.info}>(Scikit-Learn/Octave/ANN)</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" sm="6" md="4" lg="3">
                        <div className={classes.button}>
                            <img src={python} alt="web" width='20' height='20' />
                            <div>
                                <p className={classes.title}>Python Scripting</p>
                                <p className={classes.info}>(OpenCV/Socket/Automation)</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" sm="6" md="4" lg="3">
                        <div className={classes.button}>
                            <img src={scraping} alt="web" width='20' height='20' />
                            <div>
                                <p className={classes.title}>Web Scraping</p>
                                <p className={classes.info}>(Python3/Selenium)</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" sm="6" md="4" lg="3">
                        <div className={classes.button}>
                            <img src={competitive} alt="web" width='20' height='20' />
                            <div>
                                <p className={classes.title}>Competitive Programming</p>
                                <p className={classes.info}>(C/C++)</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" sm="6" md="4" lg="3">
                        <div className={classes.button}>
                            <img src={linux} alt="web" width='20' height='20' />
                            <div>
                                <p className={classes.title}>DevOps</p>
                                <p className={classes.info}>(GCP/Ansible/Git/Shell Scripting)</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" sm="6" md="4" lg="3">
                        <div className={classes.button}>
                            <img src={gcp} alt="web" width='20' height='20' />
                            <div>
                                <p className={classes.title}>GCP Certified</p>
                                <p className={classes.info}>(Associate Cloud Engineer)</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default skills;