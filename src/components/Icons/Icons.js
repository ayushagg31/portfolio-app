import React from 'react'
import classes from './Icons.module.css'
import Icon from './Icon/Icon'
import { Row, Container } from 'reactstrap'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from 'react-icons/md'
import { personalLinks as links } from '../../main/Data'

const icons = () => {
    return (
        <div className={classes.Icons}>
            <Container>
                <Row className={["justify-content-center", "align-items-start"].join(' ')}>
                    <Icon analyticsKey="redirect-github" refs={links.githubUrl} text={"Github "}><AiFillGithub /></Icon>
                    <Icon analyticsKey="redirect-linkedin" refs={links.linkedinUrl} text={"LinkedIn "}><AiFillLinkedin /></Icon>
                    <Icon analyticsKey="redirect-email" refs={links.gmailId} text={"Gmail "}><MdEmail /></Icon>
                </Row>
            </Container>

        </div>
    )
}

export default icons;

