import React from 'react'
import classes from './ProjectBuilder.module.css'
import Projects from '../../components/Projects/Projects'
import ProjectScroll from '../../components/ProjectScroll/ProjectScroll'
import { Container, Row } from 'reactstrap'
import { Project, Projectscroll } from '../../main/Data'

const projectBuilder = (props) => {
    return (
        <div className={classes.ProjectBuilder} id="Projects">
            <Container style={{ height: '50px' }} >
                <div></div>
            </Container>
            <Container>
                <Row className={[classes.heading, 'justify-content-start'].join(' ')} noGutters>
                    <p>Projects</p>
                </Row>
                <Row>
                    {
                        Object.keys(Project).map(title => <Projects title={title} animation="fade-right" />)
                    }

                    <ProjectScroll animation="none" />
                </Row>
            </Container>
        </div>
    )

}

export default projectBuilder;