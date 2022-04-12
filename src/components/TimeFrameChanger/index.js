import React from "react";
import { StyledTimeFrame } from "../../ui";

export const TimeFrameChanger = (props) => {
  const { timeFrames, className, changeTimeFrame } = props;
  return (
    <div className={className}>
      {timeFrames.map(({ isActive, displayValue, value }) => (
        <StyledTimeFrame
          onClick={changeTimeFrame}
          isActive={isActive}
          key={value}
        >
          {displayValue}
        </StyledTimeFrame>
      ))}
    </div>
  );
};
