import React, { Component } from 'react'
import ReactGA from 'react-ga';
import Navigation from './components/Navigation/Navigation'
import Intro from './components/Intro/Intro'
import About from './components/About/About'
import ExperianceBuilder from './containers/ExperianceBuilder/ExperianceBuilder'
import EducationBuilder from './containers/EducationBuilder/EducationBuilder'
import ProjectBuilder from './containers/ProjectBuilder/ProjectBuilder'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './preloader.scss'

class app extends Component {
  state = {
    loading: false
  }

  componentDidMount = async () => {
    ReactGA.initialize('UA-171423142-1');
    ReactGA.pageview('/')
    this.loaderTimeOut().then(() => {
      this.setState({
        loading: false
      })
    })
  }

  render() {
    const { loading } = this.state
    if (loading) {
      return (
        <div className="rainbow" style={{ color: 'white', fontSize: '1.5rem', textAlign: 'center', paddingTop: '43.4vh' }}>
          @gozmit #31
          <br />
          <span
            style={{ color: "Red", fontSize: "1.8rem" }}>
            <strong>Ayush Aggarwal</strong></span>
        </div>
      )
    }

    return (
      <div>
        <Navigation />
        <Intro />
        <About />
        <ExperianceBuilder />
        <EducationBuilder />
        <Skills />
        <ProjectBuilder />
        <Contact />
        <Footer />
      </div>
    )
  }


  loaderTimeOut = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 1000)
    })
  }
}

export default app;
