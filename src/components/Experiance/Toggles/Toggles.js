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
                        <Toggle name={'HSBC'} clicked={props.clicked.bind(this, 'Hsbc')} />
                        <Toggle name={'Wipro'} clicked={props.clicked.bind(this, 'Wipro')} />
                    {/* </Col> */}
                </Row>
            </Container>
        </div>
    )

}

export default toggles;