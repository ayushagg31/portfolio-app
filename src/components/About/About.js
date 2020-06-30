import React from 'react'
import classes from './About.module.css'
import { Container, Row, Col } from 'reactstrap'

const about = (props) => {
    return (
        <div className={classes.About} id='About'>
            <Container style={{ height: '50px'}} >
                <div></div>
            </Container>
            <Container >
                <Row className={[classes.heading, 'justify-content-start'].join(' ')} noGutters>
                    <p>About</p>
                </Row>
                <Row>
                    <Col className={classes.Content}>
                        Hi!
                    <br />
                        <br />
                    Chuck Norris doesn't churn butter. He roundhouse kicks the cows and the butter comes straight out. When the Boogeyman goes to sleep every night, he checks his closet for Chuck Norris CNN was originally created as the "Chuck Norris Network" to update Americans with on-the-spot ass kicking in real-time.
                    <br />
                        <br />
                    Chuck Norris was an only child...eventually Chuck Norris is the only man to ever defeat a brick wall in a game of tennis. Chuck Norris invented Kentucky Fried Chicken's famous secret recipe, with eleven herbs and spices. But nobody ever mentions the twelfth ingredient: Fear Chuck Norris has two speeds. Walk, and Kill. Chuck Norris doesn't read books. He stares them down until he gets the information he wants. Chuck Norris does not sleep. He waits. Police label anyone attacking Chuck Norris as a Code 45-11... a suicide Someone once videotaped Chuck Norris getting pissed off. It was called Walker: Texas Chain Saw Massacre. Chuck Norris does not get frostbite. Chuck Norris bites frost. Police label anyone attacking Chuck Norris as a Code 45-11... a suicide.
                    <br />
                        <br />
                    Chuck Norris can write a letter by using sign language. Chuck Norris is currently suing NBC, claiming Law and Order are trademarked names for his left and right legs.
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default about;