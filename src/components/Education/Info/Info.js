import React from 'react'
import classes from './Info.module.css'
import { Education } from '../../../main/Data'
import { MdLocationOn } from "react-icons/md"
import { Container, Row, Col } from 'reactstrap'


const info = (props) => {
    return (

        <Container className={classes.Info}>
            <Row style={{ width: '100%' }}>
                <Col xs="12" md="2">
                    <img src={Education[props.org].logo} alt={Education[props.org].alt} width='60' height='50' />
                </Col>
                <Col xs="12" md="10">
                    <div className={classes.Content}>
                        <span className={classes.title}>{Education[props.org].title}</span>
                        <span className={classes.duration}>{Education[props.org].duration}</span>
                    </div>
                    <p className={classes.designation}>{Education[props.org].designation}</p>
                    <div className={classes.location}>
                        <MdLocationOn size={18} />
                        <p>{Education[props.org].location}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )

}

export default info;