import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
  faAngleDoubleUp,
  faAward
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
          date=" Oct 2019 - Present"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h1>Mondo</h1>
          <h2>Senior Software Developer</h2>
        </VerticalTimelineElement>
    
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=" Nov 2015 - Oct 2019"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h1>Synergetic Management Systems</h1>
          <h2>Software Developer Team Leader</h2>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=" Jul 2019"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faAward} />}
        >
          <h1>AWS Certified Developer - Associate</h1>
          <h2>Amazon Web Services (AWS)</h2>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=" March 2017"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faAward} />}
        >
          <h1>Scrum Master</h1>
          <h2>International Scrum Institute</h2>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=" Sep 2016"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faAward} />}
        >
          <h1>DevOps Foundation</h1>
          <h2>DevOps Institute</h2>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=" Jan 2013 - Nov 2015"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h1>ObjectMastery</h1>
          <h2>Application Developer</h2>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=" Oct 2011 - Jan 2013"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h1>Pentagon Digital</h1>
          <h2>Developer</h2>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=" 2009 - 2013"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h1>Monash University</h1>
          <h2>Bachelor of Information Technology and Systems</h2>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=" 2010"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faAward} />}
        >
          <h1>International Scholarship for Excellence </h1>
          <h2>Monash University</h2>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=" 2001 - 2006"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h1>Iran University of Science and Technology</h1>
          <h2>Bachelor of Material Engineering - Metallurgy</h2>
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
