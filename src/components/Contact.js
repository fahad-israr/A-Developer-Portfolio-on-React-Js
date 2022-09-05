import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedinIn,
  faGithub,
  faHackerrank
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="icon-container">
      <a
        title="Linkedin"
        className="fa"
        href="https://www.linkedin.com/in/amin-fazl/"
        target="new"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a
        title="Github"
        className="fa2"
        href="https://github.com/AminFazlMondo"
        target="new"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        title="HACKERRANK"
        className="fa"
        href="https://www.hackerrank.com/amin_fazl"
        target="new"
      >
        <FontAwesomeIcon icon={faHackerrank} />
      </a>
    </div>
  );
}

export default Contact;
