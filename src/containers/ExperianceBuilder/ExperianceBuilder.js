import React, { Component } from 'react'
import Toggles from '../../components/Experiance/Toggles/Toggles'
import Info from '../../components/Experiance/Info/Info'
import classes from './ExperianceBuilder.module.css'
import { Container, Row, Col } from 'reactstrap'

class ExperianceBuilder extends Component {

    state = {
        org: 'Hsbc'
    }

    clickHandler = (orgName) => {
        this.setState({
            org: orgName,
        })
    }

    render() {
        return (
            <div className={classes.ExperianceBuilder} id="Experience">
                <Container style={{ height: '50px' }} >
                    <div></div>
                </Container>
                <Container>
                    <Row className={[classes.heading, 'section-heading', 'justify-content-end'].join(' ')} noGutters>
                        <p>Experience</p>
                    </Row>
                    <Row className={["justify-content-start", classes.Content, "align-items-center"].join(' ')}>
                        <Col xs="12" lg="2">
                            <Toggles clicked={this.clickHandler} />
                        </Col>
                        <Col xs="12" lg="8">
                            <Info org={this.state.org} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default ExperianceBuilder