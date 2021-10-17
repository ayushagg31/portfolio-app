import React from 'react'
import classes from './About.module.css'
import { Container, Row, Col } from 'reactstrap'

const about = (props) => {
    return (
        <div className={classes.About} id='About'>
            <Container style={{ height: '50px' }} >
                <div></div>
            </Container>
            <Container >
                <Row className={[classes.heading, 'section-heading', 'justify-content-start'].join(' ')} noGutters>
                    <p>About</p>
                </Row>
                <Row>
                    <Col className={classes.Content}>
                        <br/>
                        <span role="img" aria-label="hi">👋</span> Hi, 
                        I'm Ayush! -  software developer, with a passion for technology and learning. Always inspired by new idea, and willingness to contribute towards a valuable end product is what pushes me.
                        <br />
                        <br />
                        This website is an effort to showcase my fun side projects, skills, that I have developed over the years and continue to do so. You can view the source code of this website on this&nbsp;<a href="https://github.com/ayushagg31/portfolio-app" rel="noopener noreferrer" target="_blank" style={{  fontWeight: 'bold', color: '#38b2ac' }}>github repo</a>. I’m always interested to know enthusiastic people from all walks of life. If you want to get in touch, I'd be glad to connect.
                        <br />
                        <br />
                        If you like what you see, drop a message in the contact section. I would love to hear from you.
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default about
