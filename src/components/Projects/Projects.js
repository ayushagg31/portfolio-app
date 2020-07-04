import React from 'react'
import classes from './Projects.module.css'
import { AiFillGithub } from 'react-icons/ai'
import { FaFilePowerpoint, FaEye, FaBookOpen } from 'react-icons/fa'
import { IoIosVideocam } from 'react-icons/io'
import { Container, Row, Col } from 'reactstrap'
import { Project } from '../../main/Data'

import AOS from 'aos'
import 'aos/dist/aos.css'


const icon = (id) => {

    if (id === 'github')
        return <AiFillGithub />
    else if (id === 'powerpoint')
        return <FaFilePowerpoint />
    else if (id === 'wiki')
        return <FaBookOpen />
    else if (id === 'video')
        return <IoIosVideocam />
    else
        return <FaEye />

}

const projects = (props) => {
    AOS.init()
    return (
        <Container>
            <Row>
                <Col xs="12">
                    <div className={[classes.Projects, classes.Red].join(' ')}
                        header={Project[props.title].title}
                        data-aos={props.animation}
                        data-aos-duration="900"
                        data-aos-delay="50"
                        data-aos-easing="ease"
                        id="Projects"
                    >
                        <img src={Project[props.title].img} alt="img" />
                        <svg height="316" viewBox="0 0 446 316" width="446" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" transform="">
                                <path d="m274.549054 316h171.450946v-316h-366.2218303l-27.8168563 111.30701 51.1367946 204.69299z" fill="#000000" />
                                <path d="m24.1510925 0h55.697815l-27.8888842 111.320984z" fill="#9DFBF3" opacity=".556839" />
                                <path d="m51.9603119 111.318024 51.1492271 204.681976h-102.31155714z" fill="#64C4BC" opacity=".526608" />
                            </g>
                        </svg>

                        <Container className={classes.Content}>
                            <Row style={{ padding: '0.5rem', paddingTop:'0.2rem' }}>
                                <h3>{Project[props.title].title}</h3>
                            </Row>
                            <Row>
                                <p>{Project[props.title].description}</p>
                            </Row>
                            <Row className={classes.tags}>
                                {Project[props.title].tags.map(tag =>
                                    <p key={tag}>{tag}</p>
                                )}
                            </Row>
                            <Row>
                                <Col className={classes.icons}>
                                    {Object.keys(Project[props.title].links).map(id => {
                                        return (
                                            <a key={id} rel="noopener noreferrer" target="_blank"
                                                href={Project[props.title].links[id]}>
                                                {icon(id)}
                                            </a>
                                        )
                                    })}
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