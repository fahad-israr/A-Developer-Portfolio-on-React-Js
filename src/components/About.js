import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNode,
  faJs,
  faAngular,
  faAws
} from "@fortawesome/free-brands-svg-icons";
const lambda = require("../images/aws-lambda.svg");
const dynamoDB = require("../images/aws-dynamodb.svg");
const rds = require("../images/aws-rds.svg");
const sns = require("../images/aws-sns.svg");
const sqs = require("../images/aws-sqs.svg");
const gateway = require("../images/aws-api-gateway.svg");
const graphQL = require("../images/graphql.svg");

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
        <FontAwesomeIcon icon={faNode} color="#7FBD2F" />
        <FontAwesomeIcon icon={faAws} color="#FD8606" />
        <img src={gateway} alt="AWS API Gateway" />
        <img src={graphQL} alt="GraphQL" />
        <img src={lambda} alt="AWS Lambda" />
        <img src={dynamoDB} alt="AWS DynamoDB" />
        <img src={rds} alt="AWS RDS" />
        <img src={sns} alt="AWS SNS" />
        <img src={sqs} alt="AWS SQS" />
        <FontAwesomeIcon icon={faJs} color="#ffd43b" />
        <FontAwesomeIcon icon={faAngular} color="#D30025" />
        <FontAwesomeIcon icon={faReact} color="#61dbfb" />
      </div>
    </div>
  );
}

export default About;

/*
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
        */
