import React from "react";
import Contact from "./Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <div className="footer">
          <div>
            <h2>Connect With Me:</h2>
          </div>
          <Contact />
          <div className="made">
            <h2>
              <FontAwesomeIcon icon={faCode} /> with{" "}
              <FontAwesomeIcon icon={faHeart} /> on{" "}
              <FontAwesomeIcon icon={faReact} />{" "}
            </h2>
          </div>
        </div>
      );
}

export default Footer;
