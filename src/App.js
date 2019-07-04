import React ,{useState} from 'react';
import Particles from 'react-particles-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faGooglePlusG,faFacebookF,faLinkedinIn,faGithub,faQuora,faReact,faNode,faCss3,faHtml5,faJs,faNodeJs,faDrupal} from '@fortawesome/free-brands-svg-icons';
import { faDownload ,faChevronCircleDown,faCode,faSchool,faGraduationCap,faUniversity,faAngleDoubleUp, faInfo, faInfoCircle, faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import ReactCardFlip from 'react-card-flip';
import 'react-vertical-timeline-component/style.min.css';
import './App.css';

const postgres=require('./images/postgresql.png')
const resume=require('./resume/Resume_Fahad_Israr_May_2019.pdf')
let particleconfig={
  "particles": {
    "number": {
      "value": 60,
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
  const [view1, toggle1] = useState(0);
  const [view2, toggle2] = useState(0);
  const [view3, toggle3] = useState(0);
  const [view4, toggle4] = useState(0);

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
                <a title='Quora'  className='fa quora' href='https://www.quora.com/profile/Fahad-Israr' target='new'><FontAwesomeIcon icon={faQuora}/></a>
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
        
        {/*-------------About Me------------*/}

        <div id='aboutMe' className='about '>
          <h1>About Me</h1>
          <p>I am a Js Enthusiast and a Progressive Web App Developer and I love to work with  React Js [for UI] , Node Js [for Backend] and postgreSQL [for DBMS].
              Besides, I love  Competitive Programming and my most preferred language is <b>C++</b>, though <b>Java</b> was my First Language. 
              I love to work with Open Source Softwares 
              and also , I love to contribute to it. I've  worked with Drupal based Content Management System as Well and Developed  Custom Modules.  
          </p> 
          <div className='tech'>
            <div className='tools'>
                <h2>U.I.</h2>
                <div className='tools-icon'>
                  <FontAwesomeIcon icon={faHtml5 } />
                  <FontAwesomeIcon icon={faCss3} />
                  <FontAwesomeIcon icon={faJs}/>
                </div>
              </div>

              <div className='web-technologies'>
                <h2>P.W.A</h2>
                <div className='web-icons'>
                <FontAwesomeIcon icon={faReact} />
                <FontAwesomeIcon icon={faNode} />
                <img src={postgres} alt='postgreSql Icon' width='120px' height='120px' />
                </div>
              </div>

              <div className='cms'>
                <h2>C.M.S.</h2>
                <img src={require('./images/drupal.png')} alt='drupal-logo' width='150px' height='150px'/>
              </div>

          </div>
          
        </div>
        
        {/*------------Work Timeline-------- */}

        <div className='timeline'>
        <h1>Timeline</h1>
        <VerticalTimeline>
        

          <VerticalTimelineElement  className="vertical-timeline-element--work" date=" May 2019 - July 2019" iconStyle={{background:'#1a222c', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faDrupal}/>}>
              <h1>IIT Bombay</h1>
              <h1>-Fellowship at FOSSEE 2019-</h1>
              <p>Working and Contributing on Open Source Softwares like Drupal</p>
              </VerticalTimelineElement>

          <VerticalTimelineElement  className="vertical-timeline-element--work" date=" May 2019 -  Present" iconStyle={{background:'#1a222c', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faReact}/>}>
            <h1>Lenshood</h1>
            <h1>-Full Stack Dev-</h1>
            <p>Developing a PWA for E-Commerce with React+Node+postgreSQL </p>
            </VerticalTimelineElement>

          <VerticalTimelineElement  className="vertical-timeline-element--work" date=" Dec 2018 - Jan 2019" iconStyle={{background:'#1a222c', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faReact}/>}>
            <h1>IoTrek</h1>
            <h1>-P.W.A Dev-</h1>
            <p>Building an ERP system on React JS</p>
            </VerticalTimelineElement>

          <VerticalTimelineElement  className="vertical-timeline-element--work" date=" August 2018 - Present" iconStyle={{background:'#1a222c', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faNodeJs}/>}>
            <h1>Xungry.com</h1>
            <h1>-Full Stack Dev-</h1>
            <p>Building a PWA using React+Node Framework</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement  className="vertical-timeline-element--work" date=" August 2017 - Present" iconStyle={{background:'#1a222c', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode}/>}>
            <h1>Web Dev Club, IIIT Trichy</h1>
            <h1>-Full Stack Dev-</h1>
            <p>Building Websites ,Apps and Utilities for College</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement  className="vertical-timeline-element--work" date=" 2017 - 2021" iconStyle={{background:'#1a222c', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap}/>}>
            <h1>IIIT Trichy</h1>
            <h1>- B.Tech -</h1>
            <p>Electronics and Communication Engineering</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement  className="vertical-timeline-element--work" date="May 2016" iconStyle={{background:'#1a222c', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faUniversity}/>}>
            <h1>City Montessori School</h1>
            <h1>- Intermediate -</h1>
            <p>Scored 99.26 Percentile ISC 2016</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement  className="vertical-timeline-element--work" date="May 2014" iconStyle={{background:'#1a222c', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faSchool}/>}>
            <h1>City Montessori School</h1>
            <h1>- High School -</h1>
            <p>Meritorious Student in ICSE 2014</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement  iconStyle={{background:'#1a222c', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faAngleDoubleUp}/>}>
            </VerticalTimelineElement>
            

        </VerticalTimeline>
        
        </div>
        {/*------------Projects---------------*/}
        <div id='projects' className='projects'>
          <h1>Projects</h1>
          <h2 style={{maxWidth:'90%'}}>Being a Professional , I love to maintain the confidentiality between my organizations & me and so I can't display my
            work I did there.<br/>But, still there's plenty I have to showcase...Hope you Like it!!!!  </h2>
          <div className='project-content'>
              <div className='project-item' onMouseEnter={()=>{toggle1(1)}} onMouseLeave={()=>{toggle1(0)}}>
                <h1>IIITT Library</h1>
                <ReactCardFlip isFlipped={view1} flipDirection="horizontal">
                <img key='front' src={require('./images/library.png')} alt='IIITT Library' />
                <div className='reverse' key='back'>
                  <h1>A PWA serving as Library Database Management System For IIIT Trichy</h1>
                  <h2>Developed with React Js Node Js & postgreSQL</h2>
                  <h3>For Testing : Server Deployed on Heroku ,DBMS hosted with Heroku postgeSQL and Front End Hosted with gh-pages</h3>
                  <p>*Login for Testing: ->Email: library@iiitt.ac.in <br/>->Password: iiittlibrary</p>
                  </div>
                </ReactCardFlip>

                

                <div className='options'>
                  <div onClick={() => toggle1(!view1)}><a href='#vvvn'>More <FontAwesomeIcon icon={faInfoCircle}/></a></div>
                  <div><a href='#vn'>Launch <FontAwesomeIcon icon={faPlayCircle}/></a></div>
                  <div><a href='#jhjh'>Source<FontAwesomeIcon icon={faGithub}/></a></div>
                </div>
              </div>
            

              <div className='project-item' onMouseEnter={()=>{toggle2(1)}} onMouseLeave={()=>{toggle2(0)}}>
                <h1>Coherence '19</h1>
                <ReactCardFlip isFlipped={view2} flipDirection="horizontal">
                <img key='front' src={require('./images/techfest.png')} alt='IIITT Library' />
                <div className='reverse' key='back'>
                  <h1>Website Developed for Annual TechFest at IIIT Trichy</h1>
                  <h1>Coherence:A TECH ODYSSEY</h1>
                  <h2>Developed with Vanilla JS</h2>
                  <h3>Deployed as Demo On gh-pages</h3>
                  
                  </div>
                </ReactCardFlip>

                <div className='options'>
                  <div onClick={() => toggle2(!view2)}><a href='#vvvn'>More <FontAwesomeIcon icon={faInfoCircle}/></a></div>
                  <div><a href='#vn'>Launch <FontAwesomeIcon icon={faPlayCircle}/></a></div>
                  <div><a href='#jhjh'>Source<FontAwesomeIcon icon={faGithub}/></a></div>
                </div>
              </div>


              <div className='project-item' onMouseEnter={()=>{toggle3(1)}} onMouseLeave={()=>{toggle3(0)}}>
                <h1>E Cell</h1>
                <ReactCardFlip isFlipped={view3} flipDirection="horizontal">
                <img key='front' src={require('./images/ecell.png')} alt='IIITT Library' />
                <div className='reverse' key='back'>
                  <h1>Website intended for Entrepreneur Cell of IIIT Trichy</h1>
                  <h1>E-Cell:IIITT</h1>
                  <h2>Developed with React Js & Animated with Pure CSS</h2>
                  <h3>Deployed as Demo On gh-pages</h3>
                  
                  </div>
                </ReactCardFlip>

                <div className='options'>
                  <div onClick={() => toggle3(!view3)}><a href='#vvvn'>More <FontAwesomeIcon icon={faInfoCircle}/></a></div>
                  <div><a href='#vn'>Launch <FontAwesomeIcon icon={faPlayCircle}/></a></div>
                  <div><a href='#jhjh'>Source<FontAwesomeIcon icon={faGithub}/></a></div>
                </div>
              </div>


              <div className='project-item' onMouseEnter={()=>{toggle4(1)}} onMouseLeave={()=>{toggle4(0)}}>
                <h1>T & P</h1>
                <ReactCardFlip isFlipped={view4} flipDirection="horizontal">
                <img key='front' src={require('./images/tp.png')} alt='IIITT Library' />
                <div className='reverse' key='back'>
                  <h1>Website intended for Training&Placement Cell  IIIT Trichy</h1>
                  <h1>T&P:IIITT</h1>
                  <h2>Developed with Vanilla Js and Powered with Bootstrap</h2>
                  <h3>Deployed as Demo On gh-pages</h3>
                  
                  </div>
                </ReactCardFlip>

                <div className='options'>
                  <div onClick={() => toggle4(!view4)}><a href='#vvvn'>More <FontAwesomeIcon icon={faInfoCircle}/></a></div>
                  <div><a href='#vn'>Launch <FontAwesomeIcon icon={faPlayCircle}/></a></div>
                  <div><a href='#jhjh'>Source<FontAwesomeIcon icon={faGithub}/></a></div>
                </div>
              </div>











          </div>
        </div>
    </div>
  );
}

export default App;
