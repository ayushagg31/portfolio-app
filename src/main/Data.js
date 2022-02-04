import Spinnylogo from '../assets/images/spinny.png'
import HSBClogo from '../assets/images/HSBC.png'
import Wiprologo from '../assets/images/wipro.png'
import PayPal from '../assets/images/paypal.png'
import NIT from '../assets/images/nit.png'
import DAV from '../assets/images/dav.png'
import trellis from '../assets/images/Trellis.png'
import video from '../assets/images/video.jpg'
import Web from '../assets/images/web.png'
import drumkit from '../assets/images/drumkit.jpg'
import portfolio from '../assets/images/portfolio.png'
import frontend from '../assets/images/React.png'
import backend from '../assets/images/npm.png'
import db from '../assets/images/db.png'
import ml from '../assets/images/ml.png'
import python from '../assets/images/python.png'
import design from '../assets/images/design.png'
import scraping from '../assets/images/scraping.png'
import competitive from '../assets/images/competitive.png'
import linux from '../assets/images/linux.png'
import gcp from '../assets/images/gcp.png'
import testing from '../assets/images/testing.png'


const ResumeURL = "https://drive.google.com/file/d/1GVc1pU5xM8Sawiwm5vLVZ6M2YXCBmIbn/view?usp=sharing"

const personalLinks = {
     githubUrl : "https://github.com/ayushagg31",
     linkedinUrl : "https://www.linkedin.com/in/ayushagg31/",
     gmailId : "mailto: ayushagg.me@gmail.com"

}

const Experience = {
      PayPal: {
        title: 'PayPal',
        designation: 'Software Engineer II',
        location: 'Bengaluru, Haryana, India',
        logo: PayPal,
        duration: '(Jan \'22 - Present)',
        alt: 'PayPal',
        specialization: '---'
    },
    Spinny: {
        title: 'Spinny',
        designation: 'SDE II - Frontend',
        location: 'Gurugram, Haryana, India',
        logo: Spinnylogo,
        duration: '(Jan \'21 - Jan \'22)',
        alt: 'Spinny',
        specialization: 'ReactJS, Javascript, Redux, Redux-Observale'
    },
    Hsbc: {
        title: 'HSBC Technology',
        designation: 'Software Engineer',
        location: 'Pune, Maharastra, India',
        logo: HSBClogo,
        duration: '(July \'19 - Dec \'20)',
        alt: 'Hsbc',
        specialization: 'Google Cloud Platform, Javascript, Python'
    },

//     Wipro: {
//         title: 'Wipro Limited',
//         designation: 'Software Intern',
//         location: 'Bengaluru, Karnataka, India',
//         logo: Wiprologo,
//         duration: '(May \'18 - July \'18)',
//         alt: 'Wipro',
//         width: '60',
//         height: '40',
//         specialization: 'Shell Scripting, Ansible, Virtualization'
//     }

}

const Education = {
    UG:
    {
        title: 'National Institute of Technology',
        location: 'Hamirpur, Himachal Pradesh, India',
        duration: '(2015 - 2019)',
        logo: NIT,
        designation: 'B.Tech in Computer Science & Engineering',
        alt: 'NIT',
        width: '60',
        height: '50'

    },
    HS:
    {
        title: 'M.L.S. D.A.V. Public School',
        location: 'Narnaul, Haryana, India',
        duration: '(2010 - 2014)',
        logo: DAV,
        designation: 'High School, CBSE',
        alt: 'DAV',
        width: '60',
        height: '50'
    }
}


const Project = {
    A:
    {
        title: 'Trellis ',
        description: `Trellis is a fully functioning task management Web App. The App supports personal Task Boards, allowing simple and organized task tracking that
        separates overarching goals or topics from specific tasks. Trellis has both a minimal and clean UI inspired from Trello. The App has 80+ stars and 50+
        forks on Github.`,
        img: trellis,
        links:
        {
            github: { url: 'https://github.com/ayushagg31/Trellis', analyticsKey: "trellis-github-redirect" },
            live: { url: 'https://trellis-app.herokuapp.com', analyticsKey: "trellis-live-redirect" },
            video: { url: 'https://drive.google.com/file/d/1eP41BKh8LLL7ScSnhGlSd3FJRKXazva3/view', analyticsKey: "trellis-video-redirect" },
        },
        tags: ['React', 'Redux', 'Node', 'Express', 'MongoDB', 'Jest']
    },
    B:
    {
        title: 'Personal Portfolio',
        description: `Personal website to highlight all my projects, skills and other information. Fully responsive website built completely using ReactJS and Reactstrap. Content is passed through a separate Javascript file to automate the deployment and easy maintenance.`,
        img: portfolio,
        links:
        {
            github: { url: 'https://github.com/ayushagg31/portfolio-app'},
            live: { url: 'https://ayushaggarwal.com/'}
        },
        tags: ['ReactJS', 'NodeJS', 'Reactstrap']
    },
    C:
    {
        title: 'Air-o-drum',
        description: `This project was created as a part of hackathon. We developed a sensor which can detect a particular color(Green by default) and enables you to play a musical instrument. Outline of Drum-kit and Piano is implemented to play the music. HSV slider is also added to observe noisy elements in the webcam frame.`,
        img: drumkit,
        links:
        {
            github: { url: 'https://github.com/ayushagg31/Magical_music_instruments' },
            video: {url: 'https://drive.google.com/file/d/0B52MPjpQNqjRcFYzX0llQWRWdzQ/view', analyticsKey: "air-o-drum-video-redirect" },
        },
        tags: ['Python', 'OpenCV', 'Pygame']
    },
}

const Projectscroll = {
    A:
    {
        title: 'Video-Streaming',
        description: `A Video Chat/Streaming application which allows you to stream your stored media/live webcam feed from one system to another. Socket Programming is used to communicate between devices. JPEG Compression(lossy) is used to compress data and send to requesting devices in small chunks.`,
        img: video,
        links:
        {
            github: 'https://github.com/ayushagg31/Video-Streaming',
            powerpoint: 'https://drive.google.com/file/d/1vxnvqcYAydl8w9MdjoIRrCdpvoXuaVdk/view',
        },
        tags: ['Python', 'Socket', 'OpenCV']
    },
    B:
    {
        title: 'Study-Buddy',
        description: `Developed a platform for file uploading, downloading and chatting between multiple systems. It's a terminal based application. Socket Programming is used to communicate between devices. Created as a part of the hackathon.`,
        links:
        {
            github: 'https://github.com/ayushagg31/Study-Buddy',
            powerpoint: 'https://drive.google.com/file/d/0B52MPjpQNqjRTDZRQ2M4R0xuRjA/view',
        },
        tags: ['Python', 'Socket', 'File sharing', 'Chatting']
    },
    C:
    {
        title: 'Mini Python Scripts',
        description: `Collection of Python scripts to automate tasks or scrap data from websites like Kaggle/Youtube using selenium or data-Api's for further use in a major project. Scripts are related to Kaggle, Cricbuzz, Youtube, Instagram, Trivia, Email etc.`,
        links:
        {
            github: 'https://github.com/ayushagg31/my-python_scripts',
        },
        tags: ['Python', 'Selenium', 'API\'s', 'Tesseract']
    },
    D:
    {
        title: 'Audio filtering using ANN',
        description: `We created an application that generated pure vocals as output when fed audio (noise+vocals) as input. Implementation was done using ANN, backpropagation algorithm.`,
        links:
        {
            github: 'https://github.com/ayushagg31/Audio-clearing-using-machine-learning',
            powerpoint: 'https://drive.google.com/file/d/1SldHmXWcssMzMpPvI0nUuP7nzQ5KxYiB/view',
        },
        tags: ['Octave', 'ANN', 'Backpropagation']
    },
    E:
    {
        title: 'codelick ',
        description: `A repository for my code implementations of different Data Structure and Algorithmic Problems.
        Wiki has been added for complete list of DSA implementations. It was created to maintain a log of my competitive programming progress.`,
        links:
        {
            github: 'https://github.com/ayushagg31/codelick',
            wiki: 'https://github.com/ayushagg31/codelick/wiki',
        },
        tags: ['C++', 'Competitive Programming']
    },
}


const Skill = {
    A: {
        skill: 'Web Design & Development',
        img: Web,
        info: 'HTML/CSS/Javascript'
    },
    B: {
        skill: 'Frontend Frameworks',
        img: frontend,
        info: 'React/Redux/Redux-Observable'
    },
    Q: {
        skill: 'UI/UX Design',
        img: design,
        info: 'Figma/Sketch/Zeplin'
    },
    K: {
        skill: 'Testing Frameworks',
        img: testing,
        info: 'Jest/Supertest/React-testing-library'
    },
    J: {
        skill: 'Backend Frameworks',
        img: backend,
        info: 'Node.js/Express.js/Mongoose'
    },
    C: {
        skill: 'DBMS',
        img: db,
        info: 'MySQL/MongoDB'
    },
    D: {
        skill: 'Machine Learning',
        img: ml,
        info: 'Scikit-Learn/Octave/ANN'
    },
    E: {
        skill: 'Python Scripting',
        img: python,
        info: 'OpenCV/Socket/Automation'
    },
    F: {
        skill: 'Web Scraping',
        img: scraping,
        info: 'Python3/Selenium'
    },
    G: {
        skill: 'Competitive Programming',
        img: competitive,
        info: 'C/C++'
    },
    H: {
        skill: 'DevOps',
        img: linux,
        info: 'GCP/Ansible/Git/Shell Scripting'
    },
    I: {
        skill: 'GCP Certified',
        img: gcp,
        info: 'Associate Cloud Engineer'
    }
}



export {
    Experience,
    Education,
    Project,
    Projectscroll,
    personalLinks,
    ResumeURL,
    Skill
};


