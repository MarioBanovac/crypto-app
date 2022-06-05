import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function DirectionIcon(props) {
  return (
    <span>
      {
        <FontAwesomeIcon
          icon={props.value >= 0 ? faCaretUp : faCaretDown}
          color={props.value >= 0 ? "#00FC2A" : "#FE1040"}
          size={"xs"}
          fixedWidth
        />
      }
    </span>
  );
}
