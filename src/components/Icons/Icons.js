import React from 'react'
import classes from './Icons.module.css'
import Icon from './Icon/Icon'
import { Row, Container } from 'reactstrap'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from 'react-icons/md'
const githubUrl = "https://github.com/ayushagg31"
const linkedinUrl = "https://www.linkedin.com/in/ayush-aggarwal-b13a92120/"
const gmailId = "mailto: agg.ayush.1997@gmail.com"

const icons = (props) => {

    return (
        <div className={classes.Icons}>
            <Container>
                <Row className={["justify-content-center", "align-items-start"].join(' ')}>
                    <Icon refs={githubUrl} text={"Github "}><AiFillGithub /></Icon>
                    <Icon refs={linkedinUrl} text={"LinkedIn "}><AiFillLinkedin /></Icon>
                    <Icon refs={gmailId} text={"Gmail "}><MdEmail /></Icon>
                </Row>
            </Container>

        </div>
    )

}

export default icons;

