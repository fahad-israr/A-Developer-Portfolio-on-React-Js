import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactCardFlip from "react-card-flip";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInfoCircle, faPlayCircle } from "@fortawesome/free-solid-svg-icons";

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlipped: 0,
      index: props.index,
      project: props.project
    };
  }

  setFlipped(value) {
    this.setState({
      isFlipped: value
    });
  }

  toggleFlipped() {
    this.setState({
      isFlipped: !this.state.isFlipped
    });
  }

  render() {
    const project = this.state.project;
    return (
      <div
        className="project-item"
        key={this.state.index}
        onMouseEnter={() => {
          this.setFlipped(1);
        }}
        onMouseLeave={() => {
          this.setFlipped(0);
        }}
      >
        <h1>{project.title}</h1>
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="horizontal"
        >
          <img
            key="front"
            src={process.env.PUBLIC_URL + project.thumbnail}
            alt={project.title}
          />
          <div
            className="reverse"
            key="back"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
        </ReactCardFlip>

        <div className="options">
          <div
            onClick={() => {
              this.toggleFlipped();
            }}
          >
            More <FontAwesomeIcon icon={faInfoCircle} />
          </div>
          <div>
            <a
              href={project.launch ? project.launch : project.source}
              target="new"
            >
              Launch <FontAwesomeIcon icon={faPlayCircle} />
            </a>
          </div>
          <div>
            <a href={project.source} target="new">
              Source
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
