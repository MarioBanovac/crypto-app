import React from "react";

export default function PercentageRounder(props){
  const { percentage, className } = props;
  return (
    <span className={className}>
      {Math.abs(parseFloat(percentage.toFixed(1)))}%
    </span>
  );
};
