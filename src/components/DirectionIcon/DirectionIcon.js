import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "styled-components";

export default function DirectionIcon(props) {
  const theme = useTheme();
  return (
    <span>
      {
        <FontAwesomeIcon
          icon={props.value >= 0 ? faCaretUp : faCaretDown}
          color={props.value >= 0 ? theme.mainPositive : theme.mainNegative}
          size={"xs"}
          fixedWidth
        />
      }
    </span>
  );
}
