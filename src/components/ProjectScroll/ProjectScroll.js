import React from 'react'
import classes from './ProjectScroll.module.css'
import { Container, Row, Col } from 'reactstrap'
import { AiFillGithub } from 'react-icons/ai'
import { FaFilePowerpoint, FaBookOpen, FaEye } from 'react-icons/fa'
import { IoIosVideocam } from 'react-icons/io'
import { Projectscroll } from '../../main/Data'
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

const isPending = (desc) => {
    if (desc === `Not Available`)
        return (<p style={{ margin: '0 auto', fontWeight: 'bold' }}>
            <br />
            <br />
            -------------------Still Working-------------------
            <br />
            <br />
            <br />
            <br />
        </p>)
    return (<p>{desc}</p>)
}

const projectScroll = (props) => {
    AOS.init()
    const projects = Object.keys(Projectscroll).map(project => {
        return (
            <Col key={project} xs="12" md="6" className={[classes.col, classes.Red, classes.Projects].join(' ')}
                header={Projectscroll[project].title}
                data-aos={props.animation}
                data-aos-duration="900"
                data-aos-offset="400"
                data-aos-delay="50"
                data-aos-easing="ease">
                <Container className={classes.Content}>
                    <Row style={{ padding: '1rem' }}>
                        <h3>{Projectscroll[project].title}</h3>
                    </Row>
                    <Row>
                        {isPending(Projectscroll[project].description)}
                        {/* <p>{Projectscroll[project].description}</p> */}
                        <br />
                    </Row>
                    <Row className={classes.tags}>
                        {Projectscroll[project].tags.map(tag =>
                            <p key={tag}>{tag}</p>
                        )}
                    </Row>
                    <Row>
                        <Col className={classes.icons}>
                            {Object.keys(Projectscroll[project].links).map(id => {
                                return (
                                    <a key={id} rel="noopener noreferrer" target="_blank"
                                        href={Projectscroll[project].links[id]}>
                                        {icon(id)}
                                    </a>
                                )
                            })}
                        </Col>
                    </Row>
                </Container>
            </Col>
        )
    })


    return (
        <Container>
            <Row className={classes.row}>
                {projects}
            </Row >
        </Container >


    )

}

export default projectScroll;