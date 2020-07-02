import React, { Component } from 'react'
import Toggles from '../../components/Education/Toggles/Toggles'
import Info from '../../components/Education/Info/Info'
import classes from './EducationBuilder.module.css'
import { Container, Row, Col } from 'reactstrap'

class ExperianceBuilder extends Component {

    state = {
        org: 'UG'
    }

    clickHandler = (orgName) => {
        this.setState({
            org: orgName,
        })
    }

    render() {
        return (
            <div className={classes.ExperianceBuilder} id="Education">
                <Container style={{ height: '50px' }} >
                    <div></div>
                </Container>
                <Container>
                    <Row className={[classes.heading, 'justify-content-start'].join(' ')} noGutters>
                        <p>Education</p>
                    </Row>
                    <Row className={["justify-content-start", classes.Content, "align-items-center"].join(' ')}>
                        <Col xs="12" lg="8" className={["order-5", "order-lg-2"].join(' ')}>
                            <Info org={this.state.org} />
                        </Col>
                        <Col xs="12" lg="2" className={["order-2", "order-lg-5"].join(' ')}>
                            <Toggles clicked={this.clickHandler} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default ExperianceBuilder