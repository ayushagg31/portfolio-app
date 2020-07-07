import React, { Component } from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'reactstrap'
import classes from './Contact.module.css'
import { IconContext } from "react-icons";
import { IoIosSend, IoIosTime, IoMdDoneAll } from 'react-icons/io'
import { MdSmsFailed, MdSentimentVeryDissatisfied, MdError } from 'react-icons/md'


class Contact extends Component {
    constructor(props) {
        super(props);
        this.nameRef = React.createRef()
        this.emailRef = React.createRef()
        this.msgRef = React.createRef()
        this.btnRef = React.createRef()
    }

    state = {
        username: '',
        email: '',
        message: '',
        btnMsg: 'Send Message',
        disabled: false,
        icons: <IoIosSend size={20} />
    }

    handleChange = (event) => {
        event.preventDefault();
        const eventName = event.target.name
        const eventValue = event.target.value
        this.setState({ [eventName]: eventValue })
    }

    handleSuccessEvent = () => {
        this.setState({
            username: '',
            email: '',
            message: '',
            btnMsg: 'Message Sent',
            icons: <IoMdDoneAll size={20} />
        })
        this.resetButtonEvent()
    }

    resetButtonEvent = (eventName) => {
        const node = this.btnRef.current
        this.loaderTimeOut().then(() => {
            this.playButtonEvent('Send Message', false)
            if (eventName)
                node.classList.remove(classes[eventName])
        })

    }

    playButtonEvent = (newVal, disabled = false, icon = <IoIosSend size={20} />) => {
        this.setState({
            btnMsg: newVal,
            disabled,
            icons: icon
        })
    }

    handleFailureEvent = () => {
        const node = this.btnRef.current
        this.playButtonEvent('Message failed', true, <MdSmsFailed size={20} />)
        this.setState({
            icons: <MdSentimentVeryDissatisfied size={20} />
        })
        node.classList.add(classes.shake)
        this.resetButtonEvent('shake')
    }
    loaderTimeOut = () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(), 2500)
        })
    }

    checkValidation = () => {
        var flag = false;
        if (this.state.username === '') {
            const node = this.nameRef.current
            node.classList.add(classes.shake)
            this.loaderTimeOut().then(() => {
                node.classList.remove(classes.shake)
            })
            flag = true
        }
        if (this.state.email === '') {
            const node = this.emailRef.current
            node.classList.add(classes.shake)
            this.loaderTimeOut().then(() => {
                node.classList.remove(classes.shake)
            })
            flag = true
        }
        if (this.state.message === '') {
            const node = this.msgRef.current
            node.classList.add(classes.shake)
            this.loaderTimeOut().then(() => {
                node.classList.remove(classes.shake)
            })
            flag = true
        }
        if (flag) {
            const node = this.btnRef.current
            this.playButtonEvent('Forgot something', true, < MdError size={20} />)
            node.classList.add(classes.shake)
            this.resetButtonEvent('shake')
        }
        return flag;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.checkValidation()) {
            this.playButtonEvent('Sending....', true, <IoIosTime size={20} />)
            axios.post('api/sendmail', this.state)
                .then(() => {
                    this.resetButtonEvent()
                    this.handleSuccessEvent()
                })
                .catch(() => {
                    this.resetButtonEvent()
                    this.handleFailureEvent()
                })
        }
    }

    render() {
        return (
            <Container id="Contact" className={classes.Contact}>
                <Container style={{ height: '50px' }} >
                    <div></div>
                </Container>
                <Row className={[classes.heading, 'justify-content-start'].join(' ')} noGutters>
                    <p>Get in touch</p>
                </Row>
                <Row>
                    <Col>
                        <form onSubmit={this.handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                            <input ref={this.nameRef} className={classes.border} id="username" name="username" type="text" placeholder="Your Name" value={this.state.username} onChange={this.handleChange} />
                            <input ref={this.emailRef} className={classes.border} id="email" name="email" type="email" placeholder="What's your email?" value={this.state.email} onChange={this.handleChange} />
                            <textarea ref={this.msgRef} className={classes.textArea} id="message" name="message" type="text " placeholder="Your Message..." value={this.state.message} onChange={this.handleChange} />
                            <button ref={this.btnRef} className={classes.submitButton} disabled={this.state.disabled}>
                                <IconContext.Provider value={{ style: { verticalAlign: 'middle', marginRight: '10px' } }}>
                                    {this.state.icons}
                                </IconContext.Provider>
                                {this.state.btnMsg}
                            </button>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Contact
