import React from 'react'
import classes from './Toggles.module.css'
import Toggle from './Toggle/Toggle'
import { Container, Row } from 'reactstrap'

const toggles = (props) => {
    return (
        <div className={classes.Toggles}>
            <Container>
                <Row className="justify-content-lg-start justify-content-center">
                    {/* <Col> */}
                        <Toggle name={'Bachelor\'s'} clicked={props.clicked.bind(this, 'UG')} />
                        <Toggle name={'School'} clicked={props.clicked.bind(this, 'HS')} />
                    {/* </Col> */}
                </Row>
            </Container>
        </div>
    )

}

export default toggles;