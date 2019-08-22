import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faDrupal
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faSchool,
  faGraduationCap,
  faUniversity,
  faAngleDoubleUp
} from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";

function Timeline() {
    return (
        <div className="timeline">
          <h1>Timeline</h1>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date=" May 2019 - July 2019"
              iconStyle={{ background: "#000000", color: "#fff" }}
              icon={<FontAwesomeIcon icon={faDrupal} />}
            >
              <h1>IIT Bombay</h1>
              <h1>-Fellowship at FOSSEE 2019-</h1>
              <p>Working and Contributing on Open Source Softwares like Drupal</p>
            </VerticalTimelineElement>
    
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date=" May 2019 -  Present"
              iconStyle={{ background: "#000000", color: "#fff" }}
              icon={<FontAwesomeIcon icon={faReact} />}
            >
              <h1>Lenshood</h1>
              <h1>-Full Stack Dev-</h1>
              <p>Developing a PWA for E-Commerce with React+Node+postgreSQL </p>
            </VerticalTimelineElement>
    
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date=" Dec 2018 - Jan 2019"
              iconStyle={{ background: "#000000", color: "#fff" }}
              icon={<FontAwesomeIcon icon={faReact} />}
            >
              <h1>IoTrek</h1>
              <h1>-P.W.A Dev-</h1>
              <p>Building an ERP system on React JS</p>
            </VerticalTimelineElement>
    
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date=" August 2018 - Present"
              iconStyle={{ background: "#000000", color: "#fff" }}
              icon={<FontAwesomeIcon icon={faNodeJs} />}
            >
              <h1>Xungry.com</h1>
              <h1>-Full Stack Dev-</h1>
              <p>Building a PWA using React+Node Framework</p>
            </VerticalTimelineElement>
    
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date=" August 2017 - Present"
              iconStyle={{ background: "#000000", color: "#fff" }}
              icon={<FontAwesomeIcon icon={faCode} />}
            >
              <h1>Web Dev Club, IIIT Trichy</h1>
              <h1>-Full Stack Dev-</h1>
              <p>Building Websites ,Apps and Utilities for College</p>
            </VerticalTimelineElement>
    
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date=" 2017 - 2021"
              iconStyle={{ background: "#000000", color: "#fff" }}
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
            >
              <h1>IIIT Trichy</h1>
              <h1>- B.Tech -</h1>
              <p>Electronics and Communication Engineering</p>
            </VerticalTimelineElement>
    
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="May 2016"
              iconStyle={{ background: "#000000", color: "#fff" }}
              icon={<FontAwesomeIcon icon={faUniversity} />}
            >
              <h1>City Montessori School</h1>
              <h1>- Intermediate -</h1>
              <p>Scored 99.26 Percentile ISC 2016</p>
            </VerticalTimelineElement>
    
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="May 2014"
              iconStyle={{ background: "#000000", color: "#fff" }}
              icon={<FontAwesomeIcon icon={faSchool} />}
            >
              <h1>City Montessori School</h1>
              <h1>- High School -</h1>
              <p>Meritorious Student in ICSE 2014</p>
            </VerticalTimelineElement>
    
            <VerticalTimelineElement
              iconStyle={{ background: "#000000", color: "#fff" }}
              icon={<FontAwesomeIcon icon={faAngleDoubleUp} />}
            />
          </VerticalTimeline>
        </div>
      );
}

export default Timeline;
