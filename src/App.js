import React, { Component } from "react";
import ReactGA from "react-ga";
import Navigation from "./components/Navigation/Navigation";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import ExperianceBuilder from "./containers/ExperianceBuilder/ExperianceBuilder";
import EducationBuilder from "./containers/EducationBuilder/EducationBuilder";
import ProjectBuilder from "./containers/ProjectBuilder/ProjectBuilder";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./preloader.scss";

class app extends Component {
  state = {
    loading: true
  };

  componentDidMount = async () => {
    ReactGA.initialize("UA-171423142-1");
    ReactGA.pageview("/");
    // this.loaderTimeOut().then(() => {
    //   this.setState({
    //     loading: false
    //   })
    // })
  };

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <div
          style={{
            color: "white",
            fontSize: "1.5rem",
            textAlign: "center",
            paddingTop: "43.4vh",
            fontFamily: "monospace"
          }}
        >
          <strong>
            {"Rethinking it, old one is "}
            <a
              href="https://github.com/ayushagg31/portfolio-app"
              style={{ cursor: "pointer" }}
              rel="noopener noreferrer"
            >
              archived...
            </a>
          </strong>
          <br />
        </div>
      );
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
    );
  }

  loaderTimeOut = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 300);
    });
  };
}

export default app;
