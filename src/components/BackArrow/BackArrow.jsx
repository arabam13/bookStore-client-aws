import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function BackArrow() {
  return (
    <Link to="/" className="backArrow">
      {" "}
      <FontAwesomeIcon icon={solid("arrow-left")} />
      {" Retour"}
    </Link>
  );
}

export default BackArrow;
