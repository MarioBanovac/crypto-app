import React from "react";
import { StyledFlexContainer } from "ui";

export default function RadioButton(props) {
    const {className,value,checked,changeTimeFrame} = props;
  return (
    <StyledFlexContainer className={className}>
      <input onChange={changeTimeFrame} value={value} checked={checked} type="radio"/>
      <label>{value}</label>
    </StyledFlexContainer>
  );
}
