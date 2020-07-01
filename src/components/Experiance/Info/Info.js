import React from 'react'
import classes from './Info.module.css'
import data from '../../../main/Data'
import { MdLocationOn } from "react-icons/md"
import { Container, Row, Col } from 'reactstrap'


const info = (props) => {
    return (

        <Container className={classes.Info}>
            <Row style={{ width: '100%' }}>
                <Col xs="12" md="2">
                    <img src={data[props.org].logo} alt={data[props.org].alt} width='60' height='30' />
                </Col>
                <Col xs="12" md="10">
                    <div className={classes.Content}>
                        <span className={classes.title}>{data[props.org].title}</span>
                        <span className={classes.duration}>{data[props.org].duration}</span>
                    </div>
                    <p className={classes.designation}>{data[props.org].designation}</p>
                    <div className={classes.location}>
                        <MdLocationOn size={18} />
                        <p>{data[props.org].location}</p>
                    </div>
                    <div>
                        <span style={{ fontSize: ' 0.77rem', fontWeight: 'bold' }}>Specialized in: </span>
                        <span style={{ fontSize: '0.77rem' }}>{data[props.org].specialization}</span>
                    </div>
                </Col>
            </Row>
        </Container>
    )

}

export default info;