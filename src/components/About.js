import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNode,
  faCss3,
  faHtml5,
  faJs
} from "@fortawesome/free-brands-svg-icons";
const postgres = require("../images/postgresql.png");

function About() {
    return (
        <div id="aboutMe" className="about ">
          <h1>About Me</h1>
          <p>
            Motivated senior software developer, with a passion for teamwork to
            contribute to the success of IT projects. Strong focus on backend
            software development with exposure to frontend development.
            <br />
            Having vast knowledge in software development and agile methodology has
            enabled me to lead high performance teams in the past.
            <br />
            Proven track record of efficient and effective team member management,
            with a strong knowledge in NodeJS, C#, AWS, and DevOps.
          </p>
          <div className="tech">
            <div className="tools">
              <h2>U.I.</h2>
              <div className="tools-icon">
                <FontAwesomeIcon icon={faHtml5} />
                <FontAwesomeIcon icon={faCss3} />
                <FontAwesomeIcon icon={faJs} />
              </div>
            </div>
    
            <div className="web-technologies">
              <h2>P.W.A</h2>
              <div className="web-icons">
                <FontAwesomeIcon icon={faReact} />
                <FontAwesomeIcon icon={faNode} />
                <img
                  src={postgres}
                  alt="postgreSql Icon"
                  width="120px"
                  height="120px"
                />
              </div>
            </div>
    
            <div className="cms">
              <h2>C.M.S.</h2>
              <img
                src={require("../images/drupal.png")}
                alt="drupal-logo"
                width="150px"
                height="150px"
              />
            </div>
          </div>
        </div>
      );
}

export default About;
