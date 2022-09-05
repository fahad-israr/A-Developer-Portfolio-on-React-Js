import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNode,
  faJs,
  faAngular,
  faAws
} from "@fortawesome/free-brands-svg-icons";
import lambda from "../images/logos/aws-lambda.svg";
import dynamoDB from "../images/logos/aws-dynamodb.svg";
import rds from "../images/logos/aws-rds.svg";
import sns from "../images/logos/aws-sns.svg";
import sqs from "../images/logos/aws-sqs.svg";
import gateway from "../images/logos/aws-api-gateway.svg";
import graphQL from "../images/logos/graphql.svg";
import docker from "../images/logos/docker.svg";
import stepFunctions from "../images/logos/aws-step-functions.png";
import cdk from "../images/logos/cdk.png";
import projen from "../images/logos/projen.png";

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
        <img src={stepFunctions} alt="AWS Step Functions" />
        <img src={cdk} alt="AWS CDK" />
        <img src={projen} alt="Projen" />
        <FontAwesomeIcon icon={faJs} color="#ffd43b" />
        <FontAwesomeIcon icon={faAngular} color="#D30025" />
        <FontAwesomeIcon icon={faReact} color="#61dbfb" />
        <img src={docker} alt="docker" />
      </div>
    </div>
  );
}

export default About;