import HSBClogo from '../assets/images/HSBC.png'
import Wiprologo from '../assets/images/wipro.png'
import NIT from '../assets/images/nit.png'
import DAV from '../assets/images/dav.png'
import video from '../assets/images/video.jpg'
import Web from '../assets/images/web.png'
import drumkit from '../assets/images/drumkit.jpg'
import portfolio from '../assets/images/portfolio.png'
import frontend from '../assets/images/React.png'
import backend from '../assets/images/npm.png'
import db from '../assets/images/db.png'
import ml from '../assets/images/ml.png'
import python from '../assets/images/python.png'
import scraping from '../assets/images/scraping.png'
import competitive from '../assets/images/competitive.png'
import linux from '../assets/images/linux.png'
import gcp from '../assets/images/gcp.png'


const Experience = {
    Hsbc: {
        title: 'HSBC Technology',
        designation: 'Software Engineer',
        location: 'Pune, Maharastra, India',
        logo: HSBClogo,
        duration: '(July \'19 - current)',
        alt: 'Hsbc',
        specialization: 'Google Cloud Platform, JS, Python'
    },

    Wipro:
    {
        title: 'Wipro Limited',
        designation: 'Software Intern',
        location: 'Bengaluru, Karnataka, India',
        logo: Wiprologo,
        duration: '(May \'18 - July \'18)',
        alt: 'Wipro',
        width: '60',
        height: '40',
        specialization: 'Shell Scripting, Ansible, Virtualization'
    }

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
        title: 'Air-o-drum',
        description: `Chuck Norris doesn't churn butter. He roundhouse kicks the cows and the butter comes straight out. When the Boogeyman goes to sleep every night, he checks his closet for Chuck Norris CNN was originally created as the "Chuck Norris Network" to update Americans with on-the-spot ass kicking in real-time`,
        img: drumkit,
        links:
        {
            github: 'https://github.com/ayushagg31/Magical_music_instruments',
            video: 'https://drive.google.com/file/d/0B52MPjpQNqjRcFYzX0llQWRWdzQ/view'
        },
        tags: ['Python', 'OpenCV', 'Pygame']
    },
    B:
    {
        title: 'Video-Streaming',
        description: `A Video Chat/Streaming application which enables you to stream your stored media/live webcam feed from one system to another.`,
        img: video,
        links:
        {
            github: 'https://github.com/ayushagg31/Video-Streaming',
            powerpoint: 'https://drive.google.com/file/d/1vxnvqcYAydl8w9MdjoIRrCdpvoXuaVdk/view',
        },
        tags: ['Python', 'Socket', 'OpenCV']
    },
    C:
    {
        title: 'Personal Portfolio',
        description: `Chuck Norris doesn't churn butter. He roundhouse kicks the cows and the butter comes straight out. When the Boogeyman goes to sleep every night, he checks his closet for Chuck Norris CNN was originally created as the "Chuck Norris Network" to update Americans with on-the-spot ass kicking in real-time`,
        img: portfolio,
        links:
        {
            github: 'https://github.com/ayushagg31/portfolio-app',
            live: 'https://ayushaggarwal.com/'
        },
        tags: ['ReactJS', 'NodeJS', 'Reactstrap']
    }
}

const Projectscroll = {
    A:
    {
        title: 'Study-Buddy',
        description: `Chuck Norris doesn't churn butter. He roundhouse kicks the cows and the butter comes straight out. When the Boogeyman goes to sleep every night, he checks his closet for Chuck Norris CNN was originally created as the "Chuck Norris Network" to update Americans with on-the-spot ass kicking in real-time`,
        links:
        {
            github: 'https://github.com/ayushagg31/Study-Buddy',
            powerpoint: 'https://drive.google.com/file/d/0B52MPjpQNqjRTDZRQ2M4R0xuRjA/view',
        },
        tags: ['Python', 'Socket', 'File sharing', 'Chatting']
    },
    B:
    {
        title: 'Mini Python Scripts',
        description: `Chuck Norris doesn't churn butter. He roundhouse kicks the cows and the butter comes straight out. When the Boogeyman goes to sleep every night, he checks his closet for Chuck Norris CNN was originally created as the "Chuck Norris Network" to update Americans with on-the-spot ass kicking in real-time`,
        links:
        {
            github: 'https://github.com/ayushagg31/my-python_scripts',
        },
        tags: ['Python', 'Selenium', 'API\'s', 'Tesseract']
    },
    C:
    {
        title: 'Audio filtering ',
        description: `Chuck Norris doesn't churn butter. He roundhouse kicks the cows and the butter comes straight out. When the Boogeyman goes to sleep every night, he checks his closet for Chuck Norris CNN was originally created as the "Chuck Norris Network" to update Americans with on-the-spot ass kicking in real-time`,
        links:
        {
            github: 'https://github.com/ayushagg31/Audio-clearing-using-machine-learning',
            powerpoint: 'https://drive.google.com/file/d/1SldHmXWcssMzMpPvI0nUuP7nzQ5KxYiB/view',
        },
        tags: ['Octave', 'ANN', 'Backpropagation']
    },
    D:
    {
        title: 'codelick ',
        description: `Chuck Norris doesn't churn butter. He roundhouse kicks the cows and the butter comes straight out. When the Boogeyman goes to sleep every night, he checks his closet for Chuck Norris CNN was originally created as the "Chuck Norris Network" to update Americans with on-the-spot ass kicking in real-time`,
        links:
        {
            github: 'https://github.com/ayushagg31/codelick',
            wiki: 'https://github.com/ayushagg31/codelick/wiki',
        },
        tags: ['C++', 'Competitive Programming']
    },
    E:
    {
        title: 'Travel-log ',
        description: `Not Available`,
        links:
        {
            // Yet to create
        },
        tags: ['React', 'Node', 'Mapbox', 'Express', 'MongoDB']
    }
}


const Skill = {
    A: {
        skill: 'Web Development',
        img: Web,
        info: 'HTML/CSS/JS'
    },
    B: {
        skill: 'Frontend Frameworks',
        img: frontend,
        info: 'React'
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
    Skill
};


