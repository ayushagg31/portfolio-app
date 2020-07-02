import React from 'react'
import classes from './Skills.module.css'
import { Container, Row, Col } from 'reactstrap'
import { Skill } from '../../main/Data'

const skills = (props) => {
    const skill = Object.keys(Skill).map(skillId => {
        return (
            <Col xs="12" sm="6" md="4" lg="3">
                <div className={classes.button}>
                    <img src={Skill[skillId].img} alt="web" width='20' height='20' />
                    <div>
                        <p className={classes.title}>{Skill[skillId].skill}</p>
                        <p className={classes.info}>({Skill[skillId].info})</p>
                    </div>
                </div>
            </Col>
        )
    })
    return (
        <div className={classes.Skills} id="Skills">
            <Container style={{ height: '50px' }} >
                <div></div>
            </Container>
            <Container>
                <Row className={[classes.heading, 'justify-content-end'].join(' ')} noGutters>
                    <p>Skills</p>
                </Row>
                <Row className={"justify-content-between"}>
                    {skill}
                </Row>
            </Container>
        </div>
    )

}

export default skills;