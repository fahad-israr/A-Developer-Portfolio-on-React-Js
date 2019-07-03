import React from 'react';
import Particles from 'react-particles-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faGooglePlusG,faFacebookF,faLinkedinIn,faGithub,faQuora} from '@fortawesome/free-brands-svg-icons';
import { faDownload ,faChevronCircleDown} from '@fortawesome/free-solid-svg-icons'
import './App.css';
const resume=require('./resume/Resume_Fahad_Israr_May_2019.pdf')
let particleconfig={
  "particles": {
    "number": {
      "value": 55,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce",
      "bounce": true,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};
function App() {
  return (
    <div className="App">
      {/*-------------Particle based Display-----------------*/}
      <div id='particle-container'>
         <Particles className="particles" params={particleconfig}/>
         
          <div className="header">
             <h1>Fahad<br/>Israr</h1>
             <h2>Software Developer</h2>
             <div className='icon-container'> 
                <a title='Google' className='fa' href='mailto:fahad00cms@gmail.com' target='new' ><FontAwesomeIcon icon={faGooglePlusG}/></a> 
                <a title='Linkedin' className='fa'href='https://www.linkedin.com/in/fahad00cms' target='new'><FontAwesomeIcon icon={faLinkedinIn}/></a>
                <a  title='Facebook' className='fa' href='https://facebook.com/fahad.israr.14' target='new'><FontAwesomeIcon icon={faFacebookF}/></a>
                <a title='Github'  className='fa2' href='https://github.com/fahad-israr' target='new'><FontAwesomeIcon icon={faGithub}/></a>
                <a title='Quora'  className='fa' href='https://www.quora.com/profile/Fahad-Israr' target='new'><FontAwesomeIcon icon={faQuora}/></a>
             </div>
             <div className='pagelinks'>
               <a className='pagenav' href='#aboutMe'>About Me</a>
               <a className='pagenav' href='#projects'>Projects</a>
               <a className='pagenav' href={resume} download>Resume <FontAwesomeIcon icon={faDownload}/></a>
             </div>
             
          </div>
          <a href='#about'className='down'><FontAwesomeIcon  icon={faChevronCircleDown}/></a>
      </div>
        {/*------------Particle body Ends Here---------------------------*/}
        <div id='about' className='about'>
          <h1>About Me</h1>
          <p>I am a Js Enthusiast and a Progressive Web App Developer and I love to work with  React Js [for UI] , Node Js [for Backend] and postgreSQL [for DBMS]</p> 
        </div>
    </div>
  );
}

export default App;
