import React from 'react'
import classes from './Footer.module.css'
import { Container, Row, Col } from 'reactstrap';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from 'react-icons/md'

const githubUrl = "https://github.com/ayushagg31"
const linkedinUrl = "https://www.linkedin.com/in/ayushagg31/"
const gmailId = "mailto: hello@ayushaggarwal.com"

const footer = (props) => {
    return (
        <Container className={classes.margin}>
            <Row className={[classes.Footer].join(' ')}>
                <Col xs='12' md="6" className={classes.title}>
                    <a href='#Intro' >@gozmit</a>
                </Col>
                <Col className="text-right d-none d-md-block">
                    Around the Web
                </Col>
            </Row>
            <Row className={[classes.Footer, 'justify-content-around'].join(' ')}>
                <Col>
                    Copyright © 2020 Ayush Aggarwal
                </Col>
                <Col className={["text-right d-none d-md-block", classes.icons].join(' ')}>

                    <a rel={"noopener noreferrer"} target={"_blank"} href={githubUrl}
                    ><AiFillGithub /></a>
                    <a rel={"noopener noreferrer"} target={"_blank"} href={linkedinUrl}
                    ><AiFillLinkedin /></a>
                    <a rel={"noopener noreferrer"} target={"_blank"} href={gmailId}
                    ><MdEmail /></a>
                </Col>
            </Row>
            <Row className={classes.Footer}>
                <Col>
                    <span>
                        Made with <i className={["fa fa-heart", classes.pulse].join(' ')}></i>
                        in  <a rel="noopener noreferrer" target="_blank"
                            href='https://www.google.com/maps/place/Pune,+Maharashtra/
                            @18.5246036,73.7929269,12z/data=!3m1!4b1!4m5!3m4!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!8m2!3d18.5204303!4d73.8567437'
                        ><strong>Pune, India</strong></a>
                    </span>
                </Col>
            </Row>
        </Container>

    )

}

export default footer;