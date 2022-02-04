import React from 'react'
import classes from './Toggles.module.css'
import Toggle from './Toggle/Toggle'
import { Container, Row } from 'reactstrap'

const toggles = (props) => {
    return (
        <div className={classes.Toggles}>
            <Container>
                <Row className={"justify-content-center"}>
                    {/* <Col> */}
                    <Toggle name={'PayPal'} clicked={props.clicked.bind(this, 'PayPal')} />
                    <Toggle name={'Spinny'} clicked={props.clicked.bind(this, 'Spinny')} />
                    <Toggle name={'HSBC'} clicked={props.clicked.bind(this, 'Hsbc')} />
                    {/* </Col> */}
                </Row>
            </Container>
        </div>
    )

}

export default toggles;
