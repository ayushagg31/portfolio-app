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
                <Row className={[classes.heading, 'justify-content-start'].join(' ')} noGutters>
                    <p>About</p>
                </Row>
                <Row>
                    <Col className={classes.Content}>
                        <span role="img" aria-label="hi">👋</span> Hi
                        <br />
                        <br />
                        I'm Ayush! -  software developer, with a passion for technology and learning. Always enthusiastic by a new idea, and willingness to contribute towards a valuable end product is what pushes me.
                        <br />
                        <br />
                        I got introduced to the programming in 11th standard when I opted for computer science as an optional subject. I end up scoring <i>17/100</i> marks in my final exam. I failed because things were not making sense. I had too many questions, how come 1+1 is 0, and why <i>a=10</i> works but <i>10=a</i> doesn't, why do we need <i>++a</i> when we have <i>a++</i>. All these things were very complex for a 15-year old child but, after some time everything started to make sense and once I got over the hump I haven't looked back. I got in touch with newer and more modern technologies like Machine Learning, Cloud, Web-development and I just fell in love with programming all over again, after that is still the challenges that get me going.
                        <br />
                        <br />
                        This website is an effort to showcase my fun side projects, skills, that I have developed over the years and continue to do so. You can view the source code of this website&nbsp;<a href="https://github.com/ayushagg31/portfolio-app" rel="noopener noreferrer" target="_blank" style={{ textDecoration: 'none', fontWeight: 'bold', color: '#999999' }}>here</a>, as such, the code is messy and best practices aren't always followed. I am working to make the code more elegant and beautiful. PRs and issue reports are most welcome.
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
